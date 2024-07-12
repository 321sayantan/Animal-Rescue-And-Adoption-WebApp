import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsTestimonial = () => {
  const options = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w3l-clients py-5" id="testimonials">
      <div className="container pt-md-5 pt-4">
        <div className="row w3-testimonial-grids align-items-center">
          <div
            className="col-lg-6 w3-testimonial-content-top pr-lg-5"
            data-aos="fade-right"
          >
            <div className="position-relative mb-lg-4 mb-sm-2 mb-4">
              <h3 className="title-style">What our clients think about us</h3>
              <div className="title-paw-style">
                <i className="fas fa-paw" />
                <i className="fas fa-paw paw-2" />
                <i className="fas fa-paw paw-3" />
              </div>
            </div>
            <div className="testimonial-slider py-sm-2 mb-4">
              <Slider {...options}>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          I adopted my sweet Labrador, Max, through AdoPet, and
                          I couldn't be happier. The process was
                          straightforward, and the team was incredibly
                          supportive. Max has filled my home with love and
                          laughter. Thank you!
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/testi1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Rahul Sharma</h3>
                          <p className="indentity">Active User</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          After months of searching for the right companion, I
                          found Luna on your website. The adoption process was
                          efficient, and the staff was compassionate. Luna has
                          become my best friend, and I'm grateful to have her in
                          my life. Thank you, AdoPet!
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/testi2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Priya Reddy</h3>
                          <p className="indentity">Active User</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Adopting Rocky from your website was a wonderful
                          experience. The website was user-friendly, and the
                          adoption coordinators were helpful every step of the
                          way. Rocky has brought so much joy into our family.
                          Thank you, AdoPet, for matching us with our perfect
                          furry friend!
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/testi3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Sumit Roy</h3>
                          <p className="indentity">Active User</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          I decided to adopt a kitten from AdoPet, and I'm so
                          glad I did. The website provided detailed profiles and
                          photos, making it easy to find a pet that fit my
                          lifestyle. Kiki has settled in beautifully, and I
                          couldn't imagine life without her. Thank you, AdoPet.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/testi4.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Deepika Patel</h3>
                          <p className="indentity">Active User</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div
            className="col-lg-6 position-relative ps-lg-5 mt-lg-0 mt-5 pt-lg-0 pt-sm-4"
            data-aos="fade-left"
          >
            <img
              src="assets/images/about2.jpg"
              alt=""
              className="radius-image img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsTestimonial;
