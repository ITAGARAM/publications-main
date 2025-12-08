import React from 'react';
import Image from 'next/image';
import megafine from '../public/assets/images/customers/mega.png';
import quoteslite_right from '../public/assets/images/quoteslite_right.svg';
import antony from '../public/assets/images/antony.svg';

// Define testimonials data
const litetestimonials = [
  {
    clientName: "Dr. Sanjay Jadhav",
    designation: "Head of Quality Control & Validation ",
    company: "Megafine, Nashik, IN",
    product: "Logilab ELN",
    testimonial:
      "“ELN played a significant role in demonstrating our compliance with the regulatory requirements and was instrumental in ensuring a successful outcome for us. Your software made compliance easier and more efficient, allowing us to focus on our core technical activities while staying on top of our regulatory commitments. During inspection, this software was thoroughly challenged and evaluated to the satisfaction by the inspectors”​",
    image: megafine,
    additionalImage: quoteslite_right,
  },
  {
    clientName: "Daniel Gibson",
    designation: "R&D  Manager",
    company: "Anthony Nolan Trust, UK ",
    product: "Logilab ELN ",
    testimonial:
      "Our implementation was a great SUCCESS! This we mean from the fact that even we are able to re-configure the system for our changing needs",
    image: antony,
    additionalImage: quoteslite_right,
  },
];

const Litetestimonials = () => {
  return (
    <div className="container">
      <div className="row">
        {litetestimonials.map((testimonial, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card litepage testimonial-slider__one wow move-up bg-lblue position-relative">
              {/* Top-level additional image */}
              <div className=" text-left ms-3">
                <Image
                  src={testimonial.additionalImage}
                  className="liteimage img-fluid mt-3 mb-3"
                  width="160"
                  alt="Top Level Icon"
                />
              </div>
              {/* Card Body */}
              <div className="card-body testimonial-slider--info">
                <p className="testimonial-slider__text text-black">{testimonial.testimonial}</p>
              </div>
              {/* Bottom-level testimonial image */}
              <div className="row">
                 <div className="col-4">
                    <Image
                      src={testimonial.image}
                      className="testimonial-logo img-fluid w-auto"
                      alt="Company Logo"
                      />   
                  </div>
                  <div className="col-8">
                    <p className="review-subtitle mb-0 text-black mt-3">
                      {testimonial.clientName} <br/>
                      {testimonial.designation}
                    </p>
                  </div>
              </div>
              {/* <div className=" text-left">
                <Image
                  src={testimonial.image}
                  className="testimonial-logo img-fluid mt-3"
                  alt="Company Logo"
                />
                 <p className="review-subtitle mb-0">
                  <strong>Designation:</strong> {testimonial.designation}
                </p>
              </div> */}
          
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Litetestimonials;
