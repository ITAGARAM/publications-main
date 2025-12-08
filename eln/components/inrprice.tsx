'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// export async function getServerSideProps(context: { query: { tab: any; }; }) {
//   const { tab } = context.query;

//   return {
//     props: { tab: tab || null }, // Pass tab as a prop
//   };
// }

const PriceCalculator = () => {
  // State to manage the quantity and prices
  //const router = useRouter();
  const [activeTab, setActiveTab] = useState('standard-tab'); // Default tab

  //const tab = Array.isArray(router.query.tab) ? router.query.tab[0] : router.query.tab;
  const [qty, setQty] = useState<number>(1); // Explicitly define qty as a number
  const [prices, setprices] = useState<{ loss: number, lite: number, standard: number, premium: number }>({
    loss: 21160,
    lite: 699,
    standard: 1200,
    premium: 2400
  });
  const [itemPrice, setItemPrice] = useState<Record<string, number>>({});
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
    const [activePlan, setActivePlan] = useState("monthly");
    // State to hold the calculated prices
  const [calculatedPrices, setCalculatedPrices] = useState({
    lite: 0,
    standard: 0,
    premium: 0,
    loss: 0,
    liteMonthly: 0,
    standardMonthly: 0,
    premiumMonthly: 0,
    liteAnnual: 0,
    standardAnnual: 0,
    premiumAnnual: 0,
    roundliteAnnual: 0,
    roundstandardAnnual: 0,
    roundpremiumAnnual: 0,
    academiclite: 0,
    academicstandard: 0,
    academicpremium: 0,
    yearlyLite: 0,
    yearlyStandard: 0,
    yearlyPremium: 0,
    roundyearlyLite: 0,
    roundyearlyStandard: 0,
    roundyearlyPremium: 0,
  });

  const [singleUnitPrices, setSingleUnitPrices] = useState({
    lite: 0,
    standard: 0,
    premium: 0,
  });


  const calculateTotal = () => {
    const prices = { lite: 699, standard: 1200, premium: 2400, loss: 21160 };
    let { lite, standard, premium, loss } = prices;

    let unit_price = { lite, standard, premium, loss };
    const discount = 0.70;
    const additionalDiscount = 0.90;
    const yearlyMultiplier = 12;

    const rounded = (value: number) => Math.round(value);

    // Apply discounts based on quantity
    if (qty >= 11 && qty <= 25) {
      unit_price.lite *= 0.95;
      unit_price.standard *= 0.95;
      unit_price.premium *= 0.95;
    } else if (qty >= 26 && qty <= 50) {
      unit_price.lite *= 0.9;
      unit_price.standard *= 0.9;
      unit_price.premium *= 0.9;
    } else if (qty >= 51 && qty <= 100) {
      unit_price.lite *= 0.85;
      unit_price.standard *= 0.85;
      unit_price.premium *= 0.85;
    } else if (qty >= 101 && qty <= 200) {
      unit_price.lite *= 0.8;
      unit_price.standard *= 0.8;
      unit_price.premium *= 0.8;
    } else if (qty >= 201 && qty <= 300) {
      unit_price.lite *= 0.75;
      unit_price.standard *= 0.75;
      unit_price.premium *= 0.75;
    } else if (qty >= 301 && qty <= 500) {
      unit_price.lite *= 0.7;
      unit_price.standard *= 0.7;
      unit_price.premium *= 0.7;
    }

    // Calculate total prices
    setCalculatedPrices({
      lite: Math.round(qty * unit_price.lite),
      standard: Math.round(qty * unit_price.standard),
      premium: Math.round(qty * unit_price.premium),
      loss: Math.round(qty * unit_price.loss),

      liteMonthly: Math.round(unit_price.lite * 0.9 * 100) / 100,
      standardMonthly: Math.round(unit_price.standard * 0.9 * 100) / 100,
      premiumMonthly: Math.round(unit_price.premium * 0.9 * 100) / 100,

      liteAnnual: Math.round(qty * unit_price.lite * 12 * 0.7 * 0.9),
      standardAnnual: Math.round(qty * unit_price.standard * 12 * 0.7 * 0.9),
      premiumAnnual: Math.round(qty * unit_price.premium * 12 * 0.7 * 0.9),

      roundliteAnnual: Math.round(qty * unit_price.lite * 12 * 0.9),
      roundstandardAnnual: Math.round(qty * unit_price.standard * 12 * 0.9),
      roundpremiumAnnual: Math.round(qty * unit_price.premium * 12 * 0.9),

      academiclite: parseFloat((unit_price.lite * 0.7).toFixed(2)),
      academicstandard: parseFloat((unit_price.standard * 0.7).toFixed(2)),
      academicpremium: parseFloat((unit_price.premium * 0.7).toFixed(2)),

      yearlyLite: parseFloat((unit_price.lite * discount * 0.9).toFixed(2)),
      yearlyStandard: parseFloat((unit_price.standard * discount * 0.9).toFixed(2)),
      yearlyPremium: parseFloat((unit_price.premium * discount * 0.9).toFixed(2)),

      roundyearlyLite: rounded(qty * unit_price.lite * yearlyMultiplier * discount * additionalDiscount),
      roundyearlyStandard: rounded(qty * unit_price.standard * yearlyMultiplier * discount * additionalDiscount),
      roundyearlyPremium: rounded(qty * unit_price.premium * yearlyMultiplier * discount * additionalDiscount),
    });

    // Calculate single unit prices
    setSingleUnitPrices({
      lite: Math.round(unit_price.lite * 100) / 100,
      standard: Math.round(unit_price.standard * 100) / 100,
      premium: Math.round(unit_price.premium * 100) / 100,
    });
  };

  const handleHashChange = () => {
    console.log('hashchange done');
    const hash = window.location.hash.substring(1); // Remove '#' from the hash
    if (hash) {
      setActiveTab(hash); // Update active tab based on hash
    }
  };

  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get raw input value
    let value = e.target.value;
  
    // Remove leading zeros (except for a single zero)
    value = value.replace(/^0+(?!$)/, '');
  
    // If the input is empty, set a default behavior (e.g., empty state)
    if (value === '') {
      setQty(NaN); // Keep it as an empty string if allowed
      setErrorMsg(false);
      return;
    }
  
    // Parse the cleaned value as a number
    const numericValue = parseInt(value, 10);
  
    // If the value is '0', handle it explicitly as a valid input
    if (numericValue === 0) {
      setQty(1); // Allow setting 0 explicitly
      setErrorMsg(false);
      return;
    }
  
    // Ensure the value stays within range
    if (numericValue > 200) {
      setQty(200);
      setErrorMsg(true);
    } else {
      setQty(numericValue);
      setErrorMsg(false);
    }
  };
  
  
  const togglePricing = () => {
      setIsMonthly(!isMonthly);
  };
  const handleToggle = () => {
    setActivePlan(activePlan === "monthly" ? "yearly" : "monthly");
  };
  const handleTabClick = () => {
    setIsOpen(!isOpen);
    };

  useEffect(() => {
    // if (typeof window === 'undefined') return; // Ensure this runs only on the client
    // const tab = Array.isArray(router.query.tab) ? router.query.tab[0] : router.query.tab;

    // if (tab) {
    //   const element = document.getElementById(tab);
    //   if (element) {
    //     element.scrollIntoView({ behavior: 'smooth' });
    //   }
    // }
    calculateTotal();
  }, [qty]); // Recalculate prices whenever qty changes

  useEffect(() => {
    // On component mount, check the initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      // Cleanup the event listener
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div>
      <div className="pricing-table-area section-space--ptb_100 bg-gray1 pb-0 tab">
                <div className="container">
                    <div className="row section-space--mb_40">
                        <div className="col-lg-12 ht-tab-wrap">
                            <div className="pricing-table-title-area position-relative">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                        <div className="section-title-wrapper text-center mb-20 wow move-up animated" >
                                                {/* <h3 className="center-heading mb-20">How Big is your Lab?</h3> */}
                                                <h3 className="center-heading mb-20">Just the right plans for labs of all sizes</h3>
                                                {/* <input type="number" min="1" max="200" value={qty.toString()} className="qty" id="qty" onChange={handleQtyChange} style={{ marginBottom: "20px" }} />
                                                {errorMsg && (<span id="errorMsg" style={{color:"red", display:"block"}}>*For teams larger than 200, check out our Enterprise  plan</span>)}<br/>
                                                <span className="input-title"> Every <span id="output">{qty || 1}</span> user </span>                                            */}
                                                <span className="inline input-title"> loses $<span id="price_loss">{isNaN(calculatedPrices.loss) ? 252 : calculatedPrices.loss}</span> on paper-based experiments every month</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-12 text-center wow move-up ">
                        <div className={`responsive-tabs ${isOpen ? 'open' : ''}`} onClick={handleTabClick}>
                          <span className="dropdown-arrow" onClick={handleTabClick}></span>
                            <ul className="nav nav-tabs justify-content-center ht-tab-menu" role="tablist" style={{borderBottom:"0"}}>
                                <li className="tab__item nav-item active">
                                    <Link className={`nav-link ${activeTab === 'standard-tab' ? "active" : ""}`} id="nav-tab1" data-bs-toggle="tab" href="#standard-tab" onClick={() => setActiveTab('standard-tab')} role="tab" aria-selected="true">Standard</Link>
                                </li>
                                <li className={`tab__item nav-item ${activeTab === 'academic-tab' ? "active" : ""} `}>
                                    <Link className={`nav-link ${activeTab === 'academic-tab' ? "active" : ""}`} id="nav-tab2" data-bs-toggle="tab" href="#academic-tab" onClick={() => setActiveTab('academic-tab')} role="tab" aria-selected="false">Academic</Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="tab-content ht-tab__content wow move-up tab">
                    {activeTab === 'standard-tab' && <div className="tab-pane fade show active" id="standard-tab" role="tabpanel">
                            {/* <div className="toggle-container">
                                <div className="pricing-options">
                                    <span id="monthly" className={activePlan === "monthly" ? "active" : ""}>Monthly</span>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" id="toggleSwitch" onChange={handleToggle}/>
                                    <span className="slider round"></span>
                                </label>
                                <div className="pricing-options">
                                    <span id="yearly" className={activePlan === "yearly" ? "active" : ""}>Yearly</span>
                                </div>
                            </div> */}
                            <div className="pricing-details">
                              <div id="monthlyPricing" className={`pricing-plan ${activePlan === "monthly" ? "active" : ""}`}>
                                <div className="pricing-table-content-area">
                                  <div className="container">
                                    <div className="row pricing-table-one">
                                      {/* Monthly Pricing Plan */}
                                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: "visible" }}>
                                        <div className="pricing-table__inner free-bg" style={{ background: "#FFE7DB" }}>
                                          <div className="pricing-table__header" style={{marginTop:"40px"}}>
                                            <h6 className="sub-title" style={{marginBottom:"0 !important"}}>ELN Lite</h6>
                                            <b className="sub-para">For getting familiar with ELN</b><br />
                                            {/* <span className="price">₹<span id="singleuser_lite">{singleUnitPrices.lite}</span></span><br />
                                            <span>per user / month</span><br /> */}
                                          </div>
                                          <div className="pricing-table__body">
                                            <div className="pricing-table__footer">
                                              <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md">Try for free
                                              </Link>
                                            </div>
                                            <div className="align-left mt-30">
                                              <b>Free for 30 days:</b>
                                              <ul className="dark-check-list">
                                                <li className="list-item">Beginner-friendly User Interface</li>
                                                <li className="list-item">Invite up to 10 Users</li>
                                                <li className="list-item">SSO (Google and Microsoft)</li>
                                                <li className="list-item">Ready-made Experiment Templates</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Repeat the same structure for other pricing plans with appropriate modifications */}
                                      {/* Standard Plan */}
                                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: "visible" }}>
                                        <div className="pricing-table__inner perpul-bg" style={{ background: "#D9DAFB" }}>
                                          <div className="badge badge-standard">Recommended</div>
                                          <div className="pricing-table__header">
                                            <h6 className="sub-title">Standard</h6>
                                            <b className="sub-para">Everything in Lite Plan and plus:</b><br />
                                            {/* <span className="price">₹<span id="singleuser_standard">{singleUnitPrices.standard}</span></span><br />
                                            <span>per user / month</span><br /> */}
                                          </div>
                                          <div className="pricing-table__body">
                                            <div className="pricing-table__footer">
                                              <Link href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">Get started
                                              </Link>
                                            </div>
                                            <div className="align-left mt-30">
                                              <b>Everything in Lite, plus:</b>
                                              <ul className="dark-check-list">
                                                <li className="list-item">Single Site</li>
                                                <li className="list-item">Basic Inventory</li>
                                                <li className="list-item">Configurable Workflows</li>
                                                <li className="list-item">250 GB File Storage</li>
                                                <li className="list-item">Audit Trails</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Add Premium Plan */}
                                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table pricing-table--popular" style={{ visibility: "visible" }}>
                                        <div className="pricing-table__inner green-bg" style={{ background: "#E5F4F2" }}>
                                          <div className="pricing-table__feature-mark">
                                            <span>Popular</span>
                                          </div>
                                          <div className="pricing-table__header">
                                            <h6 className="sub-title">Premium</h6>
                                            <b className="sub-para">For mid-sized and large teams</b><br />
                                            {/* <span className="price">₹<span id="singleuser_premium">{singleUnitPrices.premium}</span></span><br />
                                            <span>per user / month</span><br /> */}
                                          </div>
                                          <div className="pricing-table__body">
                                            <div className="pricing-table__footer">
                                              <Link href="https://logilabelnlite.azurewebsites.net/register"  target="_blank" className="ht-btn ht-btn-md">Get started
                                              </Link>
                                            </div>
                                            <div className="align-left mt-30">
                                              <b>Everything in Standard, plus:</b>
                                              <ul className="dark-check-list">
                                                <li className="list-item">Multi-Site</li>
                                                <li className="list-item">Advanced Inventory</li>
                                                <li className="list-item">Instrument Integration</li>
                                                <li className="list-item">1 TB Storage</li>
                                                <li className="list-item">SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Enterprise Plan */}
                                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: "visible" }}>
                                        <div className="pricing-table__inner blue-bg" style={{ background: "#E5F3FF" }}>
                                          <div style={{ marginBottom: "40px" }}></div>
                                          <div className="pricing-table__header">
                                            <h6 className="sub-title">Enterprise</h6>
                                            <b className="sub-para enterprise_p_tag">For large teams with {'>'} 200 users</b>
                                          </div>
                                          <div className="pricing-table__body">
                                            <div className="pricing-table__footer">
                                              <Link href="/contact-us"
                                              className="ht-btn ht-btn-md">Contact Us
                                              </Link>
                                            </div>
                                            <div className="align-left mt-30">
                                              <b>Everything in Premium, plus:</b>
                                              <ul className="dark-check-list">
                                                <li className="list-item">Multi-Site</li>
                                                <li className="list-item">Multiple Environments/ Domains</li>
                                                <li className="list-item">Your Choice of Data Residency</li>
                                                <li className="list-item">Storage On Request</li>
                                                <li className="list-item">24/7 Enterprise Support</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="yearlyPricing" className={`pricing-plan ${activePlan === "yearly" ? "active" : ""}`}>
                              <div className="pricing-table-content-area">
                              <div className="container">
                                <div className="row pricing-table-one">
                                  {/* ELN Lite Plan */}
                                  <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: 'visible' }}>
                                    <div className="pricing-table__inner free-bg" style={{ background: '#FFE7DB' }}>
                                      <div style={{ marginBottom: '40px' }}></div>
                                      <div className="pricing-table__header">
                                        <h6 className="sub-title">ELN Lite</h6>
                                        <b className="sub-para">For getting familiar with ELN</b><br></br>
                                        {/* <span className="price">
                                          ₹<span id="singleuser_lite2">{calculatedPrices.liteMonthly.toFixed(2)}</span>
                                        </span>
                                        <br />
                                        <span>per user / month</span>
                                        <br />
                                        <span className="total-price">
                                          ₹<span id="price_lite2">{calculatedPrices.roundliteAnnual.toFixed(2)}</span>
                                        </span>{' '}
                                        <span>for <span id="output1">{qty}</span> users</span> */}
                                      </div>
                                      <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                          <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md">
                                            Try for free
                                          </Link>
                                        </div>
                                        <div className="align-left mt-30">
                                          <b>Free for 30 days:</b>
                                          <ul className="dark-check-list">
                                            <li className="list-item">Beginner-friendly User Interface</li>
                                            <li className="list-item">Invite up to 10 Users</li>
                                            <li className="list-item">SSO (Google and Microsoft)</li>
                                            <li className="list-item">Ready-made Experiment Templates</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Standard Plan */}
                                  <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: 'visible' }}>
                                    <div className="pricing-table__inner perpul-bg" style={{ background: '#D9DAFB' }}>
                                      <div className="badge badge-standard">Recommended</div>
                                      <div className="pricing-table__header">
                                        <h6 className="sub-title">Standard</h6>
                                        <b className="sub-para">Everything in Lite Plan and plus:</b>
                                        <br />
                                        {/* <span className="price">
                                          ₹<span id="singleuser_standard2">{calculatedPrices.standardMonthly.toFixed(2)}</span>
                                        </span>
                                        <br />
                                        <span>per user / month</span>
                                        <br />
                                        <span className="total-price">
                                          ₹<span id="price_standard2">{calculatedPrices.roundstandardAnnual.toFixed(2)}</span>
                                        </span>{' '}
                                        <span>for <span id="output2">{qty}</span> users</span> */}
                                      </div>
                                      <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                          <a href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">
                                            Get started
                                          </a>
                                        </div>
                                        <div className="align-left mt-30">
                                          <b>Everything in Lite, plus:</b>
                                          <ul className="dark-check-list">
                                            <li className="list-item">Single Site</li>
                                            <li className="list-item">Basic Inventory</li>
                                            <li className="list-item">Configurable Workflows</li>
                                            <li className="list-item">250 GB File Storage</li>
                                            <li className="list-item">Audit Trails</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Premium Plan */}
                                  <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table pricing-table--popular" style={{ visibility: 'visible' }}>
                                    <div className="pricing-table__inner green-bg" style={{ background: '#E5F4F2' }}>
                                      <div className="pricing-table__feature-mark">
                                        <span>Popular</span>
                                      </div>
                                      <div className="pricing-table__header">
                                        <h6 className="sub-title">Premium</h6>
                                        <b className="sub-para">For mid-sized and large teams</b>
                                        <br />
                                        {/* <span className="price">
                                          ₹<span id="singleuser_premium2">{calculatedPrices.premiumMonthly.toFixed(2)}</span>
                                        </span>
                                        <br />
                                        <span>per user / month</span>
                                        <br />
                                        <span className="total-price">
                                          ₹<span id="price_premium2">{calculatedPrices.roundpremiumAnnual.toFixed(2)}</span>
                                        </span>{' '}
                                        <span>for <span id="output3">{qty}</span> users</span> */}
                                      </div>
                                      <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                          <a href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">
                                            Get started
                                          </a>
                                        </div>
                                        <div className="align-left mt-30">
                                          <b>Everything in Standard, plus:</b>
                                          <ul className="dark-check-list">
                                            <li className="list-item">Multi-Site</li>
                                            <li className="list-item">Advanced Inventory</li>
                                            <li className="list-item">Instrument Integration</li>
                                            <li className="list-item">1 TB Storage</li>
                                            <li className="list-item">SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Enterprise Plan */}
                                  <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: 'visible' }}>
                                    <div className="pricing-table__inner blue-bg" style={{ background: '#E5F3FF' }}>
                                      <div style={{ marginBottom: '40px' }}></div>
                                      <div className="pricing-table__header">
                                        <h6 className="sub-title">Enterprise</h6>
                                        <b className="sub-para enterprise_p_tag" style={{padding:"15px"}}>For large teams with &gt; 200 users</b>
                                      </div>
                                      <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                          <a href="/contact-us" className="ht-btn ht-btn-md">
                                            Contact us
                                          </a>
                                        </div>
                                        <div className="align-left mt-30">
                                          <b>Everything in Premium, plus:</b>
                                          <ul className="dark-check-list">
                                            <li className="list-item">Multi-Site</li>
                                            <li className="list-item">Multiple Environments/Domains</li>
                                            <li className="list-item">Your Choice of Data Residency</li>
                                            <li className="list-item">Storage On Request</li>
                                            <li className="list-item">24/7 Enterprise Support</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                              </div>
                          </div>
                        </div> }
                        {activeTab === 'academic-tab' && <div className={`tab-pane ${activeTab === 'academic-tab' ? "active show" : ""} `} id="academic-tab" role="tabpanel">
                          <div className="toggle-container">
                            <div className="pricing-options">
                              <span id="monthly2" className={isMonthly ? 'active' : ''}>Monthly</span>
                            </div>
                            <label className="switch">
                              <input 
                                type="checkbox" 
                                id="toggleSwitch2" 
                                checked={!isMonthly} 
                                onChange={togglePricing} 
                              />
                              <span className="slider round"></span>
                            </label>
                            <div className="pricing-options">
                              <span id="yearly2" className={!isMonthly ? 'active' : ''}>Yearly</span>
                            </div>
                          </div>
                      <div className="pricing-details">
                      <div id="monthlyPricing2" className={`pricing-plan ${isMonthly ? 'active' : ''}`}>
                        {/* Monthly pricing details */}
                        <div className="pricing-table-content-area">
                          <div className="container">
                            <div className="row pricing-table-one">
                              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                                <div className="pricing-table__inner free-bg"  style={{ background: '#FFE7DB' }}>
                                  <div style={{ marginBottom: '40px' }}></div>
                                  <div className="pricing-table__header">
                                    <h6 className="sub-title">ELN Lite</h6>
                                    <b className="sub-para">Perfect for getting familiar with ELN</b><br />
                                    {/* <span className="price">₹<span id="singleuser_lite_a">{calculatedPrices.academiclite}</span></span><br />
                                    <span>per user / month</span><br /> */}
                                  </div>
                                  <div className="pricing-table__body">
                                    <div className="pricing-table__footer">
                                      <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md">Try for free</Link>
                                    </div>
                                    <div className="align-left mt-30">
                                      <b>Free for 90 days:</b>
                                      <ul className="dark-check-list">
                                        <li className="list-item">Beginner-friendly User Interface</li>
                                        <li className="list-item">Invite up to 10 Users</li>
                                        <li className="list-item">SSO (Google and Microsoft)</li>
                                        <li className="list-item">Experiment Templates</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                                <div className="pricing-table__inner perpul-bg" style={{ background: '#D9DAFB' }}>
                                  <div className="badge badge-standard">Recommended</div>
                                  <div className="pricing-table__header">
                                    <h6 className="sub-title">Standard</h6>
                                    <b className="sub-para">Everything in Lite Plan plus:</b><br />
                                    {/* <span className="price">₹<span id="singleuser_standard_a">{calculatedPrices.academicstandard}</span></span><br />
                                    <span>per user / month</span><br /> */}
                                  </div>
                                  <div className="pricing-table__body">
                                    <div className="pricing-table__footer text-center">
                                      <Link href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">Get started</Link>
                                    </div>
                                    <div className="align-left mt-30">
                                      <b>Everything in Lite, plus:</b>
                                      <ul className="dark-check-list">
                                        <li className="list-item">Single Site</li>
                                        <li className="list-item">Basic Inventory</li>
                                        <li className="list-item">Configurable Workflows</li>
                                        <li className="list-item">250 GB File Storage</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular">
                                <div className="pricing-table__inner green-bg" style={{ background: '#E5F4F2' }}>
                                  <div className="pricing-table__feature-mark">
                                    <span>Popular</span>
                                  </div>
                                  <div className="pricing-table__header">
                                    <h6 className="sub-title">Premium</h6>
                                    <b className="sub-para">Perfect for mid-sized and large teams</b><br />
                                    {/* <span className="price">₹<span id="singleuser_premium_a">{calculatedPrices.academicpremium}</span></span><br />
                                    <span>per user / month</span><br /> */}
                                  </div>
                                  <div className="pricing-table__body">
                                    <div className="pricing-table__footer text-center">
                                      <Link href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">Get started</Link>
                                    </div>
                                    <div className="align-left mt-30">
                                      <b>Everything in Standard, plus:</b>
                                      <ul className="dark-check-list">
                                        <li className="list-item">Multi-Site</li>
                                        <li className="list-item">Advanced Inventory</li>
                                        <li className="list-item">Instrument Integration</li>
                                        <li className="list-item">1 TB Storage</li>
                                        <li className="list-item">SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="yearlyPricing2" className={`pricing-plan ${!isMonthly ? 'active' : ''}`}>
                        {/* Yearly pricing details */}
                        <div className="pricing-table-content-area">
                          <div className="container">
                            <div className="row pricing-table-one">
                              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                                <div className="pricing-table__inner free-bg" style={{ background: '#FFE7DB' }}>
                                  <div style={{ marginBottom: '40px' }}></div>
                                  <div className="pricing-table__header">
                                    <h6 className="sub-title">ELN Lite</h6>
                                    <b className="sub-para">Perfect for getting familiar with ELN</b><br />
                                    {/* <span className="price">₹<span id="singleuser_lite2_a">{calculatedPrices.yearlyLite}</span></span><br />
                                    <span>per user / month</span><br />
                                    <span className="total-price">₹<span id="price_lite2_a">{calculatedPrices.roundyearlyLite.toFixed(2)}</span></span> <span>for <span id="output4">{qty}</span> users</span> */}
                                  </div>
                                  <div className="pricing-table__body">
                                    <div className="pricing-table__footer">
                                      <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md">Try for free</Link>
                                    </div>
                                    <div className="align-left mt-30">
                                      <b>Free for 90 days:</b>
                                      <ul className="dark-check-list">
                                        <li className="list-item">Beginner-friendly User Interface</li>
                                        <li className="list-item">Invite up to 10 Users</li>
                                        <li className="list-item">SSO (Google and Microsoft)</li>
                                        <li className="list-item">Experiment Templates</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                                <div className="pricing-table__inner perpul-bg" style={{ background: '#D9DAFB' }}>
                                  <div className="badge badge-standard">Recommended</div>
                                  <div className="pricing-table__header">
                                    <h6 className="sub-title">Standard</h6>
                                    <b className="sub-para">Everything in Lite Plan plus:</b><br />
                                    {/* <span className="price">₹<span id="singleuser_standard2_a">{calculatedPrices.yearlyStandard}</span></span><br />
                                    <span>per user / month</span><br />
                                    <span className="total-price">₹<span id="price_standard2_a">{calculatedPrices.roundyearlyStandard.toFixed(2)}</span></span> <span>for <span id="output5">{qty}</span> users</span> */}
                                  </div>
                                  <div className="pricing-table__body">
                                    <div className="pricing-table__footer">
                                      <Link href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">Get started</Link>
                                    </div>
                                    <div className="align-left mt-30">
                                      <b>Everything in Lite, plus:</b>
                                      <ul className="dark-check-list">
                                        <li className="list-item">Single Site</li>
                                        <li className="list-item">Basic Inventory</li>
                                        <li className="list-item">Configurable Workflows</li>
                                        <li className="list-item">250 GB File Storage</li>
                                        <li className="list-item">Audit Trails</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular">
                                <div className="pricing-table__inner green-bg" style={{ background: '#E5F4F2' }}>
                                  <div className="pricing-table__feature-mark">
                                    <span>Popular</span>
                                  </div>
                                  <div className="pricing-table__header">
                                    <h6 className="sub-title">Premium</h6>
                                    <b className="sub-para">Perfect for mid-sized and large teams</b><br />
                                    {/* <span className="price">₹<span id="singleuser_premium2_a">{calculatedPrices.yearlyPremium}</span></span><br />
                                    <span>per user / month</span><br />
                                    <span className="total-price">₹<span id="price_premium2_a">{calculatedPrices.roundyearlyPremium.toFixed(2)}</span></span> <span>for <span id="output6">{qty}</span> users</span> */}
                                  </div>
                                  <div className="pricing-table__body">
                                    <div className="pricing-table__footer">
                                      <Link href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">Get started</Link>
                                    </div>
                                    <div className="align-left mt-30">
                                      <b>Everything in Standard, plus:</b>
                                      <ul className="dark-check-list">
                                        <li className="list-item">Multi-Site</li>
                                        <li className="list-item">Advanced Inventory</li>
                                        <li className="list-item">Instrument Integration</li>
                                        <li className="list-item">1 TB Storage</li>
                                        <li className="list-item">SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pricing-toggle" style={{visibility:"hidden"}}>
                        <button onClick={togglePricing}>
                          {isMonthly ? 'Switch to Yearly Pricing' : 'Switch to Monthly Pricing'}
                        </button>
                      </div>
                    </div>
                   </div> }
                    </div>
                    {/* <center>
                    <div className="hero-button">
        
                      <Link href="plan-table" className="btn btn--blue">See all the features and compare plans</Link>
                    
                  </div>
                    </center> */}
                </div>
            </div>
    </div>
  );
};

export default PriceCalculator;

function setCalculatedPrices(arg0: { lite: number; standard: number; premium: number; loss: number; liteMonthly: number; standardMonthly: number; premiumMonthly: number; liteAnnual: number; standardAnnual: number; premiumAnnual: number; roundliteAnnual: number; roundstandardAnnual: number; roundpremiumAnnual: number; academiclite: number; academicstandard: number; academicpremium: number; yearlyLite: number; yearlyStandard: number; yearlyPremium: number; roundyearlyLite: number; roundyearlyStandard: number; roundyearlyPremium: number; }) {
  throw new Error('Function not implemented.');
}
