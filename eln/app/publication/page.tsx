"use client"
import Header from "@/components/header";
import Footer from "../footer";
import '../publication.css'
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import placeholder_img from "../../public/assets/images/publication/placeholder1.png"
import whitepaper from "../../public/assets/images/publication/f_whitepaper.svg"
import recent from "../../public/assets/images/publication/recent.svg"
import Image from "next/image";
import BannerCard from "./banner-card/banner-card";
import ad_frame_big from "../../public/assets/images/publication/Frame_AD_big.png"
import ad_frame_small from "../../public/assets/images/publication/Frame_AD_small.svg"
import questionMark from "../../public/assets/images/publication/questionmark.svg"
import paper from "../../public/assets/images/publication/paper.svg"
import search from "../../public/assets/images/publication/search.svg"
import placeholder_whitepaper from "../../public/assets/images/publication/placeholder-whitepaper.svg"
import { useEffect, useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { client } from "@/lib/sanity";
import Pagination from "@/components/Pagination";


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

const publicationQuery = `*[_type == "publication"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    summary,
    "mainImage": mainImage.asset->url
}
`

type PaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};



export default function Publication() {
    const [selectedCategory, setSelectedCategory] = useState("default")

    const [currentPageByCategory, setCurrentPageByCategory] = useState<
        Record<string, number>
    >({
        all: 1,
        caseStudy: 1,
        whitePaper: 1,
        ebook: 1,
    });
    const ITEMS_PER_PAGE = 6;

    const currentPage = currentPageByCategory[selectedCategory];

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const blogsSectionRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState('Categorized');
    const [hideCategoryBox, setHideCategoryBox] = useState(false);
    const SearchRef = useRef<HTMLDivElement>(null);
    const BannerRef = useRef<HTMLDivElement>(null);

    const [touchedTop, setTouchedTop] = useState(false);
    const [publicationData, setPublicationData] = useState<any[]>([])



    const categories = [
        { catName: 'All', catValue: 'all' },
        { catName: 'Case Studies', catValue: 'caseStudy' },
        { catName: 'White Papers', catValue: 'whitePaper' },
        { catName: 'Ebooks', catValue: 'ebook' },
    ];

    useEffect(() => {
        async function fetchData() {
            const data = await client.fetch(publicationQuery);
            setPublicationData(data);
        }
        fetchData();
    }, [])

    const filteredpublications = selectedCategory === 'default' || selectedCategory === 'all' ?
        publicationData : publicationData.filter(
            (item) => item.category === selectedCategory);

    const scrollToTitle = () => {
        titleRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }

    const paginatedPublications = filteredpublications.slice(
        startIndex,
        endIndex
    );
    const handlePageChange = (page: number) => {
        setCurrentPageByCategory((prev) => ({
            ...prev,
            [selectedCategory]: page,
        }));
    };

    const CustomPagination: React.FC<PaginationProps> = ({
        totalItems,
        itemsPerPage,
        currentPage,
        onPageChange,
    }) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        return (
            <div className="d-flex align-items-center justify-content-between customPagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    &larr; Previous
                </button>

                <ul className="d-flex">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li
                            key={i}
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => { onPageChange(i + 1); scrollToTitle() }}
                            style={{ cursor: "pointer" }}
                        >
                            {i + 1}
                        </li>
                    ))}
                </ul>

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => { onPageChange(currentPage + 1); scrollToTitle() }}
                >
                     Next &rarr;
                </button>
            </div>
        );
    };



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

    return (
        <div>
            <Header whiteHeader />
            <div className="publication-banner" >
                <div className="container">
                    <div className="row mt-5 cursor-pointer" ref={BannerRef}>
                        <div className="col-lg-6 col-md-7 position-relative publication-banner-mobile">
                            <Image src={whitepaper} alt="Feature Whitepaper" className="whitepaper" width={260} height={50} />
                            <div className="d-flex align-items-center">
                                <h6>Publications</h6>
                                <span className="line ms-2"></span>
                            </div>
                            <h1>How Logilab ELN helps organizations to follow GxP Regulations</h1>
                            <p>GxP is a set of regulations and quality guidelines formulated to ensure the safety of life sciences products while maintaining the quality of processes throughout every stage of manufacturing,..</p>
                            <Link href={'#'}>
                                <button>
                                    Get Your Copy Now
                                </button>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-5 position-relative d-md-flex justify-content-md-center align-items-md-center">
                            <Image src={placeholder_img} alt="placeholder" className="img-fluid placeholder1" />
                        </div>
                    </div>
                    <div ref={SearchRef} className={`search_bar w-75 mx-auto ${touchedTop ? 'fixed' : ''}`}>
                        <div className="search-icon">
                            <Image src={search} alt="search" width={16} />
                        </div>
                        <input type="text" placeholder="Start searching here" />
                    </div>
                    {touchedTop && <div style={{ height: "180px" }} />}
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className='col-lg-3 col-md-4'>
                        <div
                            id="category-box"
                            className={`category-box transition ${hideCategoryBox ? 'hidden-box' : 'sticky-box'}`}
                        >
                            <div className="p-3" style={{ width: '200px' }}>
                                <h5 className="">Category</h5>
                                <ul className="list-unstyled mt-3 mb-0">
                                    {/* {categories
                                        .filter(category => category !== 'Categorized')
                                        .map((category) => {
                                            const displayLabel = category === 'Product' ? 'Industry' : category;
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
                                        })} */}

                                    {categories.map((cat) => (
                                        <li
                                            key={cat.catValue}
                                            className={`d-flex align-items-center cursor-pointer ${cat.catValue === selectedCategory ? 'text-primary fw-semibold' : 'text-secondary-li'}`}
                                            onClick={() => { setSelectedCategory(cat.catValue); scrollToTitle() }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {cat.catValue === selectedCategory ? (
                                                <FaAngleRight className="me-2 text-primary" />
                                            ) : (
                                                <span className="me-4" />
                                            )}
                                            {cat.catName}
                                        </li>
                                    ))}
                                </ul>



                            </div>
                            <div>
                                <select
                                    className="form-select mt-3"
                                    value={selectedCategory || ''}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {/* {categories
                                        .filter(category => category !== 'Categorized')
                                        .map((category) => {
                                            const displayLabel = category === 'Product' ? 'Industry' : category;
                                            return (
                                                <option key={category} value={category}>
                                                    {displayLabel}
                                                </option>
                                            );
                                        })} */}

                                    {categories.map((cat) => (
                                        <option key={cat.catValue} value={cat.catValue}>
                                            {cat.catName}
                                        </option>
                                    ))}
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
                    <div className="col-lg-9 col-md-8">
                        <div className="d-flex justify-content-between align-items-end recent">

                            <h2 ref={titleRef}><span className="highlight-bg">{
                                selectedCategory === 'default' ? 'Recent Publications' :
                                    categories.find((item) =>
                                        item.catValue === selectedCategory
                                    )?.catName
                            }</span></h2>

                            <div className="col-4 text-end">
                                <Image src={recent} alt="recent" width={50} />
                                <p className="mt-4">Explore how our solutions have empowered labs across industries - research papers, case studies & white papers.</p>
                            </div>
                        </div>
                        <div className="row">

                            {
                                selectedCategory === 'default' ?
                                    <>
                                        {filteredpublications.slice(0, 2).map((post) => (
                                            <div className="col-md-6">
                                                <div className="publication-card px-3 mb-4">
                                                    <BannerCard
                                                        label={post.category || "Whitepaper"}
                                                        title={post.title}
                                                        desc={post.summary}
                                                        alt={post.title}
                                                        img={post.mainImage || placeholder_whitepaper}
                                                        author={""}
                                                        authorUrl={""}
                                                        usernameTags={[]}
                                                        publishedAt={""}
                                                        slug={post.slug.current}
                                                        pageName={'publication'}
                                                    />
                                                    <button className="download-btn" style={{ width: 'max-content', padding: '4px 16px' }}>
                                                        {post.category === 'whitePaper' ? 'Read White Paper' :
                                                            post.category === 'caseStudy' ? 'Read Case Study' :
                                                                'Download Ebook'
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        ))}


                                        {categories.slice(-3).map((cat) => (
                                            <div key={cat.catValue}>
                                                <div className="d-flex justify-content-between align-items-end recent">
                                                    <h2>
                                                        <span className="highlight-bg">{cat.catName}</span>
                                                    </h2>
                                                </div>
                                                <div className="row">
                                                    {publicationData
                                                        .filter((item) => item.category === cat.catValue)
                                                        .slice(0, 4)
                                                        .map((subCat) => (
                                                            <div className="col-md-6">
                                                                <div className="publication-card px-3 mb-4">
                                                                    <BannerCard
                                                                        label={subCat.category || "Whitepaper"}
                                                                        title={subCat.title}
                                                                        desc={subCat.summary}
                                                                        alt={subCat.title}
                                                                        img={subCat.mainImage || placeholder_whitepaper}
                                                                        author={""}
                                                                        authorUrl={""}
                                                                        usernameTags={[]}
                                                                        publishedAt={""}
                                                                        slug={subCat.slug.current}
                                                                        pageName={'publication'}
                                                                    />
                                                                    <button className="download-btn" style={{ width: 'max-content', padding: '4px 16px' }}>
                                                                        {subCat.category === 'whitePaper' ? 'Read Whitepaper' :
                                                                            subCat.category === 'caseStudy' ? 'Read Case Study' :
                                                                                'Download Ebook'
                                                                        }
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                </div>


                                                <div className="d-flex justify-content-end">
                                                    <button className="download-btn" style={{ width: 'max-content' }} onClick={() => { setSelectedCategory(cat.catValue); scrollToTitle() }}>
                                                        Show More
                                                    </button>
                                                </div>


                                            </div>
                                        ))}



                                    </>

                                    :

                                    selectedCategory === "all" ?
                                        <>
                                            {filteredpublications.map((post) => (
                                                <div className="col-md-6">
                                                    <div className="publication-card px-3 mb-4">
                                                        <BannerCard
                                                            label={post.category || "Whitepaper"}
                                                            title={post.title}
                                                            desc={post.summary}
                                                            alt={post.title}
                                                            img={post.mainImage || placeholder_whitepaper}
                                                            author={""}
                                                            authorUrl={""}
                                                            usernameTags={[]}
                                                            publishedAt={""}
                                                            slug={post.slug.current}
                                                            pageName={'publication'}
                                                        />
                                                        <button className="download-btn" style={{ width: 'max-content', padding: '4px 16px' }}>
                                                            {post.category === 'whitePaper' ? 'Read White Paper' :
                                                                post.category === 'caseStudy' ? 'Read Case Study' :
                                                                    'Download Ebook'
                                                            }
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                        :
                                        <>
                                            {paginatedPublications.map((post) => (
                                                <div className="col-md-6" key={post.id}>
                                                    <div className="publication-card px-3 mb-4">
                                                        <BannerCard
                                                            label={post.category || "Whitepaper"}
                                                            title={post.title}
                                                            desc={post.summary}
                                                            alt={post.title}
                                                            img={post.mainImage || placeholder_whitepaper}
                                                            author=""
                                                            authorUrl=""
                                                            usernameTags={[]}
                                                            publishedAt=""
                                                            slug={post.slug.current}
                                                            pageName={'publication'}
                                                        />
                                                    </div>
                                                </div>
                                            ))}

                                            <div>
                                                <CustomPagination
                                                    totalItems={filteredpublications.length}
                                                    itemsPerPage={ITEMS_PER_PAGE}
                                                    currentPage={currentPage}
                                                    onPageChange={handlePageChange}
                                                />
                                            </div>
                                        </>

                            }





                            {/* <div className="col-md-6">
                                <Image src={ad_frame_small} alt="AD" className="img-fluid" />
                            </div> */}

                        </div>


                    </div>
                </div>
            </div>

            <div className="container">

                <div className="hero-section container mt-5">
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






            <Footer />
        </div>
    )
}