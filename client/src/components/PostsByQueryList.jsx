import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./UI/Modal";
import NoResult from "./UI/NoResult";

const PostsFilteredList = ({ posts, headingText }) => {
  const [showModal, setShowModal] = useState(null);

  const onConfirm = (id) => {
    console.log(id);
    setShowModal(null);
  };

  return (
    <>
      {posts.length > 0 ? (
        <div className="container py-4 mt-4 filtered-posts_list">
          <h4>{headingText}</h4>
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
                <button id="del-btn" onClick={() => setShowModal(post._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <NoResult />
      )}

      <AnimatePresence>
        {showModal && (
          <Modal
            title="Fatal !"
            className="deletePost-confirm-modal"
            onClose={() => setShowModal(null)}
          >
            <div className="modal-body py-3 px-4 mt-2 mb-2">
              <div className="row d-flex py-2">
                <div className="column">
                  <h5 className="d-flex align-items-center">
                    <i
                      className="fa-solid fa-circle-exclamation"
                      style={{
                        color: "#ff6a00",
                        fontSize: "2.2rem",
                        marginRight: "1rem",
                      }}
                    ></i>
                    <span style={{ fontWeight: "700" }}>
                      Are you sure to delete the note?
                    </span>
                  </h5>
                  <p style={{ margin: "0 auto 0 3.2rem" }}>
                    This action can't be undone!
                  </p>
                </div>
              </div>
              <div className="modal-footer" style={{ marginBottom: "-1rem" }}>
                <button
                  type="button"
                  className="btn btn-style"
                  style={{
                    padding: "0.6rem 1.5rem",
                    borderRadius: "var(--border-radius)",
                  }}
                  onClick={() => onConfirm(showModal)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setShowModal(null)}
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default PostsFilteredList;
