


// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Image from "next/image";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Import local images
// import rudolph from "../../eln/public/assets/images/home/rudolphreserch.svg";
// import cpi from "../../eln/public/assets/images/home/cpi.svg";
// import godrej from "../../eln/public/assets/images/home/godrej.svg";
// import skan from "../../eln/public/assets/images/home/skan.svg";
// import mstack from "../../eln/public/assets/images/home/Mstack_eln.svg";
// import aarthi from "../../eln/public/assets/images/home/Aarthi_pharma_eln.svg";
// import sitec from "../../eln/public/assets/images/home/sitec_labs.svg"; 
// import Proteogenixx from "../../eln/public/assets/images/home/Proteogenixx.svg";
// import smtl from "../../eln/public/assets/images/home/smtl.svg";
// import dh from "../../eln/public/assets/images/home/dh.svg";  

// // Company list
// const companies = [
//   { name: "Rudolph Research", logo: rudolph },
//   { name: "CPI", logo: cpi },
//   { name: "Godrej", logo: godrej },
//   { name: "Skan", logo: skan },
//   { name: "MSTACK", logo: mstack },
//   { name: "Proteogenixx ", logo: Proteogenixx },
//   { name: "Aarthi Pharma", logo: aarthi },
//   { name: "Sitec Labs", logo: sitec },
//   { name: "smtl", logo: smtl },
//   { name: "MSTACK", logo: mstack },
//   { name: "dh", logo: dh },
// ];

// export default function TrustedBy() {
//   return (
//     <section className="bg-[#f8f9fa] py-12">
//       {/* Heading */}
//       <div className="customers-slider-section py-5 text-center mb-10">
//         <h2 className="wave-heading">
//           Trusted by Industry Leaders
//         </h2>
//         <p className="text-gray-500">
//           Our solutions are trusted by some of the most respected companies in the industry
//         </p>
//       {/* Slider */}
//       <div className="mx-auto">
//     <Swiper
//   modules={[Autoplay]}
//   spaceBetween={0}
//   slidesPerView={2}
//   loop={true}
//   autoplay={{
//     delay: 0, // no delay between transitions
//     disableOnInteraction: false,
//   }}
//   speed={6000} // slow smooth speed (in ms)
//   allowTouchMove={false} // prevent manual dragging if you want it fully auto
//   breakpoints={{
//     640: { slidesPerView: 3, spaceBetween: 40 },
//     768: { slidesPerView: 4, spaceBetween: 50 },
//     1024: { slidesPerView: 6, spaceBetween: 60 },
//       1280: { slidesPerView: 6, spaceBetween: 20 },
//   }}
// >
//   {companies.map((company, index) => (
//     <SwiperSlide key={index}>
//       <div className="d-flex justify-content-center align-items-center py-5  single-logo">
//         <Image
//           src={company.logo}
//           alt={company.name}
//           className="img-fluid"
//           style={{width:'200px',height:'50px'}}
//         />
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>

//       </div>

//       </div>


//     </section>
//   );
// }

"use client";

import Image from "next/image";

// Import local images
import rudolph from "../../eln/public/assets/images/home/rudolphreserch.svg";
import cpi from "../../eln/public/assets/images/home/cpi.svg";
import godrej from "../../eln/public/assets/images/home/godrej.svg";
import skan from "../../eln/public/assets/images/home/skan.svg";
import mstack from "../../eln/public/assets/images/home/Mstack_eln.svg";
import aarthi from "../../eln/public/assets/images/home/Aarthi_pharma_eln.svg";
import sitec from "../../eln/public/assets/images/home/sitec_labs.svg"; 
import Proteogenixx from "../../eln/public/assets/images/home/Proteogenixx.svg";
import smtl from "../../eln/public/assets/images/home/smtl.svg";
import dh from "../../eln/public/assets/images/home/dh.svg";  

const companies = [
  { name: "Rudolph Research", logo: rudolph },
  { name: "CPI", logo: cpi },
  { name: "Godrej", logo: godrej },
  { name: "Skan", logo: skan },
  { name: "MSTACK", logo: mstack },
  { name: "Proteogenixx", logo: Proteogenixx },
  { name: "Aarthi Pharma", logo: aarthi },
  { name: "Sitec Labs", logo: sitec },
  { name: "SMTL", logo: smtl },
  { name: "DH", logo: dh },
];

export default function TrustedBy() {
  return (
    <section className="bg-[#f8f9fa] py-12">
      <div className="customers-slider-section py-5 text-center mb-10">
        <h2 className="wave-heading">Trusted by Industry Leaders</h2>
        <p className="text-gray-500">
          Our solutions are trusted by some of the most respected companies in the industry
        </p>

<div className="overflow-hidden position-relative w-100">
  <div className="d-flex animate-marquee">
    {[...companies, ...companies].map((company, index) => (
      <div
        key={index}
        className={`px-3 py-4 ${
          company.name === "MSTACK" || company.name === "Proteogenixx"
            ? "special-spacing"
            : ""
        }`}
      >
        <Image
          src={company.logo}
          alt={company.name}
          className="img-fluid"
          style={{ width: "200px", height: "50px" }}
        />
      </div>
    ))}
  </div>
</div>
      </div>  
    </section>
  );
}
