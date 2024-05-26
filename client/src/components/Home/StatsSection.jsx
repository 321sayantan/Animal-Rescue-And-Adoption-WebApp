import CountUp, { useCountUp } from "react-countup";

const StatsSection = () => {
  useCountUp({
    ref: "count-number",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });

  return (
    <>
      <section className="homeblock-stats py-5" id="stats">
        <div className="container py-md-5 py-4">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="position-relative">
                <h3 className="title-style mb-2">
                  Our activities &amp; experience
                </h3>
                <div className="title-paw-style">
                  <i className="fas fa-paw" />
                  <i className="fas fa-paw paw-2" />
                  <i className="fas fa-paw paw-3" />
                </div>
              </div>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="row mt-4 pt-2">
                <div className="col-6">
                  <div className="counter color-bg-1">
                    <div className="count-title d-flex align-items-center">
                      <CountUp
                        start={0}
                        end={630}
                        enableScrollSpy
                        scrollSpyOnce
                      >
                        <div className="count-number" />
                      </CountUp>
                      <span className="ms-2">+</span>
                    </div>
                    <p className="count-text">Happy Clients</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="counter color-bg-2">
                    <div className="count-title d-flex align-items-center">
                      <CountUp start={0} end={80} enableScrollSpy scrollSpyOnce>
                        <div className="count-number" />
                      </CountUp>
                      <span className="ms-2">+</span>
                    </div>
                    <p className="count-text">Professionals</p>
                  </div>
                </div>
                <div className="col-6 mt-4">
                  <div className="counter color-bg-3">
                    <div className="count-title d-flex align-items-center">
                      <CountUp
                        start={0}
                        end={820}
                        enableScrollSpy
                        scrollSpyOnce
                      >
                        <div className="count-number" />
                      </CountUp>
                      <span className="ms-2">+</span>
                    </div>
                    <p className="count-text">Adopted Pets</p>
                  </div>
                </div>
                <div className="col-6 mt-4">
                  <div className="counter color-bg-4">
                    <div className="count-title d-flex align-items-center">
                      <CountUp start={0} end={90} enableScrollSpy scrollSpyOnce>
                        <div className="count-number" />
                      </CountUp>
                      <span className="ms-2">+</span>
                    </div>
                    <p className="count-text">Awards</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6 offset-xl-1 ps-xl-0 mt-lg-0 mt-5"
              data-aos="fade-left"
            >
              <img
                src="assets/images/about1.jpg"
                className="img-fluid radius-image"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
