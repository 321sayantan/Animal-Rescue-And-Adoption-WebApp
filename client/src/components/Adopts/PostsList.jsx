import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
  return (
    <div className="row text-center">
      {posts.map((post) => (
        <div
          className="py-4 col-md-4 col-6 post-cards"
          data-aos="fade-left"
          key={post.id}
        >
          <div className="posts-grids text-center">
            <img src={post.image} className="img-fluid" alt="" />
            <div className="pet-info">
              <div className="caption">
                <div className="short-descr text-center">
                  <h4>{post.name}</h4>
                  <h6>{post.family}</h6>
                  <hr />
                  <span>{post.place_of_found}</span>
                </div>
              </div>
            </div>
          </div>
          <Link
            to={`${post.id}`}
            className="btn btn-style btn-outline-primary details-btn"
          >
            See Details
          </Link>
        </div>
      ))}
      {/* <div className="py-4 col-md-4 col-6 post-cards" data-aos="fade-left">
        <div className="posts-grids text-center">
          <img src="assets/images/team1.jpg" className="img-fluid" alt="" />
          <div className="pet-info">
            <div className="caption">
              <div className="short-descr text-center">
                <h4>Bruce</h4>
                <h6>Dog</h6>
                <hr />
                <span>Chandannagar, Hooghly</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#0" className="btn btn-style btn-outline-primary details-btn">
          See Details
        </a>
      </div>
      <div className="py-4 col-md-4 col-6 post-cards" data-aos="fade-up">
        <div className="posts-grids text-center">
          <img src="assets/images/team3.jpg" className="img-fluid" alt="" />
          <div className="pet-info">
            <div className="caption">
              <div className="short-descr text-center">
                <h4>Jenny</h4>
                <h6>Dog</h6>
                <hr />
                <span>Bidhannagar, Kolkata</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#0" className="btn btn-style btn-outline-primary details-btn">
          See Details
        </a>
      </div>
      <div
        className="py-4 col-md-4 col-6 post-cards"
        data-aos="fade-down"
      >
        <div className="posts-grids text-center">
          <img src="assets/images/team2.jpg" className="img-fluid" alt="" />
          <div className="pet-info">
            <div className="caption">
              <div className="short-descr text-center">
                <h4>Minniva</h4>
                <h6>Cat</h6>
                <hr />
                <span>Bandel, Hooghly</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#0" className="btn btn-style btn-outline-primary details-btn">
          See Details
        </a>
      </div>
      <div
        className="py-4 col-md-4 col-6 post-cards"
        data-aos="fade-left"
      >
        <div className="posts-grids text-center">
          <img src="assets/images/team4.jpg" className="img-fluid" alt="" />
          <div className="pet-info">
            <div className="caption">
              <div className="short-descr text-center">
                <h4>Elly</h4>
                <h6>Owl</h6>
                <hr />
                <span>Noida, Delhi</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#0" className="btn btn-style btn-outline-primary details-btn">
          See Details
        </a>
      </div>
      <div className="py-4 col-md-4 col-6 post-cards" data-aos="fade-up">
        <div className="posts-grids text-center">
          <img src="assets/images/team3.jpg" className="img-fluid" alt="" />
          <div className="pet-info">
            <div className="caption">
              <div className="short-descr text-center">
                <h4>Poppy</h4>
                <h6>Rabbit</h6>
                <hr />
                <span>Chandannagar, Hooghly</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#0" className="btn btn-style btn-outline-primary details-btn">
          See Details
        </a>
      </div>
      <div
        className="py-4 col-md-4 col-6 post-cards"
        data-aos="fade-down"
      >
        <div className="posts-grids text-center">
          <img src="assets/images/team2.jpg" className="img-fluid" alt="" />
          <div className="pet-info">
            <div className="caption">
              <div className="short-descr text-center">
                <h4>Happpy</h4>
                <h6>Parrot</h6>
                <hr />
                <span>Chandannagar, Hooghly</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#0" className="btn btn-style btn-outline-primary details-btn">
          See Details
        </a>
      </div> */}
    </div>
  );
};

export default PostsList;
