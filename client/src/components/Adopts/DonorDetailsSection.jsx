const DonorDetailsSection = ({ postDetails }) => {
  return (
    <div className="row align-items-start">
      <div className="col-lg-6 px-4 mt-5" data-aos="fade-right">
        <div className="row">
          <div className="mb-4 owner-detail-item">
            <div className="owner-info align-items-center">
              <p className="owner-info-heading">Name </p>
              <span>John Doe</span> {/* postDetails.donor_name */}
            </div>
          </div>
          <div className="mb-4 owner-detail-item">
            <div className="owner-info align-items-center">
              <p className="owner-info-heading">Contact </p>
              <span>+191 26659192</span> {/* postDetails.phone */}
            </div>
          </div>
          <div className="mb-4 owner-detail-item">
            <div className="owner-info align-items-center">
              <p className="owner-info-heading">Location </p>
              <span>{postDetails.place_of_found}</span>{" "}
              {/* postDetails.location */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-5 owner-quotes" data-aos="fade-left">
        <blockquote>
          <p>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {postDetails.description}
          </p>
          <cite className="d-flex justify-content-end blockquote-footer">
            <em>By Owner</em>
          </cite>
        </blockquote>
      </div>
    </div>
  );
};

export default DonorDetailsSection;
