import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <>
      <section className="w3l-bottom-grids-6 pb-5 pt-4" id="services">
        <div className="container pb-lg-5 pb-4">
          <div className="row justify-content-center" data-aos="fade-down">
            <div className="col-lg-4 col-md-6">
              <div className="area-box">
                <i className="fas fa-hand-holding-heart" />
                <h4>
                  <Link to="services" className="title-head">
                    Pet Care
                  </Link>
                </h4>
                <p>
                  Amus a ligula quam tesque et libero ut justo, ultrices in. Ut
                  eu leo non. Duis sed et dolor amet.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
              <div className="area-box">
                <i className="fas fa-paw" />
                <h4>
                  <Link to="services" className="title-head">
                    Dog Training
                  </Link>
                </h4>
                <p>
                  Amus a ligula quam tesque et libero ut justo, ultrices in. Ut
                  eu leo non. Duis sed dolor et amet.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
              <div className="area-box">
                <i className="fas fa-dog" />
                <h4>
                  <Link to="services" className="title-head">
                    Dog Vacation
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
    </>
  );
};

export default ServicesSection;
