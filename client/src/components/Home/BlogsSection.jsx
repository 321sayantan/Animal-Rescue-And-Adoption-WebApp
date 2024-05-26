import React from "react";

const BlogsSection = () => {
  return (
    <>
      <div className="w3l-grids-block-5 blog-bg-sec py-5" id="blog">
        <div className="container py-md-5 py-4">
          <div className="position-relative mb-lg-5 mb-4">
            <h3 className="title-style mb-2 text-center">Latest Blog Post</h3>
            <div className="title-paw-style">
              <i className="fas fa-paw" />
              <i className="fas fa-paw paw-2" />
              <i className="fas fa-paw paw-3" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 grids5-info"
              data-aos="fade-right"
            >
              <a href="#blog">
                <img
                  src="assets/images/blog1.jpg"
                  alt=""
                  className="img-fluid radius-image"
                />
              </a>
              <div className="blog-info-grid">
                <h5>
                  <span className="fa fa-clock-o" /> Aug 1, 2021
                </h5>
                <h4>
                  <a href="#blog">
                    Domestic animals can save you from loneliness
                  </a>
                </h4>
                <div className="blog-info mt-3">
                  <a href="#read">
                    Read More <span className="fa fa-arrow-right ms-1" />
                  </a>
                  <a href="#comments">
                    <span className="fa fa-comment-o" /> 3 comments
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 grids5-info mt-md-0 mt-5"
              data-aos="fade-up"
            >
              <a href="#blog">
                <img
                  src="assets/images/blog2.jpg"
                  alt=""
                  className="img-fluid radius-image"
                />
              </a>
              <div className="blog-info-grid">
                <h5>
                  <span className="fa fa-clock-o" /> Aug 2, 2021
                </h5>
                <h4>
                  <a href="#blog">How to bond with your new rescue pet? </a>
                </h4>
                <div className="blog-info mt-3">
                  <a href="#read">
                    Read More <span className="fa fa-arrow-right ms-1" />
                  </a>
                  <a href="#comments">
                    <span className="fa fa-comment-o" /> 3 comments
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 grids5-info mt-lg-0 mt-5"
              data-aos="fade-left"
            >
              <a href="#blog">
                <img
                  src="assets/images/blog3.jpg"
                  alt=""
                  className="img-fluid radius-image"
                />
              </a>
              <div className="blog-info-grid">
                <h5>
                  <span className="fa fa-clock-o" /> Aug 3, 2021
                </h5>
                <h4>
                  <a href="#blog">
                    What happens if a dog doesn&apos;t get adopted?{" "}
                  </a>
                </h4>
                <div className="blog-info mt-3">
                  <a href="#read">
                    Read More <span className="fa fa-arrow-right ms-1" />
                  </a>
                  <a href="#comments">
                    <span className="fa fa-comment-o" /> 3 comments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsSection;
