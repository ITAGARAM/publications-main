"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo20 from '../../eln/public/assets/images/customers/hindusthan.svg';
import logo21 from '../../eln/public/assets/images/customers/megafine.svg';
import logo22 from '../../eln/public/assets/images/customers/rudolphreserch.svg';
import logo23 from '../../eln/public/assets/images/customers/cpi.svg';
import logo24 from '../../eln/public/assets/images/customers/smtl.svg';
import logo25 from '../../eln/public/assets/images/customers/7.webp';
export default function Clientsimage() {
  return (
    <div className="clients-images-wrapper section-space--pt_60">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrap text-center section-space--mb_10">
              <h3 className="center-heading mb-30 Enterprise_Class fw-bold">
                Serving customers across Regulated & Non-Regulated Industries
              </h3>
            </div>
            <div className="row section-space--ptb_60 ">
              <div className="col-lg-2 col-md-2 col-4">
                <div className="cust-logo">
                  {/* <img
                    src="../../assets/images/customers/20.webp"
                    alt="Customer Logo"
                    className="img-fluid"
                  /> */}
                   <Image className="img-fluid elnimage_size" src={logo20} alt=''/>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                <div className="cust-logo">
                  {/* <img
                    src="../../assets/images/customers/21.webp"
                    alt="Customer Logo"
                    className="img-fluid"
                  /> */}
                  <Image className="img-fluid elnimage_size" src={logo21} alt=''/>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                <div className="cust-logo">
                  {/* <img
                    src="../../assets/images/customers/9.webp"
                    alt="Customer Logo"
                    className="img-fluid"
                  /> */}
                   <Image className="img-fluid elnimage_size" src={logo22} alt=''/>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                <div className="cust-logo">
                  {/* <img
                    src="../../assets/images/customers/25.webp"
                    alt="Customer Logo"
                    className="img-fluid"
                  /> */}
                  <Image className="img-fluid elnimage_size" src={logo23} alt=''/>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                <div className="cust-logo">
                  {/* <img
                    src="../../assets/images/customers/11.webp"
                    alt="Customer Logo"
                    className="img-fluid"
                  /> */}
                   <Image className="img-fluid elnimage_size" src={logo24} alt=''/>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                <div className="cust-logo">
                  {/* <img
                    src="../../assets/images/customers/22.webp"
                    alt="Customer Logo"
                    className="img-fluid"
                  /> */}
                  <Image className="img-fluid elnimage_size" src={logo25} alt=''/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-button mt-30 aboutusborder">
          <Link href="../customers" className="ht-btn2 ht-btn-md">Learn More</Link>
        </div>
      </div>
    </div>
  );
}
