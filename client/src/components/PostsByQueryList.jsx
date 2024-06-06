import { Link } from "react-router-dom";

const PostsFilteredList = ({ posts }) => {
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
                <div className="info">
                  <h3>
                    {post.vet_name} (<span>{post.vet_category}</span>)
                  </h3>
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

export default PostsFilteredList;
