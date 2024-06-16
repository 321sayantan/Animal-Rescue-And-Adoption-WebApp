import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";

const AboutBlock1 = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <section className="home-about-w3l py-5">
        <div className="container py-md-5 py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 pe-lg-5" data-aos="fade-up">
              <div className="position-relative">
                <h3 className="title-style mb-3">
                  How we can help you properly
                </h3>
                <div className="title-paw-style">
                  <i className="fas fa-paw" />
                  <i className="fas fa-paw paw-2" />
                  <i className="fas fa-paw paw-3" />
                </div>
              </div>
              <p className="text-para">
                Aurabitur id gravida risus. Fusce eget ex fermentum, ultricies
                nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis
                eros et, sed commodo risus. Nullam sit amet laoreet elit.
                Suspendisse non init magnaa velit efficitur, dolor eget ex
                fermentum.
              </p>
              <div
                className="cta-btn d-flex gap-4 mt-sm-5 mt-4"
                data-aos="fade-right"
              >
                <Link to="adopt" className="btn btn-style ">
                  Adopt a pet
                </Link>
                {isAuthenticated && (
                  <Link
                    to="rescue"
                    className="btn btn-style btn-outline-primary"
                  >
                    Rescue a stray
                  </Link>
                )}
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5" data-aos="fade-up">
              <div className="row">
                <div className="col-6 grids-1" data-aos="fade-down">
                  <i className="fab fa-medrt color-1" />
                  <h4 className="title-head mt-2 mb-3">Full diagnostics</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    oluptatem.
                  </p>
                </div>
                <div className="col-6 grids-1" data-aos="fade-down">
                  <i className="fas fa-medal color-3" />
                  <h4 className="title-head mt-2 mb-3">Awarded service</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    oluptatem.
                  </p>
                </div>
                <div className="col-6 grids-1 mt-5" data-aos="fade-down">
                  <i className="fas fa-bone color-2" />
                  <h4 className="title-head mt-2 mb-3">Dog Breeding</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    oluptatem.
                  </p>
                </div>
                <div className="col-6 grids-1 mt-5" data-aos="fade-down">
                  <i className="fas fa-paw color-4" />
                  <h4 className="title-head mt-2 mb-3">Dog Training</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    oluptatem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBlock1;
