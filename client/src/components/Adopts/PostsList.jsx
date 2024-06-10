import { Link } from "react-router-dom";
import NoResult from "../UI/NoResult";

const PostsList = ({ posts }) => {
  return (
    <>
      {posts.length > 0 ? (
        <div className="row text-center">
          {posts.map((post) => (
            <div
              className="py-4 col-md-4 col-6 post-cards"
              data-aos="fade-left"
              key={post._id}
            >
              <div className="posts-grids text-center">
                <img src={post.image} className="img-fluid" alt="" />
                <div className="pet-info">
                  <div className="caption">
                    <div className="short-descr text-center">
                      <h4>{post.vet_name}</h4>
                      <h6>{post.vet_breed}</h6>
                      <hr />
                      <span>{post.address.split(",")[3]}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to={`${post._id}`}
                className="btn btn-style btn-outline-primary details-btn"
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <NoResult />
      )}
    </>
  );
};

export default PostsList;
