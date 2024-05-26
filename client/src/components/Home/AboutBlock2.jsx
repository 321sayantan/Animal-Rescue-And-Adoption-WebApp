import { Link } from "react-router-dom";

const AboutBlock2 = () => {
  return (
    <>
      <section className="w3l-homeblock1 py-5" id="about">
        <div className="container py-md-5 py-4">
          <div className="row align-items-center">
            <div
              className="col-lg-6 homeaboutblock order-lg-first order-last"
              data-aos="fade-right"
            >
              <div className="position-relative img-border">
                <img
                  src="assets/images/video.jpg"
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
                    title="sample-video"
                    src="https://player.vimeo.com/video/436935040"
                    allowFullScreen
                  />
                </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.{" "}
              </p>
              <div className="mt-4">
                <ul className="service-list">
                  <li className="service-link">
                    <Link to="about">
                      <i className="fas fa-check-circle" />
                      certified groomer
                    </Link>
                  </li>
                  <li className="service-link">
                    <Link to="about">
                      <i className="fas fa-check-circle" />
                      20 years of experience
                    </Link>
                  </li>
                  <li className="service-link">
                    <Link to="about">
                      <i className="fas fa-check-circle" />
                      Animal Lover
                    </Link>
                  </li>
                </ul>
              </div>
              <Link to="about" className="btn btn-style mt-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBlock2;
