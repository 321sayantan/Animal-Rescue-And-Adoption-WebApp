import { Link } from "react-router-dom";
import NoResult from "../UI/NoResult";

const RescueList = ({ posts }) => {
  return (
    <>
      {posts.length > 0 ? (
        <div className="container mt-2 mb-2 rescue-posts_list">
          <ul className="py-3 list-wrapper">
            {posts.map((post) => (
              <li
                key={post._id}
                className="d-flex align-items-center justify-content-between px-4 py-3 list-item"
                data-aos="fade-up"
              >
                <div className="d-flex content">
                  <div className="thumbnail-img">
                    <img src={post.images[0].image} alt="" />
                  </div>
                  <div className="mx-2 info">
                    <h3>{post.vet_category}</h3>
                    <div className="d-flex">
                      <strong className="pe-2">Health status:</strong>
                      {post.vet_health_status.map((item, i) => (
                        <span key={i} className="text-danger">
                          &nbsp;{item}
                          {", "}
                        </span>
                      ))}
                    </div>
                    <p>{post.address}</p>
                  </div>
                </div>
                <Link to={`../${post._id}`}>Details</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <NoResult />
      )}
    </>
  );
};

export default RescueList;
