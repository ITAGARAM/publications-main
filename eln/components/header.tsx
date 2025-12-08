'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logowhite from '../public/assets/images/eln_logo_white.svg';
import { SlArrowDown } from "react-icons/sl";
import logoblack from '../public/assets/images/eln_logo.svg'
import downwhitearrow from '../public/assets/images/downwhitearrow.svg'
import downarrow from '../public/assets/images/downarrow..svg'
import all_solution from '../public/assets/images/menu/all_solution.svg'
import research_development from '../public/assets/images/menu/research_development.svg'
import Academics_menu_icon from '../public/assets/images/menu/Academics_menu_icon.svg'
import qa_ac_labs from '../public/assets/images/menu/qa_ac_labs.svg'
import data_integrity_compliance from '../public/assets/images/menu/data_integrity_compliance.svg'
import blog_icon from '../public/assets/images/menu/blog_icon.svg'
import publications_icon from '../public/assets/images/menu/publications_icon.svg'
import Downloads_icon from '../public/assets/images/menu/Downloads_icon.svg'
import help_center_icon from '../public/assets/images/menu/help_center_icon.svg'
import support_icon from '../public/assets/images/menu/support_icon.svg'
import faq_icon from '../public/assets/images/menu/faq_icon.svg'
import academic_icon from '../public/assets/images/menu/academic_icon.svg'
import standard_icon from '../public/assets/images/menu/standard_icon.svg'
import Request_icon from '../public/assets/images/menu/Request_icon.svg'
import aboutus_icon from '../public/assets/images/menu/aboutus_icon.png'
import terms_conditions_icon from '../public/assets/images/menu/terms_conditions_icon.svg'
import customers_icon from '../public/assets/images/menu/customers_icon.svg'
import certification_icon from '../public/assets/images/menu/certification_icon.svg'
import menu_blog_card_image from '../public/assets/images/ELNblog.png'
import Megafine_Casestudy from '../public/assets/images/publication/Megafine_Casestudy.svg'
import eln_thumbnnail from '../public/assets/images/eln_thumbnnail.png'
import resource_menu from '../public/assets/images/menu/resource_menu.svg'
import pricing_menu from '../public/assets/images/menu/pricing_menu.svg'
import company_menu from '../public/assets/images/menu/company_menu.svg'
import contact_menu from '../public/assets/images/menu/contact_menu.svg'
import How_Laboratories from '../public/assets/images/blog/How_Laboratories.png'
import privacy_policy from '../public/assets/images/menu/privacy_policy.svg'
import { ul } from 'framer-motion/client';
import lab_type from '../public/assets/images/menu/labtype.png'
import use_cases from '../public/assets/images/menu/usecases.png'
import right_arrow from '../public/assets/images/menu/right_arrow.png'
import Inventroy_manage from '../public/assets/images/menu/Inventroy_manage.png'
import Collaboration from '../public/assets/images/menu/Collaboration.png'
import Instrument_Integration from '../public/assets/images/menu/Instrument_Integration.png'
import Reporting from '../public/assets/images/menu/Reporting.png'
import Project_Manage from '../public/assets/images/menu/Project_Manage.svg'
import left_arrow from '../public/assets/images/menu/left_arrow.png'
import response_closebtn from '../public/assets/images/menu/response_closebtn.svg'

type HeaderProps = {
  whiteHeader?: boolean;
};

