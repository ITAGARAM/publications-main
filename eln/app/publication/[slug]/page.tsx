'use client'
import Header from "@/components/header";
import placeholderImg from '../../../public/assets/images/publication/publicationPage-placeholder.svg';
import blogRoundbody from '../../../public/assets/images/blog/blog-body-round.svg';
import back_arrow from "../../../public/assets/images/blog/back-arrow.svg";
import download from "../../../public/assets/images/download.png";
import bulb from '../../../public/assets/images/publication/idea.svg';
import placeholder_whitepaper from "../../../public/assets/images/publication/placeholder-whitepaper.svg"
import Image from "next/image";
import { useRouter } from "next/navigation";
import '../../publication.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import BannerCard from "../banner-card/banner-card";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";

var $ = require('jquery');

if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const query = `*[_type == "publication" && slug.current == $slug][0]{
  _id,
    title,
    slug,
    category,
    summary,
    challengeTitle,
    challenges,
    "mainImage": mainImage.asset->url
}`;

const publicationQuery = `*[_type == "publication"] {
    _id,
    title,
    slug,
    category,
    summary,
    "mainImage": mainImage.asset->url
}
`;

const publicationPage = ({ params }: { params: { slug: string } }) => {

    const [data, setData] = useState<any>(null);

    const [publicationData, setPublicationData] = useState<any[]>([])
    useEffect(() => {
        async function fetchData() {
            const relatedData = await client.fetch(publicationQuery);
            setPublicationData(relatedData);
        }
        fetchData();
        console.log(publicationData)
    }, [])

    const relatedPublication = publicationData.filter((item) => item.category === data?.category)
        .filter((catItem)=> catItem._id !== data?._id)
        .slice()
        .sort(() => 0.5 - Math.random());

    const [itemsToShow, setItemsToShow] = useState(5); // Default for desktop
    const [autoplay, setAutoplay] = useState(false); // Default autoplay off
    const router = useRouter();
    const options = {
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 200,
        responsive: {
            0: { // For screens from 0px to 768px
                items: 1, // Show 2 items on mobile
            },
            768: { // For screens above 768px
                items: 1, // Show 5 items on larger screens
            },
        },
    };

    useEffect(() => {
        const updateItems = () => {
            if (window.innerWidth <= 768) { // For mobile screen (768px or below)
                setItemsToShow(2); // Show only 2 items on mobile
                setAutoplay(true); // Enable autoplay on mobile
            } else {
                setItemsToShow(5); // Show 5 items on larger screens
                setAutoplay(false); // Disable autoplay on larger screens
            }
        };

        // Initial check
        updateItems();

        // Update items to show and autoplay when window is resized
        window.addEventListener('resize', updateItems);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('resize', updateItems);
        };
    }, []);

    useEffect(() => {
        async function fetchData() {
            const publicationData = await client.fetch(query, { slug: params.slug });
            setData(publicationData);
            console.log(publicationData)
        }
        fetchData();
    }, [])

    return (
        <>
            <Header whiteHeader />
            <div className="publication-banner publication-banner-body">
                <Image
                    src={blogRoundbody}
                    alt="Decorative dotted curve"
                    className="dotted-line"
                />
                <div className="container">
                    <button
                        className="back-arrow-btn back-arrow-btn-body"
                        style={{zIndex: 8}}
                        onClick={() => router.push("/publication")}   // redirect to main page
                    >
                        <Image src={back_arrow} alt="Back" width={20} height={20} />
                    </button>
                    <div className="mt-5 cursor-pointer">
                        <div className="text-center position-relative" style={{ margin: "auto", maxWidth: "820px", zIndex: 1 }}>
                            <Image
                                src={data?.mainImage || placeholderImg}
                                alt={"Blog image"}
                                width={800}
                                height={400}
                                className="img-fluid publication-banner-image my-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container recent mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <label>Download <span style={{ color: '#4042FD' }}>
                            {
                                data?.category === 'ebook' ? 'Ebook' :
                                    data?.category === 'caseStudy' ? 'Case Study' : 'White Paper'
                            }</span></label>

                    </div>
                    <div className="col-4 d-flex flex-column align-items-end">
                        <button className="download-icon">
                            <Image src={download} alt="recent" width={30} />
                        </button>
                        <p className="mt-4 text-end">Please submit the below form to see how Agaram’s solutions are addressing the challenges faced by laboratories across different industry verticals.</p>
                    </div>
                </div>

            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 form-content">
                        <h2>{data?.title}</h2>
                        <p>{data?.summary}</p>

                        <h6>{data?.challengeTitle}</h6>

                        <div className="challenge">
                            {data?.challenges.map((challenge: any, i: any) => (
                                <div key={i}><label><Image src={bulb} height={25} width={25} alt="bulb"/></label>
                                <p>{challenge}</p>
                                </div>
                            ))}


                        </div>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className='recent' style={{ margin: '3rem 0' }}>
                    <h2 className="recent-post-heading">
                        <span className="highlight-bg">Related
                            {
                                data?.category === 'ebook' ? ' Ebooks' :
                                    data?.category === 'caseStudy' ? ' Case Studies' : ' White Papers'
                            }
                        </span>
                    </h2>
                </div>

                <div className="use-case-slider-bg">
                    <OwlCarousel className="owl-theme" {...options}>
                        <div className="item ">
                            <div className="row">
                                {relatedPublication.slice(0, 2).map((post, i) => (
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


                            </div>

                        </div>

                        <div className="item ">
                            <div className="row">
                                {relatedPublication.slice(2, 4).map((post, i) => (
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


                            </div>

                        </div>

                    </OwlCarousel>
                </div>
            </div>
        </>
    );
}

export default publicationPage;