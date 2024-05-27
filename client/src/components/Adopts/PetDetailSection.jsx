const PetDetailSection = ({ postDetails }) => {
  return (
    <div className="row align-items-start">
      <div className="col-lg-5 py-md-4 py-2" data-aos="fade-right">
        <div className="position-relative pet-pic">
          <img src={postDetails.image} alt="" />
        </div>
      </div>
      <div className="col-lg-7 px-4 mt-5" data-aos="fade-left">
        <div className="row">
          <div className="col-6 mb-4 pet-specs">
            <div className="specs-container align-items-center color-bg-1">
              <p className="specs-text">Name </p>
              <span>{postDetails.name}</span>
            </div>
          </div>
          <div className="col-6 mb-4 pet-specs">
            <div className="specs-container align-items-center color-bg-2">
              <p className="specs-text">Category </p>
              <span>{postDetails.species}</span> {/* postDetails.category */}
            </div>
          </div>
          <div className="col-6 mb-4 pet-specs">
            <div className="specs-container align-items-center color-bg-3">
              <p className="specs-text">Breed </p>
              <span>{postDetails.family}</span> {/* postDetails.breed */}
            </div>
          </div>
          <div className="col-6 mb-4 pet-specs">
            <div className="specs-container align-items-center color-bg-4">
              <p className="specs-text">Height </p>
              <span>{postDetails.height_cm} cm</span>{" "}
              {/* to be conv to feet-inch */}
            </div>
          </div>
          <div className="col-6 mb-4 pet-specs">
            <div className="specs-container align-items-center color-bg-5">
              <p className="specs-text">Weight </p>
              <span>{postDetails.weight_kg} kg</span>{" "}
              {/* to be conv to pounds(lbs) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailSection;