const Header = ({ whiteHeader }: HeaderProps) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  // const [solutionsubmenu, setsolutionsubmenu] = useState(false);
  // const [solutionsubmenulab, setsolutionsubmenulab] = useState(false);
  const [activeSection, setActiveSection] = useState<'labTypes' | 'userCases'>('labTypes');


  const handleLabTypesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSection('labTypes');
  };

  const handleUserCasesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSection('userCases');
  };

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
    // default close
    setProductsOpen(false);
    setResourceOpen(false);
    setCompanyOpen(false);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  // const handleClick = () => {
  //   setsolutionsubmenu(prev => !prev); // Toggle sublist visibility
  // };

  // const handleClick = (e: React.MouseEvent) => {
  //   e.stopPropagation(); // Prevent triggering parent elements
  //   setsolutionsubmenu((prev) => !prev); // Toggle only this submenu
  // };

  // const handleClickLab = (e: React.MouseEvent) => {
  //   e.stopPropagation(); // Prevent triggering parent elements
  //   setsolutionsubmenulab((prev) => !prev); // Toggle only this submenu
  // };

  const handleBodyClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.mobile-menu-overlay__inner') && !target.closest('#mobile-menu-trigger')) {
      closeMenu();
    }
  };
  // const handleTabClick = (tabId: string) => {
  //   const section = document.getElementById(tabId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // mobile click solution
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isResourceOpen, setResourceOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isPricingOpen, setPricingOpen] = useState(false);

  const [showLabItems, setShowLabItems] = useState(false);

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [UseCasesopen, setUseCasesopen] = useState(false);
  const [clicked, setClicked] = useState(false);


  const handleMenuToggle = (menu: string) => {
    setProductsOpen(menu === "products" ? !isProductsOpen : false);
    setResourceOpen(menu === "resources" ? !isResourceOpen : false);
    setCompanyOpen(menu === "company" ? !isCompanyOpen : false);
    setPricingOpen(menu === "pricing" ? !isPricingOpen : false);
  };


  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    document.body.classList.toggle('no-overflow', isMenuActive);
    document.body.addEventListener('click', handleBodyClick as EventListener);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('click', handleBodyClick as EventListener);
    };
  }, [isMenuActive]);

  return (
    <div>
      <div className={`header-area header-home mainheader ${whiteHeader ? 'white-header' : ''}`}>
        <div className={scroll ? 'header-sticky is-sticky' : 'header-sticky'}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header position-relative">
                  {/* Brand logo */}
                  <div className="header__logo">
                    <Link href="/">
                      <Image src={logowhite} className="head-home-logo" width="160"
                        alt="Logilab ELN, an Electronic Laboratory Notebook that streamlines your 
                      research and helps you achieve compliance to GLP and 21 CFR Part 11." />
                    </Link>
                  </div>

                  <div className="header-right">
                    <div className="header__navigation menu-style-three d-none d-xl-block">
                      <nav className="navigation-menu">

                        {/* Navigation items */}
                        <ul>
                          {/* <li className="nav-item">
                                                  <Link href="/" className="nav-link navdata" >
                                                    Home
                                                  </Link>
                                              </li> */}

                          <li className="has-children has-children--multilevel-submenu">
                            <a className="nav-link navdata pricing-link">
                              Solutions
                              <Image
                                src={scroll || whiteHeader ? downarrow : downwhitearrow}
                                className="responsive_image_bottom ms-2 downwhitearrow"
                                alt=""
                                onMouseEnter={(e) => (e.target as HTMLImageElement).classList.add('hover')}
                                onMouseLeave={(e) => (e.target as HTMLImageElement).classList.remove('hover')}
                              />
                            </a>

                            <ul className="submenu submenu-two type py-4">

                              <li className="box-shadow-menu type ms-2">
                                <ul className="mt-5">
                                  <li
                                    onClick={handleLabTypesClick}
                                    className={`d-flex align-items-center justify-content-center ms-3 ${activeSection === 'labTypes' ? 'active' : ''
                                      }`}
                                  >
                                    <Image src={lab_type} alt="" className='mt-1 me-1 blog-memu-icon labtype' />
                                    <span className="f_600 f_size_16 ms-2 mt-1">Lab Types</span>
                                  </li>
                                  <li
                                    onClick={handleUserCasesClick}
                                    className={`d-flex align-items-center justify-content-center ms-3 mt-4 ${activeSection === 'userCases' ? 'active' : ''
                                      }`}
                                  >
                                    <Image src={use_cases} alt="" className='mt-1 me-1 blog-memu-icon usecases' />
                                    <span className="f_600 f_size_16 ms-2">Use Cases</span>
                                  </li>

                                </ul>
                              </li>

                              {(activeSection === 'labTypes' || activeSection === null) && (
                                <>
                                  <li className="box-shadow-menu ms-4 mt-2 py-3">
                                    <ul>
                                      <Link href="/solution" className="nav-link ">
                                        <li className="px-3 py-3 d-flex">
                                          <Image src={all_solution} alt="" className="me-2 solution-memu-icon" />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">All Solutions</span>
                                            <span className="submenu-sub-text">Find the perfect solution for your lab</span>
                                          </div>

                                        </li>
                                      </Link>
                                      <Link href="/solution/research" className="nav-link ">
                                        <li className="mt-2 px-3 py-3 d-flex">
                                          <Image src={research_development} alt="research_development" className="me-2" />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Research & Development</span>
                                            <span className="submenu-sub-text">From ideas to innovations</span>
                                          </div>
                                        </li>
                                      </Link>
                                      <Link href="/solution/academics" className="nav-link ">
                                        <li className="mt-2 px-3 py-3 d-flex">

                                          <Image src={Academics_menu_icon} alt="" className="me-2" />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">
                                              Academics <Link href="/pricing" className="menu-pricing">Pricing</Link>
                                            </span>
                                            <span className="submenu-sub-text">Streamline & centralize</span>
                                          </div>

                                        </li>
                                      </Link>
                                    </ul>
                                  </li>

                                  <li className="box-shadow-menu box-shadow-menu-two ms-4 mt-2 py-3">
                                    <ul>
                                      <Link href="/solution/qa_qc_lab" className="nav-link ">
                                        <li className="ms-3 px-3 py-3 d-flex">

                                          <Image src={qa_ac_labs} alt="" className="mt-1 me-1 qa-qc-memu-icon" />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">QA & QC Labs</span>
                                            <span className="submenu-sub-text">Stay compliant & error-free</span>
                                          </div>

                                        </li>
                                      </Link>
                                      <Link href="/solution/integrity" className="nav-link ">
                                        <li className="ms-3 px-3 py-3 d-flex">

                                          <Image src={data_integrity_compliance} alt="" className="me-2 mt-1" />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Data Integrity & Compliance</span>
                                            <span className="submenu-sub-text">Secure & audit-ready</span>
                                          </div>

                                        </li>
                                      </Link>
                                    </ul>
                                  </li>
                                  <Link href='https://www.logilabeln.com/blog/why-most-eln-solutions-are-not-suitable-for-the-regulated-industry/' target="_blank">
                                    <li className="box-shadow-menu box-shadow-menu-two pt-3  ms-4">
                                      <div>
                                        <div className="card menu-blog-card">
                                          <Image
                                            src={menu_blog_card_image}
                                            className="img-fluid px-3 pt-3"
                                            alt=""
                                          />
                                          <div className="card-body">
                                            <h5 className="card-title">
                                              How Logilab ELN Helped Megafine Pharma Obtain USFDA Approval for entering the US Market
                                            </h5>
                                            <Link
                                              href="https://www.logilabeln.com/blog/why-most-eln-solutions-are-not-suitable-for-the-regulated-industry/"
                                              className="menu-blog-btn"
                                            >
                                              Read More <GoArrowRight />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </Link>
                                </>
                              )}

                              {activeSection === 'userCases' && (
                                <>
                                  {/* <div className='use-case-menu'> */}
                                  <li className="box-shadow-menu use-case-menu ms-4 mt-2 py-3">
                                    <ul>
                                      <Link href="/inventory-management" className="nav-link ">
                                        <li className="px-3 py-3 d-flex">
                                          <Image src={Inventroy_manage} alt="" className="me-2 solution-memu-icon" />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Inventory Management</span>
                                            <span className="submenu-sub-text">Configure, Track, & Manage Everything</span>
                                          </div>

                                        </li>
                                      </Link>
                                      <Link href="/collaboration-and-team-management" className="nav-link ">
                                        <li className="mt-2 px-3 py-3 d-flex">
                                          <Image src={Collaboration} alt="" className="me-2" style={{ height: "25px", width: "25px" }} />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16" style={{ lineHeight: '21px' }}>Collaboration & Team Management</span>
                                            <span className="submenu-sub-text pt-1">Connect teams, without any boundaries</span>
                                          </div>
                                        </li>
                                      </Link>
                                      <Link href="/project-management" className="nav-link ">
                                        <li className="mt-2 px-3 py-3 d-flex">

                                          <Image src={Project_Manage} alt="" className="me-2 mt-1" style={{ height: "25px", width: "25px" }} />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Project Management</span>
                                            <span className="submenu-sub-text">Secure & audit-ready</span>
                                          </div>

                                        </li>
                                      </Link>
                                    </ul>
                                  </li>

                                  <li className="box-shadow-menu use-case-menu box-shadow-menu-two ms-4 mt-2 py-3">
                                    <ul>
                                      <Link href="/dynamic-report-generation" className="nav-link ">
                                        <li className="ms-3 px-3 py-3 d-flex">
                                          <Image src={Reporting} alt="" className="mt-1 me-1 qa-qc-memu-icon" />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Dynamic Report Generation </span>
                                            <span className="submenu-sub-text">Generate audit-ready reports</span>
                                          </div>
                                        </li>
                                      </Link>
                                      <Link href="/instrument-integration" className="nav-link ">
                                        <li className="mt-2 px-3 py-3 d-flex">

                                          <Image src={Instrument_Integration} alt="" className="me-2" style={{ height: "25px", width: "25px" }} />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16" style={{ lineHeight: '21px' }}>Instrument Integration</span>
                                            <span className="submenu-sub-text pt-1">Error-free extraction of analytical data </span>
                                          </div>
                                        </li>
                                      </Link>

                                    </ul>
                                  </li>

                                  <Link href='/casestudy-download' target="_blank">
                                    <li className="box-shadow-menu box-shadow-menu-two pt-3">
                                      <div>
                                        <div className="card menu-blog-card ms-2">
                                          <Image
                                            src={Megafine_Casestudy}
                                            className="img-fluid px-3 pt-3"
                                            alt=""
                                          />
                                          <div className="card-body">
                                            <h5 className="card-title">
                                              How Logilab ELN Enables Pharma Labs to Achieve 21 CFR Part 11 & FDA Compliance
                                            </h5>
                                            <Link
                                              href="/casestudy-download"
                                              className="menu-blog-btn"
                                            >
                                              Read More <GoArrowRight />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </Link>
                                  {/* </div>*/}
                                </>
                              )}
                            </ul>
                          </li>
                          <li className="has-children has-children--multilevel-submenu">
                            <Link href="" className="nav-link navdata pricing-link">
                              Resources
                              <Image
                                src={scroll || whiteHeader ? downarrow : downwhitearrow}
                                className="responsive_image_bottom ms-2 downwhitearrow"
                                alt=""
                                onMouseEnter={(e) => (e.target as HTMLImageElement).classList.add('hover')}
                                onMouseLeave={(e) => (e.target as HTMLImageElement).classList.remove('hover')}
                              />
                            </Link>
                            <ul className="submenu submenu-two submenu-resources py-4">
                              <li className='box-shadow-menu ms-4'>
                                <ul>
                                  <Link href="https://www.logilabeln.com/blog" className="nav-link ">
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={blog_icon} alt="" className='mt-1 me-1 blog-memu-icon' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Blogs</span>
                                        <span className='submenu-sub-text'>Stay informed about latest <br /> insights & updates</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="/resource/publications" className="nav-link ">
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={publications_icon} alt="" className='me-1 mt-1' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Publications</span>
                                        <span className='submenu-sub-text'>Explore research papers,<br />case studies & white papers </span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="/resource/download" className="nav-link ">
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={Downloads_icon} alt="" className='me-2 mt-1' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Downloads</span>
                                        <span className='submenu-sub-text'>Access product brochures & guides</span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>
                              <li className='box-shadow-menu box-shadow-menu-two ms-4'>
                                <ul className="">
                                  <Link href="https://helpcenter.agaramtech.com/" className="nav-link ">
                                    <li className='ms-3 px-3 py-3 d-flex'>


                                      <Image src={help_center_icon} alt="" className='me-2 mt-1' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Help center </span>
                                        <span className='submenu-sub-text'>View video tutorials, product <br />release notes & more  </span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://agaramtech.freshdesk.com/support/login" className="nav-link ">
                                    <li className='ms-3 px-3 py-3 d-flex'>


                                      <Image src={support_icon} alt="" className='me-2 mt-1' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Support</span>
                                        <span className='submenu-sub-text'>Get in touch with our support team  </span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="/resource/faq" className="nav-link ">
                                    <li className=' ms-3 px-3 py-3 d-flex'>


                                      <Image src={faq_icon} alt="" className='me-2 mt-1' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>FAQ</span>
                                        <span className='submenu-sub-text'>Find answers to common queries  </span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>
                              <Link href='https://www.logilabeln.com/blog/what-is-an-electronic-lab-notebook-a-comprehensive-guide/' target="_blank">
                                <li className='box-shadow-menu box-shadow-menu-two pt-3 ms-4'>
                                  <div>
                                    <div className="card menu-blog-card">
                                      <Image
                                        src={eln_thumbnnail}
                                        className="img-fluid px-3 pt-3"
                                        alt=""
                                      />
                                      <div className="card-body">
                                        <h5 className="card-title">What is an Electronic Lab Notebook — A Comprehensive Guide</h5>
                                        <Link href="https://www.logilabeln.com/blog/what-is-an-electronic-lab-notebook-a-comprehensive-guide/" className="menu-blog-btn">Read More <GoArrowRight /></Link>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </Link>


                            </ul>
                          </li>

                          <li className="has-children has-children--multilevel-submenu ">
                            <a className="nav-link pricing-link" >
                              Pricing
                              <Image
                                src={scroll || whiteHeader ? downarrow : downwhitearrow}
                                className="responsive_image_bottom ms-2 downwhitearrow"
                                alt=""
                                onMouseEnter={(e) => (e.target as HTMLImageElement).classList.add('hover')}
                                onMouseLeave={(e) => (e.target as HTMLImageElement).classList.remove('hover')}
                              />
                            </a>
                            <ul className="py-4 submenu submenu-pricing">
                              <li className='ms-3 box-shadow-menu'>
                                <ul>
                                  <Link href="/pricing" className="nav-link " id="nav-tab1" role="tab" aria-selected="true">
                                    <li className='px-3 py-3 box-shadow-menu d-flex'>

                                      <Image src={standard_icon} alt="" className='mt-1' style={{ width: '22px', height: '21px', marginLeft: '-5px' }} />
                                      <div className='d-flex flex-column ms-3'>
                                        <span className='f_600 f_size_16'> General Plans</span>
                                        <span className='submenu-sub-text'>Find the perfect solution for your lab</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="/pricing/academic_plans" className="nav-link " id="nav-tab2" role="tab" aria-selected="false" >
                                    <li className='mt-2 px-2 py-3 box-shadow-menu d-flex'>

                                      <Image src={academic_icon} alt="" className='me-2 mt-1' />
                                      <div className='d-flex flex-column ms-1'>
                                        <span className='f_600 f_size_16'>Academic Plans</span>
                                        <span className='submenu-sub-text'>Affordable plans for<br /> students & academic researchers</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="/contact-us" className="nav-link ">
                                    <li className='mt-2 px-2 py-3 box-shadow-menu d-flex'>

                                      <Image src={Request_icon} alt="" className='mt-1  me-1 request-memu-icon' />
                                      <div className='d-flex flex-column li-hover-content'>
                                        <span className='f_600 f_size_16'>Request A Quote</span>
                                        <span className='submenu-sub-text'>Get Custom pricing for your Lab</span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          <li className="has-children has-children--multilevel-submenu">
                            <Link href="" className="nav-link navdata pricing-link">
                              Company
                              <Image
                                src={scroll || whiteHeader ? downarrow : downwhitearrow}
                                className="responsive_image_bottom ms-2 downwhitearrow"
                                alt=""
                                onMouseEnter={(e) => (e.target as HTMLImageElement).classList.add('hover')}
                                onMouseLeave={(e) => (e.target as HTMLImageElement).classList.remove('hover')}
                              />
                            </Link>

                            <ul className="submenu submenu-two  submenu-Company py-4">
                              <li className='box-shadow-menu ms-4'>
                                <ul>
                                  <Link href="/company/about-us" className="nav-link ">
                                    <li className='mt-2 px-3 py-3 d-flex'>

                                      <Image src={aboutus_icon} alt="" className='me-2 mt-1 About-memu-icon' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>About Agaram </span>
                                        <span className='submenu-sub-text'>Who we are & what we do </span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="/company/certifications" className="nav-link ">
                                    <li className='mt-1 px-3 py-3 d-flex'>

                                      <Image src={certification_icon} alt="" className='me-2 mt-1 certifications-memu-icon' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Certifications </span>
                                        <span className='submenu-sub-text'>Committed to delivering uncompromised quality</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="/company/customers" className="nav-link ">
                                    <li className='mt-2 px-3 py-3 d-flex'>

                                      <Image src={customers_icon} alt="" className='me-2 mt-1 customers-memu-icon' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'> Our Customers</span>
                                        <span className='submenu-sub-text'>Testimonials & reviews from our <br />cherished customers </span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>
                              <li className='box-shadow-menu ms-4'>
                                <ul>
                                  <Link href="/company/terms-conditions" className="nav-link">
                                    <li className='mt-2 px-3 py-3  d-flex'>

                                      <Image src={terms_conditions_icon} alt="" className='me-1 mt-1 termsconditions-memu-icon' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Terms & Conditions </span>
                                        <span className='submenu-sub-text'>What to know before we <br />get in touch   </span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="/company/privacy-policy" className="nav-link ">
                                    <li className='mt-2 px-3 py-3 d-flex'>

                                      <Image src={privacy_policy} alt="" className='me-2 mt-1 privacy-policy-memu-icon' />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Privacy policy</span>
                                        <span className='submenu-sub-text'>How we safeguard your privacy </span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>
                              <Link href="https://www.logilabeln.com/blog/how-laboratories-on-a-budget-can-benefit-from-cloud-based-eln-solutions/" target="_blank" className="nav-link d-flex">
                                <li className='box-shadow-menu box-shadow-menu-two pt-3 ms-4'>
                                  <div>
                                    <div className="card menu-blog-card">
                                      <Image
                                        src={How_Laboratories}
                                        className="img-fluid px-3 pt-3"
                                        alt=""
                                      />
                                      <div className="card-body">
                                        <h5 className="card-title">How Laboratories on a Budget can benefit from Cloud-Based ELN Solutions</h5>
                                        <Link href="https://www.logilabeln.com/blog/how-laboratories-on-a-budget-can-benefit-from-cloud-based-eln-solutions/" className="menu-blog-btn">Read More <GoArrowRight /></Link>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </Link>
                            </ul>
                          </li>

                          <li>
                            <Link href="/contact-us" className="nav-link" >
                              Contact Us
                            </Link>
                          </li>
                        </ul>

                      </nav>
                    </div>

                    <div className="header__actions--preview">
                      <div className="header__actions">
                        <div className="header__icons-wrapper header-right-inner" id="hidden-icon-wrapper">
                          <div className="header-button downlode-btn ml-4 menu_for headermenu mb-1">

                            <div className='getstart'>
                              <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md" target="_blank">Get Started</Link>
                            </div>

                            <div className='signin'>
                              <Link href="/request-a-demo" className="ht-btn ht-btn-md">Request Demo</Link>
                            </div>

                          </div>
                        </div>

                        {/* Mobile menu trigger */}
                        <div
                          className="mobile-navigation-icon d-block d-xl-none"
                          id="mobile-menu-trigger"
                          onClick={toggleMenu} // Add onClick handler here
                        >
                          <i className="fas fa-bars"></i> {/* Example icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of header right */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuActive ? 'active' : ''}`} id="mobile-menu-overlay">
        {/* <div className='mobile-menu-overlay' id="mobile-menu-overlay"> */}
        <div className="mobile-menu-overlay__inner">
          <div className="mobile-menu-overlay__header">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-6 col-8">
                  <div className="header-button downlode-btn ml-4 menu_for headermenu mb-3">
                    <a href="https://www.agaramtech.com">
                      <Image src={logoblack} className="img-fluid mobile-logo" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-4">
                  <div className="mobile-menu-content text-end">
                    <span
                      className="mobile-navigation-close-icon"
                      id="mobile-menu-close-trigger"
                      onClick={closeMenu}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid mt-4 mobilemainheader">
              <div className="row align-items-center">
                <div className="col-md-6 col-6">
                  <div className="header-button downlode-btn ml-4 mobilemenu_for headermenu mb-1">
                    <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md mobilemenu_btn">Get Started</Link>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="mobile-menu-content header-button downlode-btn ml-4 mobilemenu_for headermenu mb-1">
                    <Link href="/request-a-demo" className="ht-btn ht-btn-md mobilemenu_btn" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Request Demo</Link>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-menu-overlay__body">
            <nav className="offcanvas-navigation">
              <ul>

                {/* <li className="nav-item">
              <Link href="/" className="nav-link navdata" onClick={() =>  setMenuActive(false)}>
                Home
              </Link>
            </li> */}

                <li className="has-children">
                  {/* <span className="uparrowposition"> */}
                  <Link
                    href=""
                    onClick={(e) => {
                      if (isProductsOpen) {
                        e.preventDefault();
                      }
                      handleMenuToggle("products");
                    }}
                    style={{ cursor: 'pointer', fontWeight: "bold", fontSize: "18px" }}
                    className={`uparrow ${isProductsOpen ? "active" : ""}`} id='submenuline'
                  >
                    <Image src={all_solution} alt="" className='me-2 all-solution-menu-mobile-icon labtype' />  Solutions
                  </Link>
                  {/* </span> */}
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.ul
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sub-menu"
                      >



                        {/* <li className='d-flex align-items-center justify-content-start ms-2'>
      <Image  src={lab_type} alt="" className='mt-1 me-1 blog-memu-icon labtype'/>  
      <Link  className="nav-link menu-mobile-ml labtype" 
       data-bs-toggle="offcanvas"
       href="#offcanvasExample"
       role="button"
       aria-controls="offcanvasExample"
      >
      Lab Type
      </Link>
      <Image  src={right_arrow} alt="" className='mt-1 ms-auto blog-memu-icon' style={{height:"12px",width:"12px"}}/>
      </li> */}

                        <li
                          className="d-flex align-items-center justify-content-start ms-2"
                          role="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasExample"
                          aria-controls="offcanvasExample"
                        >
                          <Image src={lab_type} alt="" className="mt-1 me-1 blog-memu-icon labtype" />
                          <span className="nav-link menu-mobile-ml labtype" style={{ fontSize: "15px" }}>Lab Type</span>
                          <Image
                            src={right_arrow}
                            alt=""
                            className="mt-1 ms-auto blog-memu-icon"
                            style={{ height: "11px", width: "6px" }}
                          />
                        </li>

                        <li className='d-flex align-items-center justify-content-start ms-2 mt-2 mb-3'
                          role="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasExample1"
                          aria-controls="offcanvasExample">
                          <Image src={use_cases} alt="" className='mt-1 me-1 blog-memu-icon usecases' />
                          <span className="nav-link menu-mobile-ml labtype" style={{ fontSize: "15px" }}>Use Cases</span>
                          <Image src={right_arrow} alt="" className='mt-1 ms-auto blog-memu-icon' style={{ height: "11px", width: "6px" }} />
                        </li>
                        {/* 
      <li className='d-flex align-items-center justify-content-start ms-2'>
        <Image  src={use_cases} alt="" className='mt-1 me-1 blog-memu-icon labtype'/>
        <Link className="nav-link menu-mobile-ml labtype" 
        data-bs-toggle="offcanvas"
        href="#offcanvasExample1"
        role="button"
        aria-controls="offcanvasExample"
        >   
       Use Cases
        </Link>
        <Image  src={right_arrow} alt="" className='mt-1 ms-auto blog-memu-icon' style={{height:"12px",width:"12px"}}/>
      </li> */}

                      </motion.ul>
                    )}


                    <div className="offcanvas offcanvas-start labtype" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                      <div className="offcanvas-header" //onClick={() => { setProductsOpen(false); setMenuActive(true); }}
                      >
                        <Image src={logoblack} className="img-fluid mobile-logo" alt="" />
                        <Image src={response_closebtn} alt="" className='ms-auto mt-1 me-1 blog-memu-icon' id="offcanvasExampleLabel" data-bs-dismiss="offcanvas" aria-label="Close"
                          style={{ height: "40px", width: "19px" }} />
                        {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                      </div>
                      <div className="d-flex align-items-center ms-3 mb-2 " data-bs-dismiss="offcanvas" aria-label="Close" role="button">
                        <Image src={left_arrow} alt="" className='mt-1 me-1 blog-memu-icon' id="offcanvasExampleLabel" data-bs-dismiss="offcanvas" aria-label="Close"
                          style={{ height: "10px", width: "6px" }} />
                        <p className="offcanvas-title mt-1 ms-2 labtype hover-text" id="offcanvasExampleLabel" data-bs-dismiss="offcanvas" aria-label="Close"
                          onClick={() => setClicked(true)}
                          style={{ fontSize: "14px" }}>Back</p>
                      </div>

                      <div className="offcanvas-body" style={{ margin: "7px 11px 12px 13px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }}>


                        <h4 className='mt-2' style={{ fontWeight: "bold", color: "#1164E9" }}>Solution</h4>
                        <li className='d-flex'>
                          <Image src={lab_type} alt="" className='mt-1 me-1 blog-memu-icon labtype' />
                          <Link href="#" className="nav-link menu-mobile-ml m-0 ps-1 mt-2 mb-2" style={{ fontSize: "18px", fontWeight: "bold" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>
                            Lab Type
                          </Link>
                        </li>
                        <li>
                          <Link href="/solution" className="nav-link menu-mobile-ml mt-3 mb-4" style={{ fontSize: "16px" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>
                            All Solutions
                          </Link>
                        </li>

                        <li>
                          <Link href="/solution/qa_qc_lab" className="nav-link menu-mobile-ml mt-3 mb-4" style={{ fontSize: "16px" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>
                            QA & QC Labs
                          </Link>
                        </li>
                        <li>
                          <Link href="/solution/research" className="nav-link menu-mobile-ml mt-3 mb-4" style={{ fontSize: "16px" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>Research & Development</Link>
                        </li>
                        <li>
                          <Link href="/solution/integrity" className="nav-link menu-mobile-ml mt-3 mb-4" style={{ fontSize: "16px" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>Data integrity & Compliance</Link>
                        </li>
                        <li>
                          <Link href="/solution/academics" className="nav-link menu-mobile-ml mt-3 mb-4" style={{ fontSize: "16px" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>Academics</Link>
                        </li>
                      </div>
                    </div>





                    <div className="offcanvas offcanvas-start labtype" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel1">
                      <div className="offcanvas-header" //onClick={() => { setProductsOpen(false); setMenuActive(true); }}
                      >
                        <Image src={logoblack} className="img-fluid mobile-logo" alt="" />
                        {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
              ></button>  */}
                        <Image src={response_closebtn} alt="" className='ms-auto mt-1 me-1 blog-memu-icon' id="offcanvasExampleLabel" data-bs-dismiss="offcanvas" aria-label="Close"
                          style={{ height: "40px", width: "19px" }} />

                        {/* <div className="mobile-menu-overlay__header ms-auto">
                    <div className="mobile-menu-content text-end">
                      <span
                      className="mobile-navigation-close-icon btn-close  "
                      id="mobile-menu-close-trigger"
                      onClick={closeMenu}
                      />
                    </div>
                  </div>  */}


                      </div>
                      <div className="d-flex align-items-center ms-3 mb-2" data-bs-dismiss="offcanvas" aria-label="Close" role="button">
                        <Image src={left_arrow} alt="" className="mt-1 me-1 blog-memu-icon" style={{ height: "10px", width: "6px" }} />
                        <p className="offcanvas-title mb-0 labtype hover-text mt-1 ms-2 labtype hover-text"
                          onClick={() => setClicked(true)}
                          style={{ fontSize: "14px" }}>back</p>
                      </div>
                      <div className="offcanvas-body" style={{ margin: "7px 11px 12px 13px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }}>
                        <h4 className='mt-2' style={{ fontWeight: "bold", color: "#1164E9" }}>Solution</h4>
                        <li className='d-flex'>
                          {/* <Image  src={lab_type} alt="" className='mt-1 me-1 blog-memu-icon labtype'/> */}
                          <Image src={use_cases} alt="" className='mt-1 me-1 blog-memu-icon usecases' />
                          <Link href="#" className="nav-link menu-mobile-ml m-0 ps-1 mb-2" style={{ fontSize: "18px", fontWeight: "bold" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>
                            Use Cases
                          </Link>
                        </li>
                        {/* <li>
                <Image  src={lab_type} alt="" className='mt-1 me-1 blog-memu-icon'/>
                <Link href="#" className="nav-link menu-mobile-ml" onClick={() =>{ setProductsOpen(false); setMenuActive(false);}}>
                 Use Cases 
                </Link>
                </li> */}
                        <li>
                          <Link href="/inventory-management" className="nav-link menu-mobile-ml mt-2 mb-4" style={{ fontSize: "16px" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>
                            Inventory Management
                          </Link>
                        </li>
                        <li>
                          <Link href="/collaboration-and-team-management" className="nav-link menu-mobile-ml mt-2 mb-4" style={{ fontSize: "16px" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>
                            Collaboration And Team Management
                          </Link>
                        </li>
                        <li>
                          <Link href="/instrument-integration" className="nav-link menu-mobile-ml mt-2 mb-4" style={{ fontSize: "16px" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>
                            Instrument Integration
                          </Link>
                        </li>
                        <li>
                          <Link href="/dynamic-report-generation" className="nav-link menu-mobile-ml mt-2 mb-4" style={{ fontSize: "16px" }} onClick={() => { setProductsOpen(false); setMenuActive(false); }}>
                            Dynamic Report Generation
                          </Link>
                        </li>
                        {/* <li>
                  <Link href="/solution/qa_qc_lab" className="nav-link menu-mobile-ml mt-2 mb-4" style={{fontSize:"16px"}} onClick={() =>{ setProductsOpen(false); setMenuActive(false);}}>
                  Project Management
                  </Link>
                </li> */}

                      </div>
                    </div>
                  </AnimatePresence>
                </li>

                <li className="has-children">
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuToggle("resources"); // Toggle Resources menu
                    }}
                    style={{ cursor: "pointer", fontSize: "18px", fontWeight: "bold" }}
                    className={`uparrow ${isResourceOpen ? "active" : ""}`}
                    id="submenuline"
                  >
                    <Image src={resource_menu} alt="" className='me-2' /> Resources
                  </Link>
                  <AnimatePresence>
                    {isResourceOpen && (
                      <motion.ul
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sub-menu"
                      >
                        <li>
                          <Link href="https://www.logilabeln.com/blog/" className="nav-link menu-mobile-ml" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Blog</Link>
                        </li>
                        <li>
                          <Link href="/resource/publications" className="nav-link menu-mobile-ml" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Publications</Link>
                        </li>
                        <li>
                          <Link href="/resource/download" className="nav-link menu-mobile-ml" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Downloads</Link>
                        </li>
                        <li>
                          <Link target="_blank" href="https://agaramtech.freshdesk.com/support/login"
                            className="nav-link menu-mobile-ml" onClick={() => { setResourceOpen(false); setMenuActive(false); }}> Support</Link>
                        </li>
                        <li>
                          <Link target="_blank" href="https://helpcenter.agaramtech.com"
                            className="nav-link menu-mobile-ml" onClick={() => { setResourceOpen(false); setMenuActive(false); }}> Help Center</Link>
                        </li>
                        <li>
                          <Link href="/resource/faq" className="nav-link menu-mobile-ml" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>FAQ</Link>
                        </li>

                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li className="has-children">
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuToggle("pricing"); // Toggle Pricing menu
                    }}
                    style={{ cursor: "pointer", fontSize: "18px", fontWeight: "bold" }}
                    className={`uparrow ${isPricingOpen ? "active" : ""}`}
                    id="submenuline"
                  >
                    <Image src={pricing_menu} alt="" className='me-2' />  Pricing
                  </Link>
                  <AnimatePresence>
                    {isPricingOpen && (
                      <motion.ul
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sub-menu"
                      >
                        <li>
                          {/* <Link href="/company/about-us" className="nav-link" onClick={() => {setCompanyOpen(false); setMenuActive(false);}}>About Us</Link> */}

                          <Link href="/pricing" className="nav-link menu-mobile-ml" id="nav-tab1" role="tab" aria-selected="true">
                            General plans
                          </Link>
                        </li>
                        <li>
                          <Link href="/pricing/academic_plans" className="nav-link menu-mobile-ml" id="nav-tab1" role="tab" aria-selected="true">
                            Academic plans
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact-us" className="nav-link menu-mobile-ml">Request A Quote</Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li className="has-children">
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      handleMenuToggle("company"); // Toggle submenu
                    }}
                    style={{ cursor: 'pointer', fontSize: "18px", fontWeight: "bold" }}
                    className={`uparrow ${isCompanyOpen ? "active" : ""}`} id='submenuline'
                  >
                    <Image src={company_menu} alt="" className='me-2' />  Company
                  </Link>
                  <AnimatePresence>
                    {isCompanyOpen && (
                      <motion.ul
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sub-menu"
                      >
                        <li>
                          <Link href="/company/about-us" className="nav-link menu-mobile-ml" onClick={() => { setCompanyOpen(false); setMenuActive(false); }}>About Agaram</Link>
                        </li>
                        <li>
                          <Link href="/company/certifications" className="nav-link menu-mobile-ml" onClick={() => { setCompanyOpen(false); setMenuActive(false); }}>Certifications</Link>
                        </li>
                        <li>
                          <Link href="/company/customers" className="nav-link menu-mobile-ml" onClick={() => { setCompanyOpen(false); setMenuActive(false); }}>Our Customers</Link>
                        </li>
                        <li>
                          <Link href="/company/terms-conditions" className="nav-link menu-mobile-ml" onClick={() => { setCompanyOpen(false); setMenuActive(false); }}>Terms and conditions</Link>
                        </li>
                        <li>
                          <Link href="/company/privacy-policy" className="nav-link menu-mobile-ml" onClick={() => { setCompanyOpen(false); setMenuActive(false); }}>Privacy policy</Link>
                        </li>

                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li>
                  <Link href="/contact-us" className="nav-link" onClick={() => setMenuActive(false)} style={{ fontSize: "18px", fontWeight: "bold" }}>
                    <Image src={contact_menu} alt="" className='me-2' />    Contact Us
                  </Link>
                </li>

              </ul>
            </nav>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;