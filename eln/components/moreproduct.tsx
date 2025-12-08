"use client";
import React from 'react'
import ContactFooter from '../public/assets/images/contact-footer.png';
import { Container, Row, Col, Button} from 'react-bootstrap';
import Image from "next/image";
import Footer from '@/app/footer';
import  Link  from 'next/link'
function Moreproduct(){
    return(
        <>
         <div className="contact-us-section-wrappaer processing-contact-us-bg section-space--ptb_70">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="conact-us-wrap-one">
              <h2 className="heading text-white">Interested in our products or looking to join our team?</h2>
              <div className="sub-heading text-white">We’re always eager to meet fresh talent and explore new partnerships. Reach out to us at <a href="mailto:info@agaramtech.com" className="text-white">info@agaramtech.com</a></div>
              {/* <div className="hero-button mt_30 mb_40 ">
                <div className='moreprouct'>
                <Button href="/request-a-demo " className="btn btn--secondary " >Request a Demo</Button>
                <Button href="/contact-us" className="btn btn--secondary mx-4 btn--secondary-ms" >Contact Us</Button>
                  </div>
             
              </div>  */}
              <div className="d-flex customerbutton action_btn mt_40 bannerresolution_btn academi-reposive" data-wow-delay="0.6s">
                <Link href="/request-a-demo" className="btn btn--white text-center">
                  Request a Demo
                </Link>
                <Link href="/product-brochure-download" className="btn btn--white mx-4 text-center">
                  Download Brochure
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="contact-info-two text-center">
              {/* <Image src="../../assets/images/contact-footer.png" fluid alt="Contact Footer" /> */}
              <Image src={ContactFooter} className="img-fluid moreproduct-img" alt=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
        </>
    );
}
export default Moreproduct;