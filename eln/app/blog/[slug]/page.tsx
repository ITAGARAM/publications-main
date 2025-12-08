"use client";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/imageUrlBuilder";
import { PortableText } from "@portabletext/react";
import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import "../../publication.css";
import "../../blog.css";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import placeholder_img from "../../../public/assets/images/blog-body-banner.svg";
import comments_profile from "../../../public/assets/images/blog/comments_profile.svg";
import eye from "../../../public/assets/images/eye.svg";
import linkedin from "../../../public/assets/images/linkedin.svg";
import starimage from "../../../public/assets/images/star.svg";
import arrow from "../../../public/assets/images/arrowsimple.svg";
import search from "../../../public/assets/images/publication/search.svg";
import back_arrow from "../../../public/assets/images/blog/back-arrow.svg";
import dotted_line from "../../../public/assets/images/blog/blog-body-round.svg";
import star_rating from "../../../public/assets/images/blog/star_rating.svg";
import halfstar from "../../../public/assets/images/blog/halfstar.svg";
import right_arrow_coments from "../../../public/assets/images/blog/right_arrow_coments.svg";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import { FaAngleRight } from "react-icons/fa";
import BannerCard from "../../publication/banner-card/banner-card";
import { useRouter } from "next/navigation";


const categories = [
    "All articles",
    "Blog of the Month",
    "Blog of the week",
    "General",
    "Product",
    "News & Event",
];

const query = `*[_type == "blog" && slug.current == $slug][0]{
  title,
  summary,
  fullDetails,
  category,
  author,
authorUrl,
  usernameTags,
  publishedAt,
  viewCount,   
  "mainImage": mainImage.asset->url

}`;
type Topic = { level: string; text: string };

function getTextFromChildren(children: React.ReactNode): string {
    if (typeof children === 'string') {
        return children;
    }
    if (Array.isArray(children)) {
        return children.map(getTextFromChildren).join('');
    }
    if (children && typeof children === 'object' && 'props' in children) {
        return getTextFromChildren((children as React.ReactElement).props.children);
    }
    return '';
}


