'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logowhite from '../public/assets/images/home/agaram-logo.png';
import { SlArrowDown } from "react-icons/sl";
import logoblack from '../public/assets/images/agaram-logo.png'
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

import limsIcon from '../public/assets/images/menu/products/lims-icon.svg'
import elnIcon from '../public/assets/images/menu/products/eln-icon.svg'
import cfrIcon from '../public/assets/images/menu/products/cfr-icon.png'
import sdmsIcon from '../public/assets/images/menu/products/sdms-icon.svg'
import dmsIcon from '../public/assets/images/menu/products/dms-icon.svg'
import interfacerIcon from '../public/assets/images/menu/products/interfacer-icon.svg'
import besIcon from '../public/assets/images/menu/products/bes-logo-menu.svg'

import i1 from '../public/assets/images/menu/industry/i1.svg'
import i2 from '../public/assets/images/menu/industry/i2.svg'
import i3 from '../public/assets/images/menu/industry/i3.svg'
import i4 from '../public/assets/images/menu/industry/i4.svg'
import i5 from '../public/assets/images/menu/industry/i5.svg'
import i6 from '../public/assets/images/menu/industry/i6.svg'
import i7 from '../public/assets/images/menu/industry/i7.svg'
import i8 from '../public/assets/images/menu/industry/i8.svg'
import i9 from '../public/assets/images/menu/industry/i9.svg'

import r1 from '../public/assets/images/menu/resources/r1.svg'
import r2 from '../public/assets/images/menu/resources/r2.svg'
import r3 from '../public/assets/images/menu/resources/r3.svg'
import r4 from '../public/assets/images/menu/resources/r4.svg'
import r5 from '../public/assets/images/menu/resources/r5.svg'

import s1 from '../public/assets/images/menu/services/s1.svg'
import s2 from '../public/assets/images/menu/services/s2.svg'
import s3 from '../public/assets/images/menu/services/s3.svg'
import s4 from '../public/assets/images/menu/services/s4.svg'

