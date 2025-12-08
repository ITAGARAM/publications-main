'use client'
import React, { useEffect, useState } from 'react';
import thsti from '../../eln/public/assets/images/thsti.png'
import e from '../../eln/public/assets/images/customers/megafine.svg'
import hp from '../../eln/public/assets/images/customers/rudolphreserch.svg'
import mbs from '../../eln/public/assets/images/customers/cpi.svg'
import cipla from '../../eln/public/assets/images/customers/smtl.svg'
import mbss from '../../eln/public/assets/images/customers/bharati vidyapeeth.svg'
import Image from "next/image";

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

export default function LiteSlider() {
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
    autoplay: false,
    dots: false,
    responsive: {
      0: { // For screens from 0px to 768px
        items: 2, // Show 2 items on mobile
      },
      768: { // For screens above 768px
        items: 5, // Show 5 items on larger screens
      },
    },
  };
  

  return (
    <div className="slidedot">
      <OwlCarousel className="owl-theme" {...options}>
      <div className="item single-logo">
          {/* <img src="../assets/images/customers/mbs.png" className="img-fluid slideimag" alt="Slide 4" /> */}
          <Image src={mbs} className="img-fluid slideimag" alt="The Surgical Materials Testing Laboratory (SMTL), UK"/>
        </div>

        <div className="item single-logo">
          {/* <img src="../assets/images/customers/e.png" className="img-fluid slideimag" alt="Slide 2" /> */}
          <Image src={e} className="img-fluid slideimag" alt="Megafine Pharma, India"/>
        </div>
        <div className="item single-logo">
          
          <Image src={hp} className="img-fluid slideimag" alt="Rudolph Research Analytical, USA"/>
        </div>
      
        <div className="item single-logo">
          {/* <img src="../assets/images/customers/dbos.png" className="img-fluid slideimag" alt="Slide 1" /> */}
          {/* <Image src={thsti} className="img-fluid slideimag mt-4 thusti" alt="Hindustan Petroleum Corporation Limited, India (HPCL)"/> */}
          <Image src={mbss} className="img-fluid  elnimage_size" alt=""/>
        </div>
        <div className="item single-logo">
          {/* <img src="../assets/images/customers/cipla.png" className="img-fluid slideimag" alt="Slide 5" /> */}
          <Image src={cipla} className="img-fluid slideimag" alt="Slide 1"/>
        </div>
      </OwlCarousel>
    </div>
  );
}
