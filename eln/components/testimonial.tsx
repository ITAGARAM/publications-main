import React from 'react';
var $ = require('jquery');
import dynamic from 'next/dynamic';
import Image from 'next/image';
import webptwenone from '../public/assets/images/customers/21.webp'
import webptwenty from '../public/assets/images/customers/20.webp'
import webptwenfive from '../public/assets/images/customers/25.webp'
import eighten from '../public/assets/images/customers/18.webp'
import webptwenfour from '../public/assets/images/customers/24.webp'
import megafine from '../public/assets/images/customers/mega.png'
import webpfour from '../public/assets/images/customers/4.webp'

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

// Define options for OwlCarousel
const options = {
  loop: true,
  margin: 0,
  items: 1,
  autoplay: false,
  dotsEach: true,
  dots: true,
  responsive: {
    0: {
      items: 1, 
    },
    600: {
      items:1, 
    },

    360: {
      items: 1, 
    },
    344: {
      items: 1, 
    },
    1000: {
      items:2, 
    },
  },
};

// Define testimonials data
const testimonials = [
    {
      clientName: "Dr. Sanjay Jadhav",
      designation: "Head of Quality Control and Validation ",
      company: "Megafine, Nashik, IN",
      product: "Logilab ELN",
      testimonial:
        "“ELN played a significant role in demonstrating our compliance with the regulatory requirements and was instrumental in ensuring a successful outcome for us. Your software made compliance easier and more efficient, allowing us to focus on our core technical activities while staying on top of our regulatory commitments. During inspection, this software was thoroughly challenged and evaluated to the satisfaction by the inspectors”​",
      image: megafine,
    },

    {
      clientName: "Daniel Gibson",
      designation: "R&D  Manager",
      company: "Anthony Nolan Trust, UK ",
      product: "Logilab ELN ",
      testimonial:
        "Our implementation was a great SUCCESS! This we mean from the fact that even we are able to re-configure the system for our changing needs",
      image:webpfour
    },
  ];

const Testimonial = () => {
  return (
    <div className="testimonial-slider mt-5">
      <div className="swiper-wrapper testimonial-slider__wrapper">
        <div className="swiper-slide">
          <OwlCarousel className="owl-theme" {...options}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="litepadd testimonial-slider__one wow move-up">
                <div className="testimonial-slider--info">
                  <div className="testimonial-slider__author">
                    <h6 className="client-name">{testimonial.clientName}</h6>
                    <span>{testimonial.designation}</span>
                    <br />
                    <div className="cardimageheight">
                      <Image
                        src={testimonial.image}
                        className="img-fluid testimonial-logo"
                        alt={`${testimonial.clientName} - ${testimonial.company}`}
                      />
                    </div>
                    <div className="author-info">
                      <span className="review-title">Product: {testimonial.product}</span>
                    </div>
                    <div className="author-info">
                      <span className="review-title mt-2">Company: {testimonial.company}</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-slider__text mt-2">
                  {testimonial.testimonial}
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