import c1 from '../public/assets/images/menu/company/c1.svg'
import c2 from '../public/assets/images/menu/company/c2.svg'
import c3 from '../public/assets/images/menu/company/c3.svg'
import c4 from '../public/assets/images/menu/company/c4.svg'
import c7 from '../public/assets/images/menu/company/c7.svg'



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
  const [isService, setServiceOpen] = useState(false);

  const [showLabItems, setShowLabItems] = useState(false);

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [UseCasesopen, setUseCasesopen] = useState(false);
  const [clicked, setClicked] = useState(false);


  const handleMenuToggle = (menu: string) => {
    setProductsOpen(menu === "products" ? !isProductsOpen : false);
    setResourceOpen(menu === "resources" ? !isResourceOpen : false);
    setCompanyOpen(menu === "company" ? !isCompanyOpen : false);
    setPricingOpen(menu === "pricing" ? !isPricingOpen : false);
    setServiceOpen(menu === 'service' ? !isService : false);
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
                              Products
                              <Image
                                src={scroll || whiteHeader ? downarrow : downwhitearrow}
                                className="responsive_image_bottom ms-2 downwhitearrow"
                                alt=""
                                onMouseEnter={(e) => (e.target as HTMLImageElement).classList.add('hover')}
                                onMouseLeave={(e) => (e.target as HTMLImageElement).classList.remove('hover')}
                              />
                            </a>

                            <ul className="submenu submenu-two type py-4">

                              {/* <li className="box-shadow-menu type ms-2">
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
                              </li> */}

                              {(activeSection === 'labTypes' || activeSection === null) && (
                                <>
                                  <li className="box-shadow-menu ms-4 mt-2 py-3">
                                    <ul>
                                      <Link href="https://www.agaramtech.com/product/qualis-lims-software" target="_blank" className="nav-link ">
                                        <li className="px-3 py-3 d-flex">
                                          <Image src={limsIcon} alt="" className="me-2" height={40} />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Qualis Lims</span>
                                            <span className="submenu-sub-text">Sample management, elevated</span>
                                          </div>

                                        </li>
                                      </Link>
                                      <Link href="https://www.agaramtech.com/product/logilab-eln" target="_blank" className="nav-link ">
                                        <li className="mt-2 px-3 py-3 d-flex">
                                          <Image src={elnIcon} alt="research_development" className="me-2" height={40} />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Logilab ELN</span>
                                            <span className="submenu-sub-text">Familiar interface, simply more powerful</span>
                                          </div>
                                        </li>
                                      </Link>
                                      <Link href="https://www.agaramtech.com/product/cfr-gateway" target="_blank" className="nav-link ">
                                        <li className="mt-2 px-3 py-3 d-flex">

                                          <Image src={cfrIcon} alt="" className="me-2" height={40} width={43} />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">
                                              CFR Gateway
                                            </span>
                                            <span className="submenu-sub-text">Non-complaint instruments made complaint</span>
                                          </div>

                                        </li>
                                      </Link>
                                    </ul>
                                  </li>

                                  <li className="box-shadow-menu box-shadow-menu-two ms-4 mt-2 py-3">
                                    <ul>
                                      <Link href="https://www.agaramtech.com/product/logilab-sdms-scientific-data-management-system" target="_blank" className="nav-link ">
                                        <li className="ms-3 px-3 py-3 d-flex">

                                          <Image src={sdmsIcon} alt="" className="mt-1 me-1" height={40} width={50} />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Logilab SDMS</span>
                                            <span className="submenu-sub-text">Automated data integrity & compliance</span>
                                          </div>

                                        </li>
                                      </Link>
                                      <Link href="https://www.agaramtech.com/product/qualis-dms" target="_blank" className="nav-link ">
                                        <li className="ms-3 px-3 py-3 d-flex">

                                          <Image src={dmsIcon} alt="" className="me-2 mt-1" height={40} />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Qualis DMS</span>
                                            <span className="submenu-sub-text">Compliant document management & control</span>
                                          </div>

                                        </li>
                                      </Link>
                                    </ul>
                                  </li>
                                  <li className="box-shadow-menu box-shadow-menu-two ms-4 mt-2 py-3">
                                    <ul>
                                      <Link href="https://www.agaramtech.com/product/interfacer" target="_blank" className="nav-link ">
                                        <li className="ms-3 px-3 py-3 d-flex">

                                          <Image src={interfacerIcon} alt="" className="mt-1 me-2" height={40} />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Interfacer</span>
                                            <span className="submenu-sub-text">Integrate any clinical instruments</span>
                                          </div>

                                        </li>
                                      </Link>
                                      <Link href="https://www.agaramtech.com/product/logilab-bes-bioanalytical-execution-system" target="_blank" className="nav-link ">
                                        <li className="ms-3 px-3 py-3 d-flex">

                                          <Image src={besIcon} alt="" className="me-2 mt-1" height={40} width={42} />
                                          <div className="d-flex flex-column">
                                            <span className="f_600 f_size_16">Logilab BES</span>
                                            <span className="submenu-sub-text">Optimize BA/BE & DMPK workflows</span>
                                          </div>

                                        </li>
                                      </Link>
                                    </ul>
                                  </li>
                                  {/* <Link href='https://www.logilabeln.com/blog/why-most-eln-solutions-are-not-suitable-for-the-regulated-industry/' target="_blank">
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
                                  </Link> */}
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
                              Industry
                              <Image
                                src={scroll || whiteHeader ? downarrow : downwhitearrow}
                                className="responsive_image_bottom ms-2 downwhitearrow"
                                alt=""
                                onMouseEnter={(e) => (e.target as HTMLImageElement).classList.add('hover')}
                                onMouseLeave={(e) => (e.target as HTMLImageElement).classList.remove('hover')}
                              />
                            </Link>
                            <ul className="submenu submenu-two submenu-resources py-4 pe-4">
                              <li className='box-shadow-menu ms-4'>
                                <ul>
                                  <Link href="https://www.agaramtech.com/industries/pharmaceutical" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={i1} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Pharma LIMS | ELN</span>
                                        <span className='submenu-sub-text'>Paperless quality control and compliance</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/industries/life-sciences-biotech" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={i2} alt="" className='me-2 mt-1' height={40} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Life Sciences & Biotech LIMS | SDMS</span>
                                        <span className='submenu-sub-text'>Standardize research data and workflows</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/industries/contract-research-organization" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={i3} alt="" className='me-2 mt-1' height={40} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Contract Research Organization ELN</span>
                                        <span className='submenu-sub-text'>Elevate collaboration and be audit-ready</span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>
                              <li className='box-shadow-menu box-shadow-menu-two ms-4'>
                                <ul className="">
                                  <Link href="https://www.agaramtech.com/industries/healthcare-diagnostics" className="nav-link " target='_blank'>
                                    <li className='ms-3 px-3 py-3 d-flex'>
                                      <Image src={i4} alt="" className='me-2 mt-1' height={40} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Healthcate & Diagnostics LIMS</span>
                                        <span className='submenu-sub-text'>Efficiently manage patient data and testing</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/industries/cell-and-gene-therapy" className="nav-link " target='_blank'>
                                    <li className='ms-3 px-3 py-3 d-flex'>
                                      <Image src={i5} alt="" className='me-2 mt-1' height={40} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Cell & Gene Therapy ELN | SDMS</span>
                                        <span className='submenu-sub-text'>Seamless and complaint sample management</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/industries/chemical" className="nav-link " target='_blank'>
                                    <li className=' ms-3 px-3 py-3 d-flex'>
                                      <Image src={i6} alt="" className='me-2 mt-1' height={40} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Chemical Manufacturing | Formulations | LIMS</span>
                                        <span className='submenu-sub-text'>Enhance sample traceablitiy and data security</span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>

                              <li className='box-shadow-menu box-shadow-menu-two ms-4'>
                                <ul className="">
                                  <Link href="https://www.agaramtech.com/industries/oil-gas-industry" className="nav-link " target='_blank'>
                                    <li className='ms-3 px-3 py-3 d-flex'>
                                      <Image src={i7} alt="" className='me-2 mt-1' height={40} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Oil & Gas LIMS | SDMS</span>
                                        <span className='submenu-sub-text'>Automate quality control processes</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/industries/dairy-food-beverage" className="nav-link " target='_blank'>
                                    <li className='ms-3 px-3 py-3 d-flex'>
                                      <Image src={i8} alt="" className='me-2 mt-1' height={40} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Dairy, Food & Beverage LIMS</span>
                                        <span className='submenu-sub-text'>Accelerate quality test and assurance</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/industries/manufacturing" className="nav-link " target='_blank'>
                                    <li className=' ms-3 px-3 py-3 d-flex'>
                                      <Image src={i9} alt="" className='me-2 mt-1' height={40} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Manufacturing LIMS | ELN</span>
                                        <span className='submenu-sub-text'>Deliver consistent Superior quality</span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>
                              {/* <Link href='https://www.logilabeln.com/blog/what-is-an-electronic-lab-notebook-a-comprehensive-guide/' target="_blank">
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
                              </Link> */}


                            </ul>
                          </li>

                          <li className="has-children has-children--multilevel-submenu ">
                            <a className="nav-link pricing-link" >
                              Resources
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
                                  <Link href="https://www.agaramtech.com/resources/brochures" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={r1} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Brochures</span>
                                        <span className='submenu-sub-text'>Access product brochures & guides</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="/publications" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>
                                      <Image src={r2} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Publications</span>
                                        <span className='submenu-sub-text'>Explore research papers, case studies & white papers</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/resources/videos" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={r3} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Videos</span>
                                        <span className='submenu-sub-text'>View informational videos & product tutorials</span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>
                              <li className='ms-3 box-shadow-menu'>
                                <ul>
                                  <Link href="https://helpcenter.agaramtech.com/" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={r4} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Help Center</span>
                                        <span className='submenu-sub-text'>Find FAQs, articles, product release notes & more</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://agaramtech.freshdesk.com/" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={r5} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Helpdesk Portal</span>
                                        <span className='submenu-sub-text'>Connect for guidance</span>
                                      </div>

                                    </li>
                                  </Link>

                                </ul>
                              </li>
                            </ul>
                          </li>

                          <li className="has-children has-children--multilevel-submenu ">
                            <a className="nav-link pricing-link" >
                              Services
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
                                  <Link href="https://www.agaramtech.com/services/professional-services" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={s1} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Professional Services</span>
                                        <span className='submenu-sub-text'>Everything we can do for you</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/services/implementation-methodology" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={s2} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Implementation Methodology</span>
                                        <span className='submenu-sub-text'>The steps we take to provide the best services</span>
                                      </div>

                                    </li>
                                  </Link>

                                </ul>
                              </li>
                              <li className='ms-3 box-shadow-menu'>
                                <ul>
                                  <Link href="https://www.agaramtech.com/services/training" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={s3} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Training</span>
                                        <span className='submenu-sub-text'>How we train you to achieve peak performance</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/services/support" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={s4} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Support</span>
                                        <span className='submenu-sub-text'>How we provide guidance</span>
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
                                  <Link href="https://www.agaramtech.com/about-us" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={c1} alt="" className='mt-1 me-2' height={35}  style={{width:'30px'}}/>
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>About Us</span>
                                        <span className='submenu-sub-text'>Who we are & what we do</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/partners" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={c2} alt="" className='mt-1 me-2' height={35}  style={{width:'30px'}}/>
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Partners</span>
                                        <span className='submenu-sub-text'>Our global strategic alliances</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/customers" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={c3} alt="" className='mt-1 me-2' height={35} style={{width:'30px'}}/>
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Customers</span>
                                        <span className='submenu-sub-text'>Testimonial & reviews from out cherished customers</span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>
                              <li className='box-shadow-menu ms-4'>
                                <ul>
                                  <Link href="https://www.agaramtech.com/careers" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={c4} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Careers</span>
                                        <span className='submenu-sub-text'>Join us in transforming laboratories</span>
                                      </div>

                                    </li>
                                  </Link>
                                  <Link href="https://www.agaramtech.com/certifications" className="nav-link " target='_blank'>
                                    <li className='px-3 py-3 d-flex'>

                                      <Image src={c7} alt="" className='mt-1 me-2' height={35} />
                                      <div className='d-flex flex-column'>
                                        <span className='f_600 f_size_16'>Certifications</span>
                                        <span className='submenu-sub-text'>Commited to delivering uncompromised quality</span>
                                      </div>

                                    </li>
                                  </Link>
                                </ul>
                              </li>
                              {/* <Link href="https://www.logilabeln.com/blog/how-laboratories-on-a-budget-can-benefit-from-cloud-based-eln-solutions/" target="_blank" className="nav-link d-flex">
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
                              </Link> */}
                            </ul>
                          </li>

                          {/* <li>
                            <Link href="/contact-us" className="nav-link" >
                              Contact Us
                            </Link>
                          </li> */}
                        </ul>

                      </nav>
                    </div>

                    <div className="header__actions--preview">
                      <div className="header__actions">
                        <div className="header__icons-wrapper header-right-inner" id="hidden-icon-wrapper">
                          <div className="header-button downlode-btn ml-4 menu_for headermenu mb-1">

                            <div className='getstart'>
                              <Link href="https://www.agaramtech.com/contact-us" className="ht-btn ht-btn-md" target="_blank">Contact Us</Link>
                            </div>

                            <div className='signin'>
                              <Link href="https://www.agaramtech.com/" className="ht-btn ht-btn-md">Go to Agaram</Link>
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
                    <Link href="https://www.agaramtech.com/contact-us" className="ht-btn ht-btn-md ms-0 ms-md-2 mobilemenu_btn">Contact Us</Link>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="mobile-menu-content header-button downlode-btn ml-4 mobilemenu_for headermenu mb-1">
                    <Link href="https://www.agaramtech.com/" className="ht-btn ht-btn-md ms-0 ms-md-2 mobilemenu_btn" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Go to Agaram</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-menu-overlay__body">
            <nav className="offcanvas-navigation">
              <ul className='list-unstyled'>

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
                    Products
                  </Link>
                  {/* </span> */}
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.ul
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sub-menu list-unstyled"
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

                        <li>
                          <Link href="https://www.agaramtech.com/product/qualis-lims-software" className="nav-link menu-mobile-ml" target='_blank' onClick={() => { setProductsOpen(false); setMenuActive(false); }}>Qualis Lims</Link>
                        </li>

                        <li>
                          <Link href="https://www.agaramtech.com/product/logilab-eln" className="nav-link menu-mobile-ml" target='_blank' onClick={() => { setProductsOpen(false); setMenuActive(false); }}>Logilab ELN</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/product/cfr-gateway" className="nav-link menu-mobile-ml" target='_blank' onClick={() => { setProductsOpen(false); setMenuActive(false); }}>CFR Gateway</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/product/logilab-sdms-scientific-data-management-system" className="nav-link menu-mobile-ml" target='_blank' onClick={() => { setProductsOpen(false); setMenuActive(false); }}>Logilab SDMS</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/product/qualis-dms" className="nav-link menu-mobile-ml" target='_blank' onClick={() => { setProductsOpen(false); setMenuActive(false); }}>Qualis DMS</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/product/interfacer" className="nav-link menu-mobile-ml" target='_blank' onClick={() => { setProductsOpen(false); setMenuActive(false); }}>Interfacer</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/product/logilab-bes-bioanalytical-execution-system" className="nav-link menu-mobile-ml" target='_blank' onClick={() => { setProductsOpen(false); setMenuActive(false); }}>Logilab BES</Link>
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
                    Industry
                  </Link>
                  <AnimatePresence>
                    {isResourceOpen && (
                      <motion.ul
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1, overflow: 'auto' }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sub-menu list-unstyled"
                      >
                        <li>
                          <Link href="https://www.agaramtech.com/industries/pharmaceutical" target='_blank' className="nav-link " onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Pharma LIMS | ELN</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/industries/life-sciences-biotech" target='_blank' className="nav-link " onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Life Sciences & Biotech LIMS | SDMS</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/industries/contract-research-organization" target='_blank' className="nav-link" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Contract Research Organization ELN</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/industries/healthcare-diagnostics" target='_blank' className="nav-link" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Healthcate & Diagnostics LIMS</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/industries/cell-and-gene-therapy" target='_blank' className="nav-link " onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Cell & Gene Therapy ELN | SDMS</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/industries/chemical" target='_blank' className="nav-link" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Chemical Manufacturing | Formulations | LIMS</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/industries/oil-gas-industry" target='_blank' className="nav-link" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Oil & Gas LIMS | SDMS</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/industries/dairy-food-beverage" target='_blank' className="nav-link" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Dairy, Food & Beverage LIMS</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/industries/manufacturing" target='_blank' className="nav-link" onClick={() => { setResourceOpen(false); setMenuActive(false); }}>Manufacturing LIMS | ELN</Link>
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
                    Resources
                  </Link>
                  <AnimatePresence>
                    {isPricingOpen && (
                      <motion.ul
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sub-menu list-unstyled"
                      >
                        <li>
                          {/* <Link href="/company/about-us" className="nav-link" onClick={() => {setCompanyOpen(false); setMenuActive(false);}}>About Us</Link> */}

                          <Link href="https://www.agaramtech.com/resources/brochures" className="nav-link menu-mobile-ml" target='_blank'>
                            Brochures
                          </Link>
                        </li>
                        <li>
                          <Link href="/publications" className="nav-link menu-mobile-ml" target='_blank'>
                            Publications
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/resources/videos" className="nav-link menu-mobile-ml" target='_blank'>Videos</Link>
                        </li>
                        <li>
                          <Link href="https://helpcenter.agaramtech.com/" className="nav-link menu-mobile-ml" target='_blank'>Help Center</Link>
                        </li>
                        <li>
                          <Link href="https://agaramtech.freshdesk.com/" className="nav-link menu-mobile-ml" target='_blank'>Helpdesk Portal</Link>
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
                      handleMenuToggle("service"); // Toggle submenu
                    }}
                    style={{ cursor: 'pointer', fontSize: "18px", fontWeight: "bold" }}
                    className={`uparrow ${isService ? "active" : ""}`} id='submenuline'
                  >
                    Services
                  </Link>
                  <AnimatePresence>
                    {isService && (
                      <motion.ul
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sub-menu list-unstyled"
                      >
                        <li>
                          <Link href="https://www.agaramtech.com/services/professional-services" target='_blank' className="nav-link menu-mobile-ml" onClick={() => { setCompanyOpen(false); setMenuActive(false); }}>Professional Services</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/services/implementation-methodology" target='_blank' className="nav-link menu-mobile-ml" onClick={() => { setCompanyOpen(false); setMenuActive(false); }}>Implementation Methodology</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/services/training" target='_blank' className="nav-link menu-mobile-ml" onClick={() => { setCompanyOpen(false); setMenuActive(false); }}>Training</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/services/support" className="nav-link menu-mobile-ml" onClick={() => { setCompanyOpen(false); setMenuActive(false); }}>Support</Link>
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
                    Company
                  </Link>
                  <AnimatePresence>
                    {isCompanyOpen && (
                      <motion.ul
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sub-menu list-unstyled"
                      >
                        <li>
                          <Link href="https://www.agaramtech.com/about-us" target='_blank' className="nav-link menu-mobile-ml" onClick={() => { setServiceOpen(false); setMenuActive(false); }}>About Us</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/partners" target='_blank' className="nav-link menu-mobile-ml" onClick={() => { setServiceOpen(false); setMenuActive(false); }}>Partners</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/customers" target='_blank' className="nav-link menu-mobile-ml" onClick={() => { setServiceOpen(false); setMenuActive(false); }}>Customers</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/careers" className="nav-link menu-mobile-ml" onClick={() => { setServiceOpen(false); setMenuActive(false); }}>Careers</Link>
                        </li>
                        <li>
                          <Link href="https://www.agaramtech.com/certifications" className="nav-link menu-mobile-ml" onClick={() => { setServiceOpen(false); setMenuActive(false); }}>Careers</Link>
                        </li>


                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                {/* <li>
                  <Link href="/contact-us" className="nav-link" onClick={() => setMenuActive(false)} style={{ fontSize: "18px", fontWeight: "bold" }}>
                    <Image src={contact_menu} alt="" className='me-2' />    Contact Us
                  </Link>
                </li> */}

              </ul>
            </nav>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;