import { Link } from "react-router-dom";

const RescueFilteredList = ({ posts }) => {
  return (
    <>
      {posts.length > 0 ? (
        <div className="container py-4 mt-4 filtered-posts_list">
          <h4>Related Searches</h4>
          <ul className="py-3 list-wrapper">
            {posts.map((post) => (
              <li
                key={post._id}
                className="d-flex align-items-center justify-content-between px-4 py-3 list-item"
                data-aos="fade-up"
              >
                <div className="info" id="filtered-info">
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
                <Link to={`${post._id}`}>More</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default RescueFilteredList;
