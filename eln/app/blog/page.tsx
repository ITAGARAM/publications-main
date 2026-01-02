'use client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from "@/lib/imageUrlBuilder";
import { useEffect, useState, useRef } from 'react';
import '../blog.css';
import Header from '@/components/header';
import blog_new_img from '@/public/assets/images/blog/blog_new_img.svg';
import { IoSearch } from "react-icons/io5";
import placeholder_img from "../../public/assets/images/publication/placeholder.svg";
import back_arrow from "../../public/assets/images/blog/back-arrow.svg";
import placeholder_img1 from "../../public/assets/images/publication/placeholder1.png";
import whitepaper from "../../public/assets/images/blog/featured.svg";
import blog_banner_ad from "../../public/assets/images/blog/blog_banner_ad.svg";
import blog_banner_ad_two from "../../public/assets/images/blog/blog_banner_ad_two.svg";
import backto_top from "../../public/assets/images/blog/backto_top.svg";
import blog_banner_ad_three from "../../public/assets/images/blog/blog_banner_ad_three.svg";
import recent from "../../public/assets/images/publication/recent.svg";
import search from "../../public/assets/images/publication/search.svg"
import Footer from '../footer';
import { FaAngleRight } from 'react-icons/fa';
import BannerCard from '../publication/banner-card/banner-card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Pagination from '@/components/Pagination';
import { useRouter } from 'next/navigation';



const blogsPerPage = 4;
import { client } from "@/lib/sanity";
import { PortableText } from '@portabletext/react';
const categories = [
  'All articles',
  'Top Read Articles',
  'Categorized',
  'General',
  'Product',
  'News & Event',

];
const CATEGORY_LABELS: Record<string, string> = {
  general: "General",
  product: "Product",
  news: "News & Event",
  featured: "Featured",
};




const blogsQuery = `*[_type == "blog"] | order(publishedAt desc){
  title,
  summary,
  slug,
  category,
  author,
  authorUrl,
  usernameTags,
  publishedAt,
  isTopRead,
  "mainImage": mainImage.asset->url
}`;

const adsQuery = `*[_type == "adImage"]{
  image,
  url
}`;
const desiredOrder = ['topRead', 'general', 'product', 'news'];

const popupQuery = `*[_type == "popup"][0]{
  text,
  image,
  link
}`;

