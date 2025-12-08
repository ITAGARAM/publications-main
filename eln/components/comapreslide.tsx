'use client'
// import Affordable_Solution from '../../public/assets/images/Affordable_Solution.svg'
import React, { useEffect, useState } from 'react';
import connect_compare from '../../eln/public/assets/images/connect_compare.svg'
import Affordable_Solution from '../../eln/public/assets/images/Affordable_Solution.svg'
import save_compare from '../../eln/public/assets/images/save_compare.svg'
import Ease_of_Transition from '../../eln/public/assets/images/Ease_of_Transition.svg'
import Affordable_and_Scalable from '../../eln/public/assets/images/Affordable_and_Scalable.svg'
import seamless_compare from '../../eln/public/assets/images/seamless_compare.svg'
import Product_develop from '../../eln/public/assets/images/Product_develop.svg'
import save_time_section_image from '../../eln/public/assets/images/save_time_section_image.svg'
import Accelerate_collaboration from '../../eln/public/assets/images/Accelerate_collaboration.svg'
import ideal_compare from '../../eln/public/assets/images/ideal_compare.svg'
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons


var $ = require('jquery');
import dynamic from 'next/dynamic';

if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}

// Import jQuery and Owl Carousel styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Dynamically import OwlCarousel with no server-side rendering
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});



export default  function ComapreSlide (){

  const [itemsToShow, setItemsToShow] = useState(5); // Default for desktop
  const [autoplay, setAutoplay] = useState(false); // Default autoplay off

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


  const options = {
    loop: true,
    margin: 10,
    dotsEach: true,
    dots: true,
    // nav: true, 
    autoplay: false,
    responsive: {
      0: { // For screens from 0px to 768px
        items: 1, // Show 2 items on mobile
      },
      768: { // For screens above 768px
        items: 5, // Show 5 items on larger screens
      },
    },
  };
  

    return  (
        <>  
        <OwlCarousel className="owl-theme comapare-owl " {...options} style={{marginTop:'-61px'}}>
           <div className="container mt-5 ">
              <div className="row">
                  <div  className="col-md-6 mb-4">
                    <div className="card compare testimonial-slider__one wow move-up bg-lblue position-relative px-4">
                      {/* Top-level additional image */}
                 
                      <div className="d-flex flex-row pt-2">
                        <Image src={Affordable_Solution} className="img-fluid" alt="" style={{width:"50px", height:"30px"}}/>
                        <h6  className="fw-bold mt-2 ms-2">Affordable & Scalable</h6>  
                    </div>
              
                      {/* Card Body */}
                      <div className="testimonial-slider--info">
                        <p className="testimonial-slider__text text-black ms-2 text-start">Offers all the essential features for data organization, collaboration, and documentation—at an affordable price that grows with your lab’s needs.</p>
                      </div>
                      <Image 
                    src={Affordable_and_Scalable} 
                    className="img-fluid sizechangemobile w-100" 
                    alt="Input and export structured as well as unstructured data in multiple formats from JSON to Excel in Logilab Electronic Laboratory Notebook."
                 />                  
                    </div>
                  </div>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row">
                  <div  className="col-md-6 mb-4">
                    <div className="card compare testimonial-slider__one wow move-up bg-lblue position-relative px-4">
                      {/* Top-level additional image */}
                 
                      <div className="d-flex flex-row pt-2">
                      <Image src={seamless_compare} className="img-fluid" alt=""  style={{width:"50px", height:"30px"}}/>
                        <h6  className="fw-bold mt-2 ms-2">Ease of Transition</h6>  
                    </div>
              
                      {/* Card Body */}
                      <div className="testimonial-slider--info">
                        <p className="testimonial-slider__text text-black ms-2 text-start">Switching from Excel or Word to a digital lab notebook is simple with Logilab Eln Lite. Easily import your existing files and start scaling your research with minimal disruption..</p>
                      </div>
                      <Image src={Ease_of_Transition} className="img-fluid sizechangemobile w-100" alt="Input and export structured as well as unstructured data in multiple formats from JSON to Excel in Logilab Electronic Laboratory Notebook."/>                 
                    </div>
                  </div>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row">
                  <div  className="col-md-6 mb-4">
                    <div className="card compare testimonial-slider__one wow move-up bg-lblue position-relative px-4">
                      {/* Top-level additional image */}                
                      <div className="d-flex flex-row pt-2">
                      <Image src={connect_compare} className="img-fluid" alt="" style={{width:"50px", height:"30px"}} />
                        <h6 className="fw-bold text-start ms-2">Connect,Communicate, Collaborate</h6>  
                    </div>

                      {/* Card Body */}
                      <div className="testimonial-slider--info">
                        <p className="testimonial-slider__text text-black ms-2 text-start">Minimize the trouble of isolation and bring your team together for efficient communication, boosting your productivity.</p>
                      </div>
                      <Image src={Accelerate_collaboration} className="img-fluid"  alt="Log-in from anywhere and continue your research globally with Logilab Electronic Laboratory Notebook."/>                 
                    </div>
                  </div>
              </div>
            </div>
            <div className="container mt-5 ">
              <div className="row">
                  <div  className="col-md-6 mb-4">
                    <div className="card compare testimonial-slider__one wow move-up bg-lblue position-relative px-4">
                      {/* Top-level additional image */}
                 
                      <div className="d-flex flex-row pt-2">
                      <Image src={ideal_compare} className="img-fluid" alt=""  style={{width:"50px", height:"30px"}}/>
                        <h6  className="fw-bold ms-2 text-start">Ideal for Independent Researchers</h6>  
                    </div>
              
                      {/* Card Body */}
                      <div className="testimonial-slider--info">
                        <p className="testimonial-slider__text text-black ms-2 text-start">Eliminate the hassle of juggling multiple notebooks and spreadsheets. With predefined templates, you can easily scale your research process.</p>
                      </div>
                      <Image src={save_time_section_image} className="img-fluid sizechangemobile" alt="Ideal for independent researchers" />   
                            
                    </div>
                  </div>
              </div>
            </div>
            <div className="container mt-5 ">
              <div className="row">
                  <div  className="col-md-6 mb-4">
                    <div className="card compare testimonial-slider__one wow move-up bg-lblue position-relative px-4">
                      {/* Top-level additional image */}
                 
                      <div className="d-flex flex-row pt-2">
                      <Image src={save_compare} className="img-fluid " alt="" style={{width:"50px", height:"30px"}} />
                        <h6  className="fw-bold mt-2 ms-2">Save Time</h6>  
                    </div>
              
                      {/* Card Body */}
                      <div className="testimonial-slider--info">
                        <p className="testimonial-slider__text text-black ms-2 text-start">No more hunting for that one piece of paper—everything is just a click away!</p>
                      </div>
                      <Image src={Product_develop} className="img-fluid " 
                                                      alt="Set up configurable workflows and monitor all of your lab processes efficiently with Logilab 
                                                      ELN software  — assign user privileges, manage task orders, and ensure streamlined lab operations."/>         
                    </div>
                  </div>
              </div>
            </div>
            
            </OwlCarousel>
        </>

    )

};