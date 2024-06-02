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
              <span>{postDetails.vet_name}</span>
            </div>
          </div>
          <div className="col-6 mb-4 pet-specs">
            <div className="specs-container align-items-center color-bg-2">
              <p className="specs-text">Category </p>
              <span>{postDetails.vet_category}</span>{" "}
              {/* postDetails.category */}
            </div>
          </div>
          <div className="col-6 mb-4 pet-specs">
            <div className="specs-container align-items-center color-bg-3">
              <p className="specs-text">Breed </p>
              <span>{postDetails.vet_breed}</span> {/* postDetails.breed */}
            </div>
          </div>
          <div className="col-6 mb-4 pet-specs">
            <div className="specs-container align-items-center color-bg-4">
              <p className="specs-text">Vaccinated </p>
              <span>{postDetails.is_vaccinated} cm</span>{" "}
              {/* to be conv to feet-inch */}
            </div>
          </div>
          <div className="col-6 mb-4 pet-specs">
            <div className="specs-container align-items-center color-bg-5">
              <p className="specs-text">Weight </p>
              {/* <span>{postDetails.weight_kg} kg</span>{" "} */}
              {/* to be conv to pounds(lbs) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailSection;
