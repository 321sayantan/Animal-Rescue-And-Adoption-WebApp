import React from 'react'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      {/* inner banner */}
      <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5" data-aos="fade-up">
          <div className="container pt-4 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">
              Services
            </h4>
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="..">Home</Link>
              </li>
              <li className="active">
                <i className="fas fa-angle-right mx-2" />
                Services
              </li>
            </ul>
          </div>
        </div>
        <div className="shape">
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
      </section>
      {/* //inner banner */}
      {/* services section */}
      <section className="w3l-services py-5">
        <div className="container py-md-5 py-4">
          <div className="position-relative">
            <h3 className="title-style text-center mb-sm-5 mb-4">
              Why choose us
            </h3>
            <div className="title-paw-style">
              <i className="fas fa-paw" />
              <i className="fas fa-paw paw-2" />
              <i className="fas fa-paw paw-3" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 grids-feature" data-aos="fade-up">
              <div className="area-box">
                <i className="fas fa-shopping-bag color-1" />
                <h4>
                  <Link to="../about" className="title-head">
                    Pet Nutritionist
                  </Link>
                </h4>
                <p>
                  Amus a ligula quam tesque et libero ut justo, ultrices in. Ut
                  eu leo non. Duis sed et dolor amet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5"
              data-aos="fade-up"
            >
              <div className="area-box">
                <i className="fas fa-bone color-2" />
                <h4>
                  <Link to="../about" className="title-head">
                    Quality &amp; Safety
                  </Link>
                </h4>
                <p>
                  Amus a ligula quam tesque et libero ut justo, ultrices in. Ut
                  eu leo non. Duis sed dolor et amet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-5"
              data-aos="fade-up"
            >
              <div className="area-box">
                <i className="fas fa-stethoscope color-3" />
                <h4>
                  <Link to="../about" className="title-head">
                    Health &amp; Well-being
                  </Link>
                </h4>
                <p>
                  Amus a ligula quam tesque et libero ut justo, ultrices in. Ut
                  eu leo non. Duis sed dolor et amet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 grids-feature mt-5"
              data-aos="fade-up"
            >
              <div className="area-box">
                <i className="fas fa-shopping-bag color-4" />
                <h4>
                  <Link to="../about" className="title-head">
                    ocean fish meal
                  </Link>
                </h4>
                <p>
                  Amus a ligula quam tesque et libero ut justo, ultrices in. Ut
                  eu leo non. Duis sed et dolor amet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 grids-feature mt-5"
              data-aos="fade-up"
            >
              <div className="area-box">
                <i className="fas fa-paw color-1" />
                <h4>
                  <Link to="../about" className="title-head">
                    Pet Foods
                  </Link>
                </h4>
                <p>
                  Amus a ligula quam tesque et libero ut justo, ultrices in. Ut
                  eu leo non. Duis sed dolor et amet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 grids-feature mt-5"
              data-aos="fade-up"
            >
              <div className="area-box">
                <i className="fas fa-dog color-2" />
                <h4>
                  <Link to="../about" className="title-head">
                    Dog Training
                  </Link>
                </h4>
                <p>
                  Amus a ligula quam tesque et libero ut justo, ultrices in. Ut
                  eu leo non. Duis sed dolor et amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //services section */}
      {/* aboutblock1 section */}
      <section className="w3l-homeblock1 blog-bg-sec py-5" id="about">
        <div className="container py-md-5 py-4">
          <div className="row align-items-center">
            <div
              className="col-lg-6 homeaboutblock order-lg-first order-last"
              data-aos="fade-right"
            >
              <div className="position-relative img-border">
                <img
                  src="assets/images/about5.jpg"
                  className="img-fluid video-popup-image radius-image"
                  alt="video-popup"
                />
              </div>
            </div>
            <div
              className="col-lg-6 ps-lg-5 mb-lg-0 mb-5 order-lg-last order-first"
              data-aos="fade-left"
            >
              <div className="position-relative">
                <h3 className="title-style mb-3">
                  We will make them truly happy
                </h3>
                <div className="title-paw-style">
                  <i className="fas fa-paw" />
                  <i className="fas fa-paw paw-2" />
                  <i className="fas fa-paw paw-3" />
                </div>
              </div>
              <p>
                Ensure that every pet is placed in a home where they are
                genuinely loved, cared for, and treated as a family member.{" "}
              </p>
              <div className="mt-4">
                <ul className="service-list">
                  <li className="service-link">
                    <a href="#url">
                      <i className="fas fa-check-circle" />
                      certified groomer
                    </a>
                  </li>
                  <li className="service-link">
                    <a href="#url">
                      <i className="fas fa-check-circle" />
                      20 years of experience
                    </a>
                  </li>
                  <li className="service-link">
                    <a href="#url">
                      <i className="fas fa-check-circle" />
                      Animal Lover
                    </a>
                  </li>
                </ul>
              </div>
              <Link
                to="../about"
                className="btn btn-style mt-4"
                data-aos="fade-up"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* //aboutblock1 section */}
      {/* pricing section */}
      <section className="w3l-pricing pt-5">
        <div className="container py-md-5 py-4">
          <div className="position-relative">
            <h3 className="title-style text-center mb-sm-5 mb-4">
              The Best Pricing Plans
            </h3>
            <div className="title-paw-style">
              <i className="fas fa-paw" />
              <i className="fas fa-paw paw-2" />
              <i className="fas fa-paw paw-3" />
            </div>
          </div>
          <div className="row t-in justify-content-center">
            <div
              className="col-lg-4 col-md-6 price-main-info"
              data-aos="fade-right"
            >
              <div className="price-inner card box-shadow">
                <div className="card-body">
                  <h4 className="text-uppercase text-center mb-3">
                    Regular Session
                  </h4>
                  <h5 className="card-title pricing-card-title">Free</h5>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      {" "}
                      <span className="fa fa-check" /> Pet Shower
                    </li>
                    <li>
                      {" "}
                      <span className="fa fa-check" /> Pet Grooming
                    </li>
                    <li className="disable">
                      {" "}
                      <span className="fa fa-check" /> Hair &amp; Nail Cut
                    </li>
                    <li className="disable">
                      {" "}
                      <span className="fa fa-check" /> Brush &amp; Blow Dry
                    </li>
                    <li className="disable">
                      {" "}
                      <span className="fa fa-check" /> Pet Park &amp; Games
                    </li>
                  </ul>
                  <div className="read-more mt-4 pt-lg-2 text-center">
                    <Link to="../contact" className="btn btn-style">
                      {" "}
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 price-main-info mt-md-0 mt-4"
              data-aos="fade-up"
            >
              <div className="price-inner card box-shadow active">
                <div className="card-body">
                  <h4 className="text-uppercase text-center mb-3">
                    Exclusive Session
                  </h4>
                  <h5 className="card-title pricing-card-title">
                    <span className="align-top">$</span>59
                  </h5>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      {" "}
                      <span className="fa fa-check" /> Pet Shower
                    </li>
                    <li>
                      {" "}
                      <span className="fa fa-check" /> Pet Grooming
                    </li>
                    <li>
                      {" "}
                      <span className="fa fa-check" /> Hair &amp; Nail Cut
                    </li>
                    <li className="disable">
                      {" "}
                      <span className="fa fa-check" /> Brush &amp; Blow Dry
                    </li>
                    <li className="disable">
                      {" "}
                      <span className="fa fa-check" /> Pet Park &amp; Games
                    </li>
                  </ul>
                  <div className="read-more mt-4 pt-lg-2 text-center">
                    <Link to="../contact" className="btn btn-style">
                      {" "}
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 price-main-info mt-lg-0 mt-4"
              data-aos="fade-left"
            >
              <div className="price-inner card box-shadow">
                <div className="card-body">
                  <h4 className="text-uppercase text-center mb-3">
                    Premium Session
                  </h4>
                  <h5 className="card-title pricing-card-title">
                    <span className="align-top">$</span>99
                  </h5>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      {" "}
                      <span className="fa fa-check" /> Pet Shower
                    </li>
                    <li>
                      {" "}
                      <span className="fa fa-check" /> Pet Grooming
                    </li>
                    <li>
                      {" "}
                      <span className="fa fa-check" /> Hair &amp; Nail Cut
                    </li>
                    <li>
                      {" "}
                      <span className="fa fa-check" /> Brush &amp; Blow Dry
                    </li>
                    <li>
                      {" "}
                      <span className="fa fa-check" /> Pet Park &amp; Games
                    </li>
                  </ul>
                  <div className="read-more mt-4 pt-lg-2 text-center">
                    <Link to="../contact" className="btn btn-style">
                      {" "}
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //pricing section */}
    </>
  );
}

export default Services;