const Blog = () => {
  // const [activeCategory, setActiveCategory] = useState('All articles');
  const [activeCategory, setActiveCategory] = useState('Categorized');

  const [hideCategoryBox, setHideCategoryBox] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const SearchRef = useRef<HTMLDivElement>(null);
  const BannerRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();
  const [touchedTop, setTouchedTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredBlog, setFeaturedBlog] = useState<Blog | null>(null);
  const [randomAd, setRandomAd] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchSubmitted, setSearchSubmitted] = useState(false);


  interface Blog {
    title: string;
    slug: { current: string };
    summary?: string;
    fullDetails?: any[];
    category?: string;
    author?: string;
    authorUrl?: string;
    usernameTags?: string[];
    publishedAt?: string;
    mainImage?: string;
    viewCount?: number;
    isTopRead?: boolean;

  }
  const categoryTitles: { [key: string]: string } = {
    general: 'General',
    product: 'Product',
    news: 'News & Event',
    featured: 'Featured',
    topRead: 'Top Read Articles',
  };


  const [popupContent, setPopupContent] = useState<{
    text: any[];
    link?: string;
  } | null>(null);

  useEffect(() => {
    async function fetchPopup() {
      const data = await client.fetch(popupQuery);
      setPopupContent(data);
    }
    fetchPopup();
  }, []);
  // Add this ref in your component
  const blogsSectionRef = useRef<HTMLDivElement>(null);

  // Update category click handler to smooth scroll
  const onCategoryClick = (category: string) => {
    setActiveCategory(category);
    // Smooth scroll to blogs section
    blogsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    // Reset pagination or other states if needed
    setCurrentPage(1);
  };

  useEffect(() => {
    if (searchSubmitted && blogsSectionRef.current) {
      blogsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchSubmitted]);




  useEffect(() => {
    async function fetchAds() {
      const ads = await client.fetch(adsQuery);
      if (ads.length > 0) {
        const random = ads[Math.floor(Math.random() * ads.length)];
        setRandomAd(random);
      }
    }
    fetchAds();
  }, []);




  useEffect(() => {
    client.fetch<Blog[]>(blogsQuery).then(setBlogs);

  }, []);


  useEffect(() => {
    client.fetch(blogsQuery).then((data) => {
      setBlogs(data);
      const feat = data.find((blog: { category: string; }) => blog.category === 'featured');
      setFeaturedBlog(feat || null);
    });
  }, []);


  // Handle category box overlap with footer
  useEffect(() => {
    const handleScroll = () => {
      const categoryBox = document.getElementById('category-box');
      const footer = document.getElementById('footer');

      if (!categoryBox || !footer) return;

      const categoryBoxRect = categoryBox.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      if (categoryBoxRect.bottom > footerRect.top) {
        setHideCategoryBox(true);
      } else {
        setHideCategoryBox(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle sticky menu & back to top
  useEffect(() => {
    const scrollFunction = () => {
      setShowButton(window.scrollY > 20);

      const protocolmenu = document.querySelector('.protocolmenu');
      if (protocolmenu) {
        const offset = protocolmenu.getBoundingClientRect().top;
        const top = window.scrollY;
        setIsFixed(top >= offset);
      }
    };

    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const search = SearchRef.current;
      const banner = BannerRef.current;
      if (!search || !banner) return;

      const bannerRect = banner.getBoundingClientRect();
      const isTouchingTop = bannerRect.bottom <= 100;

      setTouchedTop(isTouchingTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [])


  useEffect(() => {
    const handleScroll = () => {
      if (!popupClosed && window.scrollY > 20) {
        setShowPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popupClosed]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupClosed(true);
  }
  const filteredBlogs: Blog[] = blogs.filter((blog) => {

    const lowerSearch = searchTerm.toLowerCase();

    const titleMatch = blog.title?.toLowerCase().includes(lowerSearch);
    const summaryMatch = blog.summary?.toLowerCase().includes(lowerSearch);
    const authorMatch = blog.author?.toLowerCase().includes(lowerSearch);
    const usernameTagsMatch = blog.usernameTags?.some((tag: string) => tag.toLowerCase().includes(lowerSearch));
    const categoryMatch = blog.category?.toLowerCase().includes(lowerSearch);


    if (activeCategory === "All articles") {
      return blog.category !== 'featured' && (titleMatch || summaryMatch || authorMatch || usernameTagsMatch || categoryMatch);
    }

    if (activeCategory === "Categorized") {
      return blog.category !== 'featured' && (titleMatch || summaryMatch || authorMatch || usernameTagsMatch || categoryMatch);
    }

    if (activeCategory === "Top Read Articles") {
      return blog.isTopRead === true;
    }

    // if (activeCategory === "Blog of the Month") {
    //   const blogDate = new Date(blog.publishedAt ?? Date.now());
    //   const now = new Date();
    //   return (
    //     blogDate.getMonth() === now.getMonth() &&
    //     blogDate.getFullYear() === now.getFullYear() &&
    //     (titleMatch || summaryMatch || authorMatch || usernameTagsMatch || categoryMatch)
    //   );
    // }

    // // Blog of the Week
    // if (activeCategory === "Blog of the week") {
    //   const blogDate = new Date(blog.publishedAt ?? Date.now());
    //   const now = new Date();
    //   const oneWeekAgo = new Date();
    //   oneWeekAgo.setDate(now.getDate() - 7);
    //   return blogDate >= oneWeekAgo && blogDate <= now &&
    //     (titleMatch || summaryMatch || authorMatch || usernameTagsMatch || categoryMatch);
    // }

    // Normal category filtering
    const categoryMap: { [key: string]: string } = {
      "General": "general",
      "Product": "product",
      "News & Event": "news",
    };

    const catKey = categoryMap[activeCategory];
    if (catKey) {
      return blog.category === catKey &&
        (titleMatch || summaryMatch || authorMatch || usernameTagsMatch || categoryMatch);
    }

    return false;
  });

  const getItemsPerPage = () => {
  if (["General", "Product", "News & Event"].includes(activeCategory)) {
    return 6;
  }
  return blogsPerPage; // default = 4
};



  const paginatedBlogs = (() => {
  const perPage = getItemsPerPage();
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return filteredBlogs.slice(start, end);
})();



  // Group blogs by category
  const groupedBlogs = blogs.reduce<Record<string, Blog[]>>((acc, blog) => {

    if (blog.category === 'featured') return acc; // skip featured

    const cat = blog.category || 'General';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(blog);
    acc[cat].sort(
      (a, b) => new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime()
    );
    return acc;
  }, {});
  console.log("Grouped Blogs:", groupedBlogs);



  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !popupClosed) {
        setShowPopup(true);
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!popupClosed) {
        (e as any).returnValue = '';
        return '';
      }
    };

    document.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [popupClosed]);








  return (
    <div>

      {/* Optional Protocolmenu */}
      {/* <div className={`protocolmenu ${isFixed ? 'fixed' : ''}`}>Sticky Content</div> */}

      <div className="blog-container">
        {/* {showPopup && popupContent && (
          <div className="popup-ad">
            <div className="popup-content">
              <div className="popup-header">
                <button className="popup-close" onClick={handleClosePopup}>×</button>
              </div>
          
              <PortableText value={popupContent.text} />
              {popupContent.link && (
                <a href={popupContent.link} target="_blank" rel="noopener noreferrer" className="popup-subscribe">
                  Learn More
                </a>
              )}
            </div>
          </div>
        )} */}

        <div className="publication-banner">
          <div className="container">
            <div
              className="row mt-5 cursor-pointer"
              ref={BannerRef}
              onClick={() => {
                if (featuredBlog?.slug?.current) {
                  router.push(`/blog/${decodeURIComponent(featuredBlog.slug.current)}`);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              {/* Left column: text + whitepaper */}
              <div className="col-lg-6 col-md-7 position-relative publication-banner-mobile">
                {/* Whitepaper image (always visible) */}
                <Image
                  src={whitepaper}
                  alt="Feature Whitepaper"
                  className="whitepaper"
                  width={260}
                  height={50}
                />

                {/* Blog label + Back button */}
                <div className="d-flex align-items-center">
                  <h6>Blog</h6>
                  <span className="line ms-2"></span>
                </div>

                {/* Blog text content */}
                {featuredBlog ? (
                  <>
                    <h1>{featuredBlog.title}</h1>
                    <p className='feature-p'>{featuredBlog.summary}</p>
                    <p className='feature-p'>
                      {featuredBlog.author}{" "}
                      {new Date(featuredBlog.publishedAt ?? Date.now()).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </>
                ) : (
                  <>
                    <h1>
                      Stay Updated with the latest in lab digitization and ELN advancements.
                    </h1>
                    <p>
                      GxP is a set of regulations and quality guidelines formulated to ensure the safety of life sciences products while maintaining quality...
                    </p>
                    <p>Dec 22, 2025</p>
                  </>
                )}
              </div>

              {/* Right column: image */}
              <div className="col-lg-6 col-md-5 position-relative d-md-flex justify-content-md-center align-items-md-center">
                <Image
                  src={featuredBlog?.mainImage ? featuredBlog.mainImage : placeholder_img1}
                  alt="Featured Blog"
                  className="img-fluid placeholder1"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            {/* Search bar */}
            <div
              ref={SearchRef}
              className={`search_bar w-75 mx-auto ${touchedTop ? "fixed" : ""}`}
            >
              <div className="search-icon">
                <Image src={search} alt="search" style={{ width: '16px', height: 'auto' }} />
              </div>
              <input
                type="text"
                placeholder="Start searching here"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setActiveCategory('All articles');  // Set active category to "All articles" when searching
                  setSearchSubmitted(false); // reset on typing new search term
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault(); // prevent form submit or default behavior
                    setSearchSubmitted(true); // mark that search was submitted
                    // Optionally, you can trigger other effects or API calls here
                  }
                }}
              />


            </div>
            {touchedTop && <div style={{ height: "180px" }} />}
          </div>


        </div>


        <div className="container">
          <div className='row mt-5'>
            <div className='col-lg-3 col-md-4'>
              <div
                id="category-box"
                className={`category-box transition ${hideCategoryBox ? 'hidden-box' : 'sticky-box'}`}
              >
                <div className="p-3" style={{ width: '200px' }}>
                  <h5 className="">Category</h5>
                  <ul className="list-unstyled mt-3 mb-0">
                    {categories
                      .filter(category => category !== 'Categorized')
                      .map((category) => {
                        const displayLabel = category === 'Product' ? 'Product' : category;
                        return (
                          <li
                            key={category}
                            className={`d-flex align-items-center cursor-pointer ${category === activeCategory ? 'text-primary fw-semibold' : 'text-secondary-li'}`}
                            onClick={() => onCategoryClick(category)}
                            style={{ cursor: 'pointer' }}
                          >
                            {category === activeCategory ? (
                              <FaAngleRight className="me-2 text-primary" />
                            ) : (
                              <span className="me-4" />
                            )}
                            {displayLabel}
                          </li>
                        );
                      })}
                  </ul>



                </div>
                <div>
                  <select
                    className="form-select mt-3"
                    value={activeCategory || ''}
                    onChange={(e) => onCategoryClick(e.target.value)}
                  >
                    {categories
                      .filter(category => category !== 'Categorized')
                      .map((category) => {
                        const displayLabel = category === 'Product' ? 'Industry' : category;
                        return (
                          <option key={category} value={category}>
                            {displayLabel}
                          </option>
                        );
                      })}
                  </select>
                </div>


                <div className='blog-sub-jotform'>
                  <iframe
                    id="JotFormIFrame-241490785757470"
                    src="https://form.jotform.com/241490785757470"
                    frameBorder="0"
                    style={{
                      width: "80%",
                      height: "350px",
                      border: "none",
                    }}
                    scrolling="no"
                    title="Download Form"
                    className='blog-sub-jotform'
                  ></iframe>
                </div>

              </div>
            </div>
            {searchSubmitted && searchTerm.trim() !== "" ? (
              // Show search results only
              <div className='col-lg-9 col-md-8 blogs-section ' ref={blogsSectionRef}>
                <h4>You are searching for: <strong>{searchTerm}</strong></h4>
                {filteredBlogs.length > 0 ? (
                  <div className="row">
                    {filteredBlogs.map((blog, idx) => (
                      <div key={blog.slug.current || idx} className="col-md-6 px-3 mb-4">
                        <BannerCard
                          img={blog.mainImage || placeholder_img}
                          alt={blog.title}
                          label={blog.category || "General"}
                          title={blog.title}
                          desc={blog.summary}
                          author={blog.author}
                          authorUrl={blog.authorUrl}
                          usernameTags={blog.usernameTags}
                          publishedAt={blog.publishedAt}
                          slug={blog.slug.current}
                          pageName={'blog'}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No results found.</p>
                )}
              </div>
            ) : (

              <div className='col-lg-9 col-md-8 blogs-section ' ref={blogsSectionRef}>
                {["General", "Product", "News & Event", "All articles", "Top Read Articles"].includes(activeCategory) && (
                  <div className="d-flex justify-content-between align-items-center title-flex">
                    <div className='recent'>
                      <h2 className="recent-post-heading">
                        <span className="highlight-bg">
                          {activeCategory === "Product" ? "Product" : activeCategory}
                        </span>
                      </h2>
                    </div>
                    <div className="col-4 text-end recent recent-time">
                      <Image src={recent} alt="recent" />
                      <p className="mt-4">Explore the latest insights, tips, and updates on lab digitization and ELN systems.</p>
                    </div>
                  </div>
                )}

                <div className="">
                  <div className="container">
                    <div className="row">
                      {activeCategory === "All article" ? (
                        // Display all blogs flat (not grouped or sliced), paginated if needed
                        paginatedBlogs.map((blog, idx) => (
                          <div key={blog.slug.current || idx} className="col-md-6 px-3 mb-4">
                            <BannerCard
                              img={blog.mainImage || placeholder_img}
                              alt={blog.title}
                              label={blog.category || "General"}
                              title={blog.title}
                              desc={blog.summary}
                              author={blog.author}
                              authorUrl={blog.authorUrl}
                              usernameTags={blog.usernameTags}
                              publishedAt={blog.publishedAt}
                              slug={blog.slug.current}
                              pageName={'blog'}
                            />
                          </div>
                        ))
                      ) : activeCategory === "Categorized" ? (
                        <>
                          <div className="d-flex justify-content-between align-items-center title-flex">
                            <div className='recent'>
                              <h2 className="recent-post-heading">
                                <span className="highlight-bg">Top Articles</span>
                              </h2>
                            </div>
                            <div className="col-4 text-end recent recent-time">
                              <Image src={recent} alt="recent" />
                              <p className="mt-4">Explore the latest insights, tips, and updates on lab digitization and ELN systems.</p>
                            </div>
                          </div>
                          {/* Top Read Articles */}
                          <div className="row mb-6">
                            {blogs
                              .filter(blog => blog.isTopRead === true) // Only top read articles
                              .sort((a, b) => new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime())
                              .slice(0, 2)
                              .map((blog, idx) => (
                                <div key={blog.slug.current || idx} className="col-md-6 px-3 mb-4">
                                  <BannerCard
                                    img={blog.mainImage || placeholder_img}
                                    alt={blog.title}
                                    label={blog.category || "General"}
                                    title={blog.title}
                                    desc={blog.summary}
                                    author={blog.author}
                                    authorUrl={blog.authorUrl}
                                    usernameTags={blog.usernameTags}
                                    publishedAt={blog.publishedAt}
                                    slug={decodeURIComponent(blog.slug.current)}
                                    pageName={'blog'}
                                  />
                                </div>
                              ))
                            }
                          </div>


                          {/* <div className="row mb-6">
                            {blogs
                              .filter(blog => blog.category !== 'featured') // Exclude featured if needed
                              .sort((a, b) => new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime())
                              .slice(0, 2)
                              .map((blog, idx) => (
                                <div key={blog.slug.current || idx} className="col-md-6 px-3 mb-4">
                                  <BannerCard
                                    img={blog.mainImage || placeholder_img}
                                    alt={blog.title}
                                    label={blog.category || "General"}
                                    title={blog.title}
                                    desc={blog.summary}
                                    author={blog.author}
                                    authorUrl={blog.authorUrl}
                                    usernameTags={blog.usernameTags}
                                    publishedAt={blog.publishedAt}
                                    slug={decodeURIComponent(blog.slug.current)}
                                  />
                                </div>
                              ))
                            }
                          </div> */}
                          <div className="mt-4"></div>

                          {desiredOrder
                            .filter(cat => groupedBlogs[cat])
                            .reduce<JSX.Element[]>((elements, cat, index) => {
                              elements.push(
                                <>
                                  <div className="d-flex justify-content-between align-items-center title-flex">
                                    <div className='recent'>
                                      <h2 className="recent-post-heading d-inline-block">
                                        <span className="highlight-bg">
                                          {cat === "product"
                                            ? "Product"
                                            : (categoryTitles[cat] || cat)
                                          }

                                        </span>
                                      </h2>
                                    </div>
                                  </div>


                                  <div key={cat} className="mb-5">
                                    <div className="row">
                                      {groupedBlogs[cat].slice(0, 4).map((blog, idx) => (
                                        <div key={blog.slug.current || idx} className="col-md-6 px-3 mb-4">
                                          <BannerCard
                                            img={blog.mainImage || placeholder_img}
                                            alt={blog.title}
                                            label={blog.category || "General"}
                                            title={blog.title}
                                            desc={blog.summary}
                                            author={blog.author}
                                            authorUrl={blog.authorUrl}
                                            usernameTags={blog.usernameTags}
                                            publishedAt={blog.publishedAt}
                                            slug={decodeURIComponent(blog.slug.current)}
                                            pageName={'blog'}
                                          />
                                        </div>
                                      ))}
                                    </div>

                                    {/* ✅ Show "Show more" button only if NOT Top Read Articles */}
                                    {cat !== "topRead" && (
                                      <div className="text-center mt-2">
                                        <div style={{ textAlign: "right", marginTop: "10px" }}>
                                          <button
                                            onClick={() => {
                                              const matchedCategory = categories.find(c =>
                                                c.toLowerCase().includes(cat.toLowerCase())
                                              );
                                              setActiveCategory(matchedCategory || "General");
                                              window.scrollTo({ top: 0, behavior: "smooth" });
                                            }}
                                            style={{
                                              backgroundColor: "#007bff",
                                              color: "white",
                                              border: "none",
                                              padding: "8px 18px",
                                              borderRadius: "25px",
                                              fontSize: "14px",
                                              fontWeight: "500",
                                              cursor: "pointer",
                                              transition: "background-color 0.3s ease",
                                            }}
                                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3399ff")}
                                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#007bff")}
                                          >
                                            Show more →
                                          </button>
                                        </div>
                                      </div>
                                    )}


                                    <div className="mt-4"></div>
                                  </div>
                                </>

                              );
                              if ((index + 1) % 2 === 0) {
                                elements.push(
                                  <div key={`ad-${index}`} className="container mt-1 mb-4">
                                    {randomAd ? (
                                      randomAd.url ? (
                                        <a href={randomAd.url} target="_blank" rel="noopener noreferrer">
                                          <Image
                                            src={urlFor(randomAd.image).url()}
                                            alt="Advertisement"
                                            className="img-fluid w-100"
                                            width={1200}
                                            height={400}
                                          />
                                        </a>
                                      ) : (
                                        <Image
                                          src={urlFor(randomAd.image).url()}
                                          alt="Advertisement"
                                          className="img-fluid w-100"
                                          width={1200}
                                          height={400}
                                        />
                                      )
                                    ) : (
                                      <Image src={blog_banner_ad} alt="recent" className="img-fluid w-100" />
                                    )}
                                  </div>
                                );
                              }
                              return elements;
                            }, [])}
                        </>



                      ) : (
                        // For all other categories, show filtered/paginated blogs
                        paginatedBlogs.map((blog, idx) => (
                          <div key={blog.slug.current || idx} className="col-md-6 px-3 mb-4">
                            <BannerCard
                              img={blog.mainImage || placeholder_img}
                              alt={blog.title}
                              label={blog.category || "General"}
                              title={blog.title}
                              desc={blog.summary}
                              author={blog.author}
                              authorUrl={blog.authorUrl}
                              usernameTags={blog.usernameTags}
                              publishedAt={blog.publishedAt}
                              slug={blog.slug.current}
                              pageName={'blog'}
                            />
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>


                {/* <div className='container mt-5'>
                {randomAd ? (
                  randomAd.url ? (
                    <a href={randomAd.url} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={urlFor(randomAd.image).url()}
                        alt="Advertisement"
                        className="img-fluid w-100"
                        width={1200}
                        height={400}
                      />
                    </a>
                  ) : (
                    <Image
                      src={urlFor(randomAd.image).url()}
                      alt="Advertisement"
                      className="img-fluid w-100"
                      width={1200}
                      height={400}
                    />
                  )
                ) : (
                  <Image src={blog_banner_ad} alt="recent" className="img-fluid w-100" />
                )}

              </div> */}
                {["General", "Product", "News & Event"].includes(activeCategory) && filteredBlogs.length > blogsPerPage && (
                  <div className='py-5'>
                    <Pagination
                      totalItems={filteredBlogs.length}
                      itemsPerPage={getItemsPerPage()}
                      currentPage={currentPage}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                )}

              </div>
            )}
          </div>
        </div>

        <div className="hero-section container">
          <div className="d-flex justify-content-between  align-items-center text-white px-4  hero-text">
            <div className="d-flex flex-column ">
              <h1 className="text-white">
                Digitize <span className="text-white">.</span> Simplify <span className="text-white">.</span> Organize <span className="text-white">.</span>
              </h1>
              <p className="lead text-white mt-2">
                Kickstart your paperless lab with Logilab ELN
              </p>
            </div>
            <div className="d-flex justify-content-center hero-text mt-4">
              <Link href="/request-a-demo" passHref legacyBehavior>
                <a className="home-btn rounded-pill">Request a Demo</a>
              </Link>
              <Link href="/product-brochure-download" passHref legacyBehavior>
                <a className="home-btn home-btn-white rounded-pill ms-3">Download brochure</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <Footer />
      </footer>
      {/* ✅ Back to Top Button */}
      {showButton && (
        <button onClick={backToTop} className="back-to-top">
          <Image src={backto_top} alt="recent" className='img-fluid w-50' />
        </button>
      )}
    </div>
  );
};

export default Blog;
