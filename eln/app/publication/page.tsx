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



export default function Publication (){
    const SearchRef = useRef<HTMLDivElement>(null);
    const BannerRef = useRef<HTMLDivElement>(null);

    const [touchedTop, setTouchedTop] = useState(false);

    useEffect(()=>{
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

    },[])

    return(
        <div>
            {/* <Header whiteHeader/> */}
            <div className="publication-banner" >
                <div className="container">
                    <div className="row mt-5" ref={BannerRef}>
                        <div className="col-md-6 position-relative">
                            <Image src={whitepaper} alt="Feature Whitepaper" className="whitepaper" width={260} height={50}/>
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
                        <div className="col-md-6">
                            <Image src={placeholder_img} alt="placeholder" className="img-fluid placeholder1"/>
                        </div>
                    </div>
                    <div ref={SearchRef} className={`search_bar w-75 mx-auto ${touchedTop ? 'fixed' : ''}`}>
                        <div className="search-icon">
                            <Image src={search} alt="search" width={16}/>
                        </div>
                        <input type="text" placeholder="Start searching here"/>
                    </div>
                </div>
            </div>
            <div className="container recent">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <label>Featured</label>
                    <h2>Recent <span>Publications</span></h2>
                    </div>
                    <div className="col-4 text-end">
                        <Image src={recent} alt="recent" width={50}/>
                        <p className="mt-4">Explore the latest insights, tips, and updates on lab digitization and ELN systems.</p>
                    </div>
                </div>
                
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div>
                            {/* <BannerCard 
                            img={placeholder_whitepaper}  
                            label={"Whitepaper"}
                            title={"How Logilab ELN helps organizations to maintain ALCOA Data Integrity"}
                            desc={"Why Your Laboratory Needs an Electronic Lab Notebook Documentation is of utmost essence in the scientific..."}
                            /> */}
                            <button className="download-btn">Read More</button>
                        </div>
                        <div className="mt-5">
                            {/* <BannerCard 
                            img={placeholder_whitepaper}  
                            label={"Whitepaper"}
                            title={"How Logilab ELN helps organizations to maintain ALCOA Data Integrity"}
                            desc={"Why Your Laboratory Needs an Electronic Lab Notebook Documentation is of utmost essence in the scientific..."}
                            /> */}
                            <button className="download-btn">Read More</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Image src={ad_frame_big} alt="AD" className="img-fluid ad_big" />
                    </div>  
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        {/* <BannerCard
                        alt={""} 
                        img={placeholder_whitepaper}  
                        label={"Whitepaper"}
                        title={"How Logilab ELN helps organizations to maintain ALCOA Data Integrity"}
                        desc={"Why Your Laboratory Needs an Electronic Lab Notebook Documentation is of utmost essence in the scientific..."}
                        /> */}
                        <button className="download-btn">Read More</button>
                    </div>
                    <div className="col-md-6"> 
                        {/* <BannerCard
                        alt={""} 
                        img={placeholder_whitepaper}  
                        label={"Whitepaper"}
                        title={"How Logilab ELN helps organizations to maintain ALCOA Data Integrity"}
                        desc={"Why Your Laboratory Needs an Electronic Lab Notebook Documentation is of utmost essence in the scientific..."}
                        /> */}
                        <button className="download-btn">Read More</button>
                    </div>
                </div>

                {/* <div className="row mt-5">
                    <div className="col-md-6">
                        <Image src={ad_frame_small} alt="AD" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        
                            <BannerCard
                            alt={""} 
                            img={placeholder_img}  
                            label={"Whitepaper"}
                            title={"How Logilab ELN helps organizations to maintain ALCOA Data Integrity"}
                            desc={"Why Your Laboratory Needs an Electronic Lab Notebook Documentation is of utmost essence in the scientific..."}
                            />
                            <button className="download-btn">Read More</button>
                        
                    </div>
                </div> */}
            </div>


            <div className="helpCenter">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            <div className="helpCenter-card">
                                <div style={{padding:'3rem 3rem 0'}}>
                                    <h4>Still Have</h4>
                                    <h2>question ?</h2>
                                    <p className="w-75 mb-0">Visit our Help Center to get a comprehensive overview of Logilab ELN and its capabilities</p>
                                    <Image src={questionMark} alt="question-mark" height={330}/> 
                                </div>
                                
                                <div className="help-btn-container">
                                    <Link href={'#'}>
                                        <button>Help Center</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                                <div className="helpCenter-card">
                                    <div style={{padding:'3rem 3rem 0'}}>
                                        <h4>Interested</h4>
                                        <h2>in our ELN?</h2>
                                        <p className="w-75">Click the link below to schedule a quick demo</p>
                                        <Image src={paper} alt="papers" height={366} className="papers"/> 
                                    </div>
                                    
                                    <div className="help-btn-container" style={{marginTop:"26px"}}>
                                        <Link href={'#'} style={{zIndex: 1}}>
                                            <button>Book a Demo</button>
                                        </Link>
                                    </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}