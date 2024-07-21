// import { useEffect } from 'react';
// import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

import ClientsTestimonial from "../components/Home/ClientsTestimonial";
import AboutBlock1 from "../components/Home/AboutBlock1";
import AboutBlock2 from "../components/Home/AboutBlock2";
import FAQSection from "../components/Home/FAQSection";
import ServicesSection from "../components/Home/ServicesSection";
import StatsSection from "../components/Home/StatsSection";
import BlogsSection from "../components/Home/BlogsSection";

const output_strings = [
  "make a needy stray your bestfriend..",
  "adopt a pet..",
  "rescue a stray animal..",
  "train your pets..",
  "provide them the best healthcare..",
];

function Home() {
  return (
    <>
      {/* hero slider Start */}
      <div className="banner-wrap">
        <div className="banner-slider">
          {/* hero slide start */}
          <div className="banner-slide bg1">
            <div className="container">
              <div className="hero-content" data-aos="fade-up">
                <p className="mb-2">Pets Love </p>
                <h1>Provide your pets the best possible care!</h1>
                <h5>
                  And
                  <ReactTyped
                    strings={output_strings}
                    typeSpeed={100}
                    backSpeed={20}
                    smartBackspace="false"
                    loop
                  >
                    <strong className="typed-text-output"> </strong>
                  </ReactTyped>
                </h5>
              </div>
            </div>
            <div className="hero-overlay" />
          </div>
          {/* hero slide end */}
        </div>
        <div className="shape" data-aos="fade-up">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
            <path fillOpacity={1}>
              <animate
                attributeName="d"
                dur="20000ms"
                repeatCount="indefinite"
                values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                           M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;"
              />
            </path>
          </svg>
        </div>
      </div>
      {/* hero slider end */}

      {/* about section */}
      <AboutBlock1 />

      {/* about section */}
      {/* aboutblock1 section */}
      <AboutBlock2 />

      {/* //aboutblock1 section */}
      {/* faq section */}
      <FAQSection />

      {/* //faq section */}
      {/* services section */}
      <ServicesSection />

      {/* //services section */}
      {/* stats section */}
      <StatsSection />

      {/* //stats section */}
      {/* blog section */}
      <BlogsSection />

      {/* //blog section */}
      {/* testimonials */}
      <ClientsTestimonial />

      {/* //testimonials */}
    </>
  );
}

export default Home;
