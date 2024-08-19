import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";
import { toast } from "react-toastify";

const AboutBlock1 = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // const restrictRedirectHandler = () => {
  //   if (isAuthenticated) {
  //     navigate('../rescue');
  //   } else {
  //     toast.info("Please sign in to rescue");
  //     navigate("../login");
  //   }
  // };

  return (
    <>
      <section className="home-about-w3l py-5">
        <div className="container py-md-5 py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 pe-lg-5" data-aos="fade-up">
              <div className="position-relative">
                <h3 className="title-style mb-3">
                  {/* How we can help you properly */}
                  {/* <center> */}
                  Welcome to AdoPet
                  {/* </center> */}
                </h3>
                <div className="title-paw-style">
                  <i className="fas fa-paw" />
                  <i className="fas fa-paw paw-2" />
                  <i className="fas fa-paw paw-3" />
                </div>
              </div>
              <p className="text-para">
                Our mission is to bridge the gap between rescue shelters and
                compassionate individuals looking to adopt. With thousands of
                animals waiting for a second chance, we strive to make the
                adoption process seamless and accessible for everyone. By
                supporting adoption and rescue efforts.
                <br />{" "}
                <strong>
                  Join us in making a difference, one adoption at a time..
                </strong>
              </p>
              <div
                className="cta-btn d-flex gap-4 mt-sm-5 mt-4"
                data-aos="fade-right"
              >
                <Link to="adopt" className="btn btn-style ">
                  Adopt a pet
                </Link>
                <Link
                  to="rescue"
                  className="btn btn-style btn-outline-primary"
                  // onClick={restrictRedirectHandler}
                >
                  Rescue a stray
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5" data-aos="fade-up">
              <div className="row">
                <div className="col-6 grids-1" data-aos="fade-down">
                  <i className="fab fa-medrt color-1" />
                  <h4 className="title-head mt-2 mb-3">Rescue Assistance</h4>
                  <p>
                    Connect with local shelters and rescue organizations to help
                    animals in distress.
                  </p>
                </div>
                <div className="col-6 grids-1" data-aos="fade-down">
                  <i className="fas fa-medal color-3" />
                  <h4 className="title-head mt-2 mb-3">Volunteer service</h4>
                  <p>
                    Join our team of volunteers to support animal care, events,
                    and adoption drives.
                  </p>
                </div>
                <div className="col-6 grids-1 mt-5" data-aos="fade-down">
                  <i className="fas fa-bone color-2" />
                  <h4 className="title-head mt-2 mb-3">Pet Adoption</h4>
                  <p>
                    Browse through profiles of animals looking for their forever
                    homes and start the adoption process online.
                  </p>
                </div>
                <div className="col-6 grids-1 mt-5" data-aos="fade-down">
                  <i className="fas fa-paw color-4" />
                  <h4 className="title-head mt-2 mb-3">Training Support</h4>
                  <p>
                    Access resources and connect with experts to help train and
                    rehabilitate rescue animals.
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
