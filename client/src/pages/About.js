import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      {/* inner banner */}
      <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5" data-aos="fade-up">
          <div className="container pt-4 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">
              About Us
            </h4>
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="..">Home</Link>
              </li>
              <li className="active">
                <i className="fas fa-angle-right mx-2" />
                About
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
      {/* aboutblock1 section */}
      <section className="w3l-homeblock1 py-5" id="about">
        <div className="container py-md-5 py-4">
          <div className="row align-items-center">
            <div
              className="col-lg-6 pe-lg-5 mb-lg-0 mb-5"
              data-aos="fade-right"
            >
              <div className="position-relative">
                <h3 className="title-style mb-3">Who we are and what we do</h3>
                <div className="title-paw-style">
                  <i className="fas fa-paw" />
                  <i className="fas fa-paw paw-2" />
                  <i className="fas fa-paw paw-3" />
                </div>
              </div>
              <p>
                We are dedicated to strengthening our community by promoting
                responsible pet ownership and encouraging adoption over buying.
                Together, we are building a brighter future for both animals and
                people, fostering a community that values and protects all
                living beings. Our efforts focus on rescuing stray and abandoned
                animals, ensuring they find safe and loving homes.{" "}
              </p>
              <div className="mt-4">
                <ul className="service-list">
                  <li className="service-link">
                    <a href="#url">
                      <i className="fas fa-check-circle" />
                      Animal Adoption
                    </a>
                  </li>
                  <li className="service-link">
                    <a href="#url">
                      <i className="fas fa-check-circle" />
                      Animal Rescue
                    </a>
                  </li>
                  <li className="service-link">
                    <a href="#url">
                      <i className="fas fa-check-circle" />
                      Volunteer Support
                    </a>
                  </li>
                </ul>
              </div>
              <Link to="../about" className="btn btn-style mt-4">
                Learn More
              </Link>
            </div>
            <div className="col-lg-6 homeaboutblock" data-aos="fade-left">
              <div className="position-relative img-border">
                <img
                  src="assets/images/about3.jpg"
                  className="img-fluid video-popup-image radius-image"
                  alt=""
                />
                <a
                  href="#small-dialog"
                  className="popup-with-zoom-anim play-view text-center position-absolute"
                >
                  <span className="video-play-icon">
                    <span className="fa fa-play" />
                  </span>
                </a>
                {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                  <iframe
                    src="https://player.vimeo.com/video/436935040"
                    title="sample-video"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //aboutblock1 section */}
      {/* about section */}
      <section className="home-about-w3l py-5">
        <div className="container pb-md-5 pb-4" data-aos="fade-down">
          <div className="row">
            <div className="col-md-3 col-6 grids-1">
              <i className="fab fa-medrt color-1" />
              <h4 className="title-head mt-2 mb-3">Rescue Assistance</h4>
              <p>
                Connect with local shelters and rescue organizations to help
                animals in distress.
              </p>
            </div>
            <div className="col-md-3 col-6 grids-1">
              <i className="fas fa-medal color-3" />
              <h4 className="title-head mt-2 mb-3">Volunteer service</h4>
              <p>
                Join our team of volunteers to support animal care, events, and
                adoption drives.
              </p>
            </div>
            <div className="col-md-3 col-6 grids-1 mt-md-0 mt-5">
              <i className="fas fa-bone color-2" />
              <h4 className="title-head mt-2 mb-3">Pet Adoption</h4>
              <p>
                Browse through profiles of animals looking for their forever
                homes and start the adoption process online.
              </p>
            </div>
            <div className="col-md-3 col-6 grids-1 mt-md-0 mt-5">
              <i className="fas fa-paw color-4" />
              <h4 className="title-head mt-2 mb-3">Training Support</h4>
              <p>
                Access resources and connect with experts to help train and
                rehabilitate rescue animals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* about section */}
      {/* faq section */}
      <div className="w3l-faq-block py-5" id="faq">
        <div className="container py-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-lg-0 mb-5" data-aos="fade-up">
              <img
                src="assets/images/about4.jpg"
                className="img-fluid radius-image"
                alt=""
              />
            </div>
            <div className="col-lg-7 ps-lg-5" data-aos="fade-down">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      01. Why pet is a part of our life?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Pets are our loyal companions, offering unconditional love
                      and emotional support. They enrich our lives by reducing
                      stress, promoting physical activity, and fostering a sense
                      of responsibility. From playful puppies to wise old dogs,
                      they bring joy and companionship to our homes.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      02. How we take care about our pet?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Caring for a pet is a commitment. Provide a safe, clean
                      environment with fresh water and nutritious food. Regular
                      exercise is vital for their physical and mental
                      well-being. Routine vet check-ups prevent health issues.
                      Shower them with love and attention, and never forget they
                      rely on you for their happiness and safety.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      03. Which pet you choose and why?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Choosing a pet depends on lifestyle, living situation, and
                      personality. Dogs offer unmatched loyalty and
                      companionship, but require significant time and attention.
                      Cats are independent yet affectionate, suitable for busier
                      lifestyles. For those with limited space, small animals
                      like hamsters or guinea pigs can be low-maintenance
                      companions. Birds are intelligent and interactive, but
                      demand specific care. Ultimately, the best pet is one that
                      complements your life and provides mutual joy.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingfour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapsefour"
                    >
                      04. Why pet is a part of our life?
                    </button>
                  </h2>
                  <div
                    id="collapsefour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingfour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Pets are more than just animals; they're cherished members
                      of our families. Their unconditional love provides
                      emotional support and reduces stress. They encourage an
                      active lifestyle, promoting physical and mental
                      well-being. Pets teach us empathy, responsibility, and
                      patience. Their playful antics bring joy and laughter into
                      our lives. Whether it's a loyal dog, a cuddly cat, or a
                      quirky bird, pets enrich our lives in countless ways.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //faq section */}
      {/* team */}
      <section className="w3l-team py-5" id="team">
        <div className="container py-md-5 py-4">
          <div className="position-relative">
            <h3 className="title-style text-center mb-sm-5 mb-4">
              Meet our Awesome Team
            </h3>
            <div className="title-paw-style">
              <i className="fas fa-paw" />
              <i className="fas fa-paw paw-2" />
              <i className="fas fa-paw paw-3" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-3 col-6" data-aos="fade-right">
              <div className="team-grids text-center">
                <img
                  src="assets/images/sneho.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="twitter" href="#url">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h4>Snehodipta Das</h4>
              <h6>Front-End Engineer</h6>
            </div>
            <div className="col-md-3 col-6" data-aos="fade-up">
              <div className="team-grids text-center">
                <img
                  src="assets/images/sayantan.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="twitter" href="#url">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h4>Sayantan Das</h4>
              <h6>Back-End Engineer</h6>
            </div>
            <div
              className="col-md-3 col-6 mt-md-0 mt-sm-5 mt-5"
              data-aos="fade-down"
            >
              <div className="team-grids text-center">
                <img
                  src="assets/images/dipankar.jpeg"
                  className="img-fluid"
                  alt=""
                />
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="twitter" href="#url">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h4> Dipankar Mondal</h4>
              <h6>Front-End Engineer</h6>
            </div>
            {/* <div className="col-md-3 col-6 mt-md-0 mt-sm-5 mt-5" data-aos="fade-left">
              <div className="team-grids text-center">
                <img src="assets/images/team4.jpg" className="img-fluid" alt="" />
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="twitter" href="#url">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h4>Elizabeth </h4>
              <h6>Pet Trainer</h6>
            </div> */}
          </div>
        </div>
      </section>
      {/* team */}
    </>
  );
}

export default About;
