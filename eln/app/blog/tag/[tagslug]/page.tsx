"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/imageUrlBuilder";
import { useEffect, useState, useRef } from "react";
import "../../../blog.css";
import Header from "@/components/header";
import blog_new_img from "@/public/assets/images/blog/blog_new_img.svg";
import { IoSearch } from "react-icons/io5";
import placeholder_img from "../../../../public/assets/images/publication/placeholder.svg";
import back_arrow from "../../../../public/assets/images/blog/back-arrow.svg";
import placeholder_img1 from "../../../../public/assets/images/publication/placeholder1.png";
import whitepaper from "../../../../public/assets/images/blog/featured.svg";
import blog_banner_ad from "../../../../public/assets/images/blog/blog_banner_ad.svg";
import blog_banner_ad_two from "../../../../public/assets/images/blog/blog_banner_ad_two.svg";
import backto_top from "../../../../public/assets/images/blog/backto_top.svg";
import blog_banner_ad_three from "../../public/assets/images/blog/blog_banner_ad_three.svg";
import recent from "../../../../public/assets/images/publication/recent.svg";
import search from "../../../../public/assets/images/publication/search.svg";
import Footer from "../../../footer";
import { FaAngleRight } from "react-icons/fa";
import BannerCard from "../../../publication/banner-card/banner-card";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/navigation";
import { client } from "@/lib/sanity";

interface Ad {
  image: any;       // or a more specific type depending on your image object shape
  url?: string;     // optional string or string | null depending on data shape
}

const blogsByTagQuery = `*[_type == "blog" && $tag in usernameTags] | order(publishedAt desc){
  title,
  summary,
  slug,
  category,
  author,
  authorUrl,
  usernameTags,
  publishedAt,
  "mainImage": mainImage.asset->url
}`;
const adsQuery = `*[_type == "adImage"]{
  image,
  url
}`;
const BlogByTag = ({ params }: { params: { tagslug: string } }) => {
  const [hideCategoryBox, setHideCategoryBox] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const SearchRef = useRef<HTMLDivElement>(null);
  const BannerRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);
  const [blogs, setBlogs] = useState<any[]>([]);
  const router = useRouter();
  const [touchedTop, setTouchedTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [randomAd, setRandomAd] = useState<Ad | null>(null);
  const decodedTag = decodeURIComponent(params.tagslug);
  
  


  useEffect(() => {
    client.fetch(blogsByTagQuery, { tag: decodedTag } as Record<string, any>).then(setBlogs);

  }, [params.tagslug]);

  useEffect(() => {
    const handleScroll = () => {
      const categoryBox = document.getElementById("category-box");
      const footer = document.getElementById("footer");
      if (!categoryBox || !footer) return;
      const categoryBoxRect = categoryBox.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      setHideCategoryBox(categoryBoxRect.bottom > footerRect.top);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollFunction = () => {
      setShowButton(window.scrollY > 20);
      const protocolmenu = document.querySelector(".protocolmenu");
      if (protocolmenu) {
        const offset = protocolmenu.getBoundingClientRect().top;
        setIsFixed(window.scrollY >= offset);
      }
    };
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  

  useEffect(() => {
    const handleScroll = () => {
      const search = SearchRef.current;
      const banner = BannerRef.current;
      if (!search || !banner) return;
      const bannerRect = banner.getBoundingClientRect();
      setTouchedTop(bannerRect.bottom <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!popupClosed && window.scrollY > 20) setShowPopup(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popupClosed]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupClosed(true);
  };

  const filteredBlogs = blogs.filter((blog) => {
  const search = searchTerm.toLowerCase();
  return (
    blog.title?.toLowerCase().includes(search) ||
    blog.summary?.toLowerCase().includes(search) ||
    blog.author?.toLowerCase().includes(search) ||
    blog.category?.toLowerCase().includes(search) ||
    blog.usernameTags?.some((tag: string) => tag.toLowerCase().includes(search))
  );
});


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

  return (
    <div>
      <Header  whiteHeader/>
      <div className="blog-container">
        {/* {showPopup && (
          <div className="popup-ad">
            <div className="popup-content">
              <div className="popup-header">
                <button className="popup-close" onClick={handleClosePopup}>×</button>
              </div>
              <button className="popup-subscribe">Subscription</button>
            </div>
          </div>
        )} */}

        <div className="publication-banner blog-by-tag-banner publication-banner-body">
          <div className="container">
            <div className="mt-5" ref={BannerRef}>
              <div className="col-md-12 position-relative text-center">

                <div className="d-flex align-items-center justify-content-center">
                  <h6>Tags</h6>
                  <button className="back-arrow-btn" onClick={() => router.back()}>
                    <Image src={back_arrow} alt="Back" width={20} height={100} />
                  </button>
                  <span className="line ms-2" />
                </div>
                <h1>Posts tagged with "{decodedTag}"</h1>
                <p>Showing latest blog posts for the selected tag.</p>
              </div>
            </div>

            <div ref={SearchRef} className={`search_bar w-75 mx-auto ${touchedTop ? "fixed" : ""}`}>
              <div className="search-icon">
                <Image src={search} alt="search" width={16} />
              </div>
              <input
                type="text"
                placeholder="Start searching here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {touchedTop && <div style={{ height: 180 }} />}
          </div>
        </div>

        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12 blogs-section">


              <div className="container">
                <div className="row">
                  {filteredBlogs.map((blog, idx) => (
                    <div key={blog.slug.current || idx} className="col-md-4 px-2 mb-3">
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
                  ))}
                </div>
              </div>

              <div className='container mt-5'>
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
              <div className="py-5">
                {/* <Pagination /> */}
              </div>
            </div>
            
          </div>
        </div>

     
      </div>

      <footer id="footer">
        <Footer />
      </footer>

      {showButton && (
        <button onClick={backToTop} className="back-to-top">
          <Image src={backto_top} alt="recent" className="img-fluid w-50" />
        </button>
      )}
    </div>
  );
};

export default BlogByTag;
