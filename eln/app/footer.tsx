"use client";
import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { ImTwitter } from "react-icons/im";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { GrYoutube } from "react-icons/gr";
import Image from "next/image";
import elnlogofooter from '../../eln/public/assets/images/home/agaram-logo.png'
import homefooterimag from '../../eln/public/assets/images/home_footer_imag.svg'
import  Link  from 'next/link'
const Footer = () => {
  return (
    <>
      <div className="footer_top_first mtop-70">
        <div className="container">
      
        </div>
      </div>

      <footer className="footer_area footer_area_four f_bg">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 footer-col">
                <div className="f_widget company_widget">
                  <div className="footerLogo">
                    <Link className="footer_logo" href="/">                    
                       <Image src={elnlogofooter} className="img-fluid" alt="logo" />
                    </Link>
                  </div>

                  <div className="widget-wrap">
                    <p className="f_500 mb-0 l_height34 t_color"><b>Global HQ</b></p>
                    <p className="mb-0 l_height28">
                    Raheja Towers,<br /> 510 Alpha wing,  Anna Salai, 
                    Chennai - <br/> 600 002,<br /> Tamilnadu, India
                    </p>
                    <p className="mb-0 l_height28">
                      <i className="ti-headphone"></i> +91 44 4208 2005
                    </p>
                    <p className="mb-0 l_height28">
                      <i className="ti-email"></i> info@agaramtech.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 footer-col">
                <div className="f_widget about-widget pl_40">
               
                    <h3 className="f-title f_600 t_color f_size_15 mb_20">Products</h3>
                  <ul className="list-unstyled f_list">
                     <li><Link href="https://www.agaramtech.com/product/qualis-lims-software">Qualis LIMS</Link></li>
                      <li><Link href="https://www.agaramtech.com/product/logilab-sdms-scientific-data-management-system">Logilab SDMS</Link></li>
                      <li><Link href="https://www.agaramtech.com/product/logilab-eln">Logilab ELN</Link></li>
                      <li><Link href="https://www.agaramtech.com/product/qualis-dms">Qualis DMS</Link></li>
                      <li><Link href="https://www.agaramtech.com/product/interfacer">Interfacer Middleware</Link></li>
            </ul>
               <h3 className="f-title f_600 t_color f_size_15 mb_20 mt-3">Services</h3>
                  <ul className="list-unstyled f_list">
                    <li><Link href="https://www.agaramtech.com/services/professional-services">Professional Services</Link></li>
                     <li><Link href="https://www.agaramtech.com/services/implementation-methodology">Implementation Methodology</Link></li>
                      <li><Link href="https://www.agaramtech.com/services/training">Training</Link></li>
                       <li><Link href="https://www.agaramtech.com/services/support"> Support</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 footer-col">
                <div className="f_widget about-widget">
                  <h3 className="f-title f_600 t_color f_size_15 mb_20">Resources</h3>
                  <ul className="list-unstyled f_list">
                     <li><Link href="https://www.agaramtech.com/resources/brochures">Brochures</Link></li>
                    <li><Link href="https://publications.agaramtech.com/">Blog</Link></li>
                    <li><Link href="https://www.agaramtech.com/resources/publications">Publications</Link></li>
                    <li><Link href="https://agaramtech.freshdesk.com/support/login">support</Link></li>
                    <li><Link href="https://helpcenter.agaramtech.com/">Helpcenter</Link></li>
                  </ul>
                   <h3 className="f-title f_600 t_color f_size_15 mb_20 mt-3">pricing</h3>
                  <ul className="list-unstyled f_list">
                    <li><Link href="/pricing">General Plans</Link></li>
                    <li><Link href="/company/academic_plans">Academic Plans</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 footer-col">
                <div className="f_widget about-widget">
                  <h3 className="f-title f_600 t_color f_size_15 mb_20">About Us</h3>
                  <ul className="list-unstyled f_list">
                    <li><Link href="https://www.agaramtech.com/about-us">Company</Link></li>
                    <li><Link href="https://www.agaramtech.com/customers">Customers</Link></li>
                    <li><Link href="https://www.agaramtech.com/partners">Partners</Link></li>
                    <li><Link href="https://www.agaramtech.com/careers">Careers</Link></li>
                    <li><Link href="https://www.agaramtech.com/certifications">Quality Certifications</Link></li>
                    <li><Link href="https://www.agaramtech.com/contact-us">Contact Us</Link></li>
                  </ul>
                  <br />
                  <h3 className="f-title f_600 t_color f_size_15 mb_20">Legal</h3>
                  <ul className="list-unstyled f_list">
                    <li><Link href="https://www.agaramtech.com/terms-and-conditions">Terms & Conditions</Link></li>
                     <li><Link href="https://www.agaramtech.com/privacy-policy">Privacy Policy</Link></li>
                      <li><Link href="https://www.agaramtech.com/refund-policy">Refund Policy</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 footer-col">
                <div className="f_widget about-widget">
                  <h3 className="f-title f_600 t_color f_size_15 mb_20">Subscribe to our Newsletter</h3>
                  <iframe
                    id="JotFormIFrame-240320550775451"
                    title="ELN Newsletter Form"
                    // onLoad={() => window.parent.scrollTo(0, 0)}
                    // allowTransparency="true"
                    // allowFullScreen="true"
                    allow="geolocation; microphone; camera"
                    src="https://form.jotform.com/240320550775451"
                    frameBorder="0"
                    style={{ minWidth: '100%', maxWidth: '100%', height: '177px', border: 'none' }}
                    scrolling="no"
                  ></iframe>
                </div>
              </div>
            </div>

         
            <Image src={homefooterimag} className="img-fluid mt-4" 
            alt="Logilab ELN Software is trusted by over 150+ customers for its ablity to streamline 
            lab data and meet compliance requirements." />

          </div>
        </div>

        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-0 f_400 f_size_14">
                  {/* <script>{`document.write(new Date().getFullYear())`}</script> */}
                  © Agaram Technologies Pvt Ltd. All rights reserved
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/* <div className="f_social_icon_two text-right ms-5 ps-5"> */}
                  <ul className="list ht-social-networks solid-rounded-icon ">
                    <li className="item"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/agaramtechnologies/" 
                    className="social-link hint--bounce hint--top hint--primary"><TiSocialFacebook /></a></li>
                    <li className="item"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/agaramtech" 
                    className="social-link hint--bounce hint--top hint--primary"><ImTwitter /></a></li>
                    <li className="item"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/agaram-technologies/" 
                    className="social-link hint--bounce hint--top hint--primary"><RiLinkedinBoxFill /></a></li>
                    <li className="item"> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/agaramtechnologies" 
                    className="social-link hint--bounce hint--top hint--primary"><GrYoutube /></a></li>
                  </ul>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
