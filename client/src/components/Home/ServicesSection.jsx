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
                  Pet care is a responsibility. Provide nutritious food, clean
                  water, and regular exercise. Ensure regular vet check-ups for
                  their health and happiness.
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
                  Dog training builds a strong bond. Positive reinforcement and
                  patience are key. Consistency and practice lead to a
                  well-behaved companion.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
              <div className="area-box">
                <i className="fas fa-dog" />
                <h4>
                  <Link to="services" className="title-head">
                    Dog vaccinations
                  </Link>
                </h4>
                <p>
                  Dog vaccinations are essential for their health. They protect
                  against deadly diseases like parvovirus and
                  rabies. It safeguard's your dog's health.
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
