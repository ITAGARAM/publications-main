"use client";
import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { ImTwitter } from "react-icons/im";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { GrYoutube } from "react-icons/gr";
import Image from "next/image";
import elnlogofooter from '../../eln/public/assets/images/eln-logo.png'
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
            {/* <div className="col-lg-3 col-md-6 col-xs-12"> */}
              <div className="col-xs-12 col-md-6 col-lg-3 ">
                <div className="f_widget company_widget">
                  <div className="footerLogo">
                    {/* <a href="index.html" className="f-logo"><img src="/images/Agaram_Technologies_Logo.svg" alt="Company Logo" /></a> */}
                    <Link className="footer_logo" href="/">
                       {/* <img src="../assets/images/eln_logo.svg" alt="logo" /> */}
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

              <div className="col-xs-12 col-md-6 col-lg-3">
                <div className="f_widget about-widget pl_40">
               
                    <h3 className="f-title f_600 t_color f_size_15 mb_20">All Solutions</h3>
                  <ul className="list-unstyled f_list">
                     <li><Link href="/solution">Solution</Link></li>
                      <li><Link href="/solution/qa_qc_lab">QA & QC Labs</Link></li>
                      <li><Link href="/solution/research">Research & Development</Link></li>
                      <li><Link href="/solution/integrity">Data Integrity & Compliance</Link></li>
                      <li><Link href="/solution/academics">Academics</Link></li>
            </ul>
               <h3 className="f-title f_600 t_color f_size_15 mb_20 mt-3">use cases</h3>
                  <ul className="list-unstyled f_list">
                    <li><Link href="/inventory-management">Inventory Management</Link></li>
                     <li><Link href="/collaboration-and-team-management">Collaboration & Team Management</Link></li>
                      <li><Link href="/dynamic-report-generation">Dynamic Report Generation</Link></li>
                       <li><Link href="/instrument-integration"> Instrument Integration</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-md-6 col-lg-3">
                <div className="f_widget about-widget">
                  <h3 className="f-title f_600 t_color f_size_15 mb_20">Resources</h3>
                  <ul className="list-unstyled f_list">
                    <li><Link href="https://www.logilabeln.com/blog/">Blog</Link></li>
                    <li><Link href="/resource/publications">Publications</Link></li>
                    <li><Link href="https://agaramtech.freshdesk.com/support/login">support</Link></li>
                    <li><Link href="https://helpcenter.agaramtech.com/">Helpcenter</Link></li>
                    <li><Link href="/resource/download">Downloads</Link></li>
                    <li><Link href="/resource/faq">FAQ</Link></li>
                  </ul>
                   <h3 className="f-title f_600 t_color f_size_15 mb_20 mt-3">pricing</h3>
                  <ul className="list-unstyled f_list">
                    <li><Link href="/pricing">General Plans</Link></li>
                    <li><Link href="/company/academic_plans">Academic Plans</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-md-6 col-lg-3">
                <div className="f_widget about-widget">
                  <h3 className="f-title f_600 t_color f_size_15 mb_20">Company</h3>
                  <ul className="list-unstyled f_list">
                    <li><Link href="/company/about-us">About Us</Link></li>
                    <li><Link href="/company/certifications">Certifications</Link></li>
                    <li><Link href="/company/customers">Customers</Link></li>
                    <li><Link href="/company/terms-conditions">Terms and conditions</Link></li>
                  </ul>
                  <br />
                  <h3 className="f-title f_600 t_color f_size_15 mb_20">Legal</h3>
                  <ul className="list-unstyled f_list">
                    <li><Link href="/company/privacy-policy">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-md-6 col-lg-3">
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

            {/* <a href="#" className="floatbutton" data-toggle="modal" style={{ color: '#fff' }} data-target="#floatModel">
              <i className="fa fa-envelope my-float"></i>
            </a> */}

            {/* <div className="modal fade" id="floatModel"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <iframe
                    id="JotFormIFrame-240092031021435"
                    title="ELN Contact us"
                    onLoad={() => window.parent.scrollTo(0, 0)}
                
                    allow="geolocation; microphone; camera"
                    src="https://form.jotform.com/240092031021435"
                    frameBorder="0"
                    style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
                    scrolling="no"
                  ></iframe>
                </div>
              </div>
            </div> */}
            {/* <img src="../assets/images/home_footer_imag.svg" alt="" className='w-100 mt-5' /> */}
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
