import { rescue_works as images } from "../../utils/misc";
import Marquee from "react-fast-marquee";

const RescWorksSection = () => {
  return (
    <div className="rescue-works_bg-sec py-5" id="rescue-works">
      <div className="py-md-5 py-4">
        <div
          className="container position-relative mb-lg-5 mb-4"
          data-aos="fade-up"
        >
          <h3 className="title-style mb-2 text-center">
            Some rescue works by our volunteers
          </h3>
          <div className="title-paw-style">
            <i className="fas fa-paw" />
            <i className="fas fa-paw paw-2" />
            <i className="fas fa-paw paw-3" />
          </div>
        </div>
        <div className="row justify-content-center marquee-outer_wrapper">
          <div className="d-flex align-items-center" style={{ padding: 0 }}>
            <Marquee autoFill pauseOnHover className="marquee-container">
              {images.map((image, i) => (
                <div key={i} className="container position-relative">
                  <div>
                    <img src={image.src} alt="" className="radius-image" />
                    <h5 className="d-flex align-items-center meta-date">
                      <span className="fa fa-clock-o" /> {image.date_captured}
                    </h5>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescWorksSection;
