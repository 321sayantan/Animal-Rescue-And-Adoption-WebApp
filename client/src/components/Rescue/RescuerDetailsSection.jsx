const RescuerDetailsSection = ({ postDetails }) => {
  return (
    <div className="row align-items-start">
      <div className="col-lg-6 px-4 mt-5" data-aos="fade-right">
        <div className="row">
          <div className="mb-4 owner-detail-item">
            <div className="owner-info align-items-center">
              <p className="owner-info-heading">Name </p>
              <span>{postDetails.rescuer_name}</span>
            </div>
          </div>
          <div className="mb-4 owner-detail-item">
            <div className="owner-info align-items-center">
              <p className="owner-info-heading">Contact </p>
              <span>{postDetails.rescuer_phone}</span>
            </div>
          </div>
          <div className="mb-4 owner-detail-item">
            <div className="owner-info align-items-center">
              <p className="owner-info-heading">Location </p>
              <span>{postDetails.address}</span>{" "}
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
            <em>By Rescuer</em>
          </cite>
        </blockquote>
      </div>
    </div>
  );
};

export default RescuerDetailsSection;
