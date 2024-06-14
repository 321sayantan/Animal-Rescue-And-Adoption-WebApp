import Slider from "react-slick";
// import { rescue_works as images } from "../../utils/misc";

const RescuedVetDetailsSection = ({ postDetails }) => {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-12 py-md-4 py-2" data-aos="fade-up">
        <div
          className="position-relative container"
          style={{ height: "27rem", width: "40rem" }}
        >
          <Slider {...settings}>
            {postDetails.images.map((item) => (
              <div
                className="position-relative d-flex justify-content-center vet-images"
                key={item.image_id}
              >
                <img src={item.image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="row align-items-start mt-5">
        <div className="col-lg-7 px-4" data-aos="fade-right">
          <div className="column border-right-warning hide-border">
            <div className="col-6 mb-4 pet-specs">
              <div className="specs-container align-items-center color-bg-1">
                <p className="specs-text">Category </p>
                <span>{postDetails.vet_category}</span>{" "}
              </div>
            </div>
            <div className="col-6 mb-4 pet-specs" id="rescued-vet-specs">
              <div className="specs-container align-items-center color-bg-4">
                <p className="specs-text">Gender </p>
                <span>
                  {postDetails.vet_gender === "Male" && (
                    <i className="fas fa-mars" />
                  )}
                  {postDetails.vet_gender === "Female" && (
                    <i className="fas fa-venus" />
                  )}
                  {postDetails.vet_gender === "Unknown" && (
                    <i className="fas fa-question" />
                  )}
                  {postDetails.vet_gender}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 px-md-4 mt-md-4" data-aos="fade-left">
          <h4 className="health-status_header">Health Status:</h4>
          <ul className="py-3 px-4">
            {postDetails.vet_health_status.map((list, i) => (
              <li className="status-list" key={i}>
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RescuedVetDetailsSection;