export default function Productdownload({ params }: { params: { slug: string } }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState("Newest");
    const [activeCategory, setActiveCategory] = useState("All articles");
    const [hideCategoryBox, setHideCategoryBox] = useState(false);
    const router = useRouter();
    const [blog, setBlog] = useState<any>(null); // or useState<BlogType | null>(null)
    const [mainTopics, setMainTopics] = useState<Topic[]>([]);
    const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);
    const [viewCount, setViewCount] = useState<number | null>(null);
    const [activeTopic, setActiveTopic] = useState<string | null>(null);

    const relatedQuery = `*[_type == "blog" && category == $category && slug.current != $slug] | order(publishedAt desc)[0..1]{
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

    const otherBlogsQuery = `*[_type == "blog" && slug.current != $slug] | order(publishedAt desc){
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


    useEffect(() => {
        const fetchRelated = async () => {
            if (!blog) return; // wait for main blog to load

            // 1️⃣ fetch blogs from same category
            let related = await client.fetch(relatedQuery, {
                slug: params.slug,
                category: blog.category,
            });

            // 2️⃣ if less than 2, fetch other blogs
            if (related.length < 2) {
                const others = await client.fetch(otherBlogsQuery, { slug: params.slug });
                for (let other of others) {
                    if (related.length >= 2) break;
                    // avoid duplicates
                    if (!related.find((b: { slug: { current: any; }; }) => b.slug.current === other.slug.current)) {
                        related.push(other);
                    }
                }
            }

            setRelatedBlogs(related.slice(0, 2)); // always max 2 cards
        };

        fetchRelated();
    }, [blog]);


    useEffect(() => {
        const fetchData = async () => {
            console.log("datafr3gt5rtg")
            const data = await client.fetch(query, { slug: params.slug });
            console.log("data", data)
            setBlog(data);
        };
        fetchData();
    }, []);



    useEffect(() => {
        if (blog?.fullDetails) {
            const headings = blog.fullDetails
                .filter(
                    (block: any) =>
                        ["h1", "h2", "h3"].includes(block.style) && block.children?.length
                )
                .map((block: any) => {
                    const text = block.children.map((child: any) => child.text).join(" ");
                    return {
                        level: block.style, // 'h1', 'h2', 'h3'
                        text,
                    };
                })
                .filter(
                    (heading: any) =>
                        heading.text.trim() !== "" &&
                        heading.text.trim().split(" ").length <= 8 // optional: limit to short headings
                );

            setMainTopics(headings);
        }
    }, [blog]);




    useEffect(() => {
        const handleScroll = () => {
            const categoryBox = document.getElementById("category-box");
            const footer = document.getElementById("footer");

            if (!categoryBox || !footer) return;

            const categoryBoxRect = categoryBox.getBoundingClientRect();
            const footerRect = footer.getBoundingClientRect();

            if (categoryBoxRect.bottom > footerRect.top) {
                setHideCategoryBox(true);
            } else {
                setHideCategoryBox(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    useEffect(() => {
        if (!params?.slug) return;

        const incrementView = async () => {
            try {
                const res = await fetch(`/api/blog/${params.slug}/view`, { method: "POST" });
                if (!res.ok) throw new Error("Failed to update views");
                const data = await res.json();
                setViewCount(data.viewCount);
            } catch (err) {
                console.error(err);
            }
        };

        incrementView();
    }, [params.slug]);










    const handleSelect = (option: string) => {
        setSelected(option);
    };

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <>
           
            <div className="publication-banner publication-banner-body">
                <Image
                    src={dotted_line}
                    alt="Decorative dotted curve"
                    className="dotted-line"
                />
                <div className="container">
                    <button
                        className="back-arrow-btn back-arrow-btn-body"
                        onClick={() => router.back()}
                    >
                        <Image src={back_arrow} alt="Back" width={20} height={20} />
                    </button>
                    <div className="mt-5 cursor-pointer">
                        <div className="text-center" style={{ margin: "auto", maxWidth: "820px" }}>
                            <h1 className="text-left">{blog.title}</h1>
                            <Image
                                src={blog.mainImage}
                                alt={blog.title || "Blog image"}
                                width={800}
                                height={400}
                                className="img-fluid publication-banner-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container blog-container">
                <div className="row">
                    <div className="col-lg-3">
                        <div
                            id="category-box"
                            className={`category-box  category-box-body transition ${hideCategoryBox ? "hidden-box" : "sticky-box"
                                }`}
                        >
                            <div className="p-3" style={{ width: "200px" }}>
                                <h5>Main Topics</h5>
                                <ul className="list-unstyled mt-3 mb-0">
                                    {mainTopics.map((topic, index) => {
                                        const topicId = topic.text.toLowerCase().replace(/\s+/g, "-");
                                        const isActive = activeTopic === topic.text;
                                        return (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    setActiveTopic(topic.text);
                                                    document.getElementById(topicId)?.scrollIntoView({ behavior: "smooth" });
                                                }}
                                                className={`cursor-pointer d-flex align-items-start mb-2 ${topic.level === "h1" ? "fw-bold" : topic.level === "h2" ? "ms-2" : "ms-4 text-muted"
                                                    }`}
                                                style={
                                                    isActive
                                                        ? {
                                                            backgroundColor: "#e0f0ff",
                                                            fontWeight: 600,
                                                            borderRadius: "4px",
                                                            padding: "2px 6px",
                                                            transition: "background-color 0.3s ease",
                                                        }
                                                        : {}
                                                }
                                            >
                                                <FaAngleRight className="me-2 text-primary cursor-pointer" />
                                                <span className="cursor-pointer">{topic.text}</span>
                                            </li>
                                        );
                                    })}
                                </ul>



                            </div>

                            <div className="blog-sub-jotform">
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
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="admin-tag">
                            <p>{blog.summary}</p>
                            <div className="post-meta">
                                <div>
                                    {blog.author && blog.authorUrl ? (
                                        <a
                                            href={blog.authorUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="author-name"
                                            style={{ color: "#1163EA", fontWeight: 600, textDecoration: "none" }}
                                        >

                                            {blog.author}
                                        </a>
                                    ) : (
                                        <span className="author-name" style={{ color: "#1163EA", fontWeight: 600 }}>
                                            {blog.author}
                                        </span>
                                    )}
                                </div>

                                <span className="">•</span>
                                <span className="date">{new Date(blog.publishedAt).toDateString()}</span>
                                <div>
                                    {blog.usernameTags?.map((tag: string, idx: number) => (
                                        <Link key={idx} href={`/blog/tag/${tag}`}>
                                            <button className={`tag-btn tag-btn-green ms-${idx > 0 ? 2 : 0}`}>
                                                {tag}
                                            </button>
                                        </Link>
                                    ))}
                                </div>

                            </div>
                        </div>
                        <div className="stats-bar">
                            <div className="stats-left">
                                <span className="stat-item">
                                    {/* <Image
                                        src={eye}
                                        alt="placeholder"
                                        className="img-fluid"
                                        style={{ width: "18px" }}
                                    />{" "} */}
                                    <Image
                                        src={eye}
                                        alt="placeholder"
                                        className="img-fluid"
                                        style={{ width: "18px" }}
                                    />
                                    <span className="mt-1">{viewCount !== null ? viewCount.toLocaleString() : "Loading..."} Views</span>


                                </span>

                            </div>
                            <div
                                className="stats-right"
                                style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}
                                onClick={() => {
                                    if (typeof window !== "undefined") {
                                        const blogUrl = `https://eln-testing.vercel.app/blog/${params.slug}`; // 👈 use params.slug here
                                        const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`;
                                        window.open(shareUrl, "_blank", "noopener,noreferrer");
                                    }
                                }}
                            >
                                <Image
                                    src={arrow}
                                    alt="Share to LinkedIn"
                                    className="img-fluid"
                                    style={{ width: "18px" }}
                                />
                                <span>Share</span>
                            </div>





                        </div>
                        <div className="mt-4 blog-content">
                            <PortableText
                                value={blog.fullDetails}
                                components={{
                                    types: {
                                        image: ({ value }) => (
                                            <figure className="my-4">
                                                {value.link ? (
                                                    <a href={value.link} target="_blank" rel="noopener noreferrer">
                                                        <Image
                                                            src={urlFor(value).width(800).url()}
                                                            alt={value.alt || "Blog Image"}
                                                            width={800}
                                                            height={450}
                                                            className="img-fluid rounded"
                                                        />
                                                    </a>
                                                ) : (
                                                    <Image
                                                        src={urlFor(value).width(800).url()}
                                                        alt={value.alt || "Blog Image"}
                                                        width={800}
                                                        height={450}
                                                        className="img-fluid rounded"
                                                    />
                                                )}
                                                {value.caption && (
                                                    <figcaption className="text-muted text-center mt-2">
                                                        {value.caption}
                                                    </figcaption>
                                                )}
                                            </figure>
                                        ),
                                    },
                                    block: {
                                        normal: ({ children }) => <p className="">{children}</p>,

                                        // <-- Add these heading handlers here
                                        h1: ({ children }) => {
                                            const text = getTextFromChildren(children);
                                            const id = text.toLowerCase().replace(/\s+/g, "-");
                                            return <h1 id={id} className="mt-4 mb-2">{children}</h1>;
                                        },
                                        h2: ({ children }) => {
                                            const text = getTextFromChildren(children);
                                            const id = text.toLowerCase().replace(/\s+/g, "-");
                                            return <h2 id={id} className="mt-4 mb-2">{children}</h2>;
                                        },
                                        h3: ({ children }) => {
                                            const text = getTextFromChildren(children);
                                            const id = text.toLowerCase().replace(/\s+/g, "-");
                                            return <h3 id={id} className="mt-3 mb-1">{children}</h3>;
                                        },

                                    },


                                    marks: {
                                        highlight: ({ children, value }) => {
                                            const color = value?.color || 'yellow';
                                            return (
                                                <span style={{ backgroundColor: color, padding: '0 2px', borderRadius: '2px' }}>
                                                    {children}
                                                </span>
                                            );
                                        },
                                        fontColor: ({ children, value }) => {
                                            const color = value?.color?.hex || '#ec8989ff'; // access hex from color object
                                            return <span style={{ color }}>{children}</span>;
                                        },


                                    },
                                }}
                            />


                        </div>
                        {/* <div className="review-box">
                            <div className="review-container">
                                <div className="review-text">
                                    <h2>Add a Review</h2>
                                    <p className="subtext">Be the first to review</p>
                                </div>
                                <div className="star-rating">
                                    <Image src={star_rating} alt="placeholder" className="img-fluid me-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={halfstar} alt="placeholder" className="img-fluid ms-1" />
                                </div>
                            </div>
                            <div className="input-area">
                                <input type="text" placeholder="Share your thoughts" />
                                <div className="actions">
                                    <span className="emoji">😊</span>
                                    <button className="post-btn">
                                        Post it !{" "}
                                        <Image
                                            src={right_arrow_coments}
                                            alt="placeholder"
                                            className="img-fluid"
                                            style={{ width: "16px", height: "17px", marginLeft: "6px" }}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4 comments-section">
                                <div>
                                    <p>3 Comments</p>
                                </div>
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="shadow-sm rounded dropdown-toggle fw-bold"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{
                                                border: "transparent",
                                                padding: "8px 20px",
                                                fontSize: "14px",
                                                background: "#fff",
                                                color: "#000000",
                                                boxShadow: "0px 9px 10.4px 3px rgba(0, 0, 0, 0.07)",
                                            }}
                                        >
                                            {selected}
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li>
                                                <button className="dropdown-item" onClick={() => handleSelect("Newest")}>
                                                    Newest
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" onClick={() => handleSelect("Oldest")}>
                                                    Oldest
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" onClick={() => handleSelect("Popular")}>
                                                    Popular
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="review-header mt-4">
                                <Image
                                    src={comments_profile}
                                    alt="placeholder"
                                    className="img-fluid"
                                    style={{ width: "44px" }}
                                />
                                <div className="reviewer-info">
                                    <p className="user-name">Anna</p>
                                    <p className="review-text">
                                        Beyond controlled data capture, Logilab ELN also packs a host of other vital features that ease data remediation tasks for laboratories of all kinds.
                                    </p>
                                    <p className="review-footer">
                                        <span className="time" style={{ fontFamily: "Urbanist-Medium" }}>
                                            about 1 hour ago
                                        </span>
                                        <span className="action" style={{ fontFamily: "Urbanist-Bold" }}>
                                            Like
                                        </span>
                                        <span className="action" style={{ fontFamily: "Urbanist-Bold" }}>
                                            Reply
                                        </span>
                                    </p>
                                </div>
                                <div className="stars">
                                    <Image src={star_rating} alt="placeholder" className="img-fluid me-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={halfstar} alt="placeholder" className="img-fluid ms-1" />
                                </div>
                            </div>
                            <div className="review-header mt-5">
                                <Image
                                    src={comments_profile}
                                    alt="placeholder"
                                    className="img-fluid"
                                    style={{ width: "44px" }}
                                />
                                <div className="reviewer-info">
                                    <p className="user-name">Anna</p>
                                    <p className="review-text">
                                        Beyond controlled data capture, Logilab ELN also packs a host of other vital features that ease data remediation tasks for laboratories of all kinds.
                                    </p>
                                    <div className="review-footer">
                                        <span className="time">about 1 hour ago</span>
                                        <span className="action">Like</span>
                                        <span className="action">Reply</span>
                                    </div>
                                </div>
                                <div className="stars">
                                    <Image src={star_rating} alt="placeholder" className="img-fluid me-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={halfstar} alt="placeholder" className="img-fluid ms-1" />
                                </div>
                            </div>
                            <div className="review-header mt-5">
                                <Image
                                    src={comments_profile}
                                    alt="placeholder"
                                    className="img-fluid"
                                    style={{ width: "44px" }}
                                />
                                <div className="reviewer-info">
                                    <p className="user-name">Anna</p>
                                    <p className="review-text">
                                        Beyond controlled data capture, Logilab ELN also packs a host of other vital features that ease data remediation tasks for laboratories of all kinds.
                                    </p>
                                    <div className="review-footer">
                                        <span className="time">about 1 hour ago</span>
                                        <span className="action">Like</span>
                                        <span className="action">Reply</span>
                                    </div>
                                </div>
                                <div className="stars">
                                    <Image src={star_rating} alt="placeholder" className="img-fluid me-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={star_rating} alt="placeholder" className="img-fluid mx-1" />
                                    <Image src={halfstar} alt="placeholder" className="img-fluid ms-1" />
                                </div>
                            </div>
                        </div> */}
                     
                        <div className="related-article">
                            
                            <div className=" w-100 mx-auto">
                                <div className='recent'>
                        <h2 className="recent-post-heading">
                          <span className="highlight-bg">Related Post</span>
                      </h2>
                    </div>
                               
                            </div>
                            <div className="container mt-2">
                                <div className="row">
                                    {relatedBlogs.length > 0 ? (
                                        relatedBlogs.map((blog, i) => (
                                            <div key={blog.slug.current} className="col-md-6 px-3 mb-4 mt-5">
                                                <BannerCard
                                                    img={blog.mainImage || placeholder_img}
                                                    label={blog.category || "General"}
                                                    title={blog.title}
                                                    desc={blog.summary}
                                                    author={blog.author}
                                                    authorUrl={blog.authorUrl}
                                                    usernameTags={blog.usernameTags}
                                                    publishedAt={blog.publishedAt}
                                                    slug={blog.slug.current}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-12">No related articles found.</div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className="mt-5">


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
            </div>
        </>
    );
}

