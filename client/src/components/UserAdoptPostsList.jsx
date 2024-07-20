import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./UI/Modal";
import NoResult from "./UI/NoResult";

const UserAdoptPostsList = ({
  posts,
  headingText,
  onDelAdoptPost,
  onChangePostStatus,
}) => {
  const [showModal, setShowModal] = useState(null);
  const [showModal2, setShowModal2] = useState(null);

  const onConfirm = (id) => {
    onDelAdoptPost(id);
    setShowModal(null);
  };

  const onStatusChangeConfirm = (id) => {
    onChangePostStatus(id);
    setShowModal2(null);
  };

  return (
    <>
      {posts.length > 0 ? (
        <div className="container py-4 mt-4 filtered-posts_list">
          <ul className="py-3 list-wrapper">
            {posts.map((post) => (
              <li
                key={post._id}
                className="d-flex align-items-center justify-content-between px-4 py-3 list-item"
                data-aos="fade-up"
              >
                <div className="info">
                  <h3>
                    {post.vet_breed} (<span>{post.vet_category}</span>)
                  </h3>
                  <p>{post.address}</p>
                </div>
                <div
                  className="d-flex flex-column align-items-end"
                  style={{ minWidth: "150px" }}
                >
                  {!post.adopted && (
                    <button
                      id="mark-as-adopted-btn"
                      onClick={() => setShowModal2(post._id)}
                    >
                      Mark as Adopted
                    </button>
                  )}
                  <button id="del-btn" onClick={() => setShowModal(post._id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <NoResult message="No posts found..! :(" />
      )}

      {/* delete post modal */}
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
                      Are you sure to delete the post?
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

      {/* status change modal */}
      <AnimatePresence>
        {showModal2 && (
          <Modal
            title="Confirm ?"
            className="statusChange-confirm-modal"
            onClose={() => setShowModal2(null)}
          >
            <div className="modal-body py-3 px-4 mt-2 mb-2">
              <div className="row d-flex py-2">
                <div className="column">
                  <h5 className="d-flex align-items-center">
                    <i
                      className="fa-solid fa-circle-question"
                      style={{
                        color: "#4cb4d4",
                        fontSize: "2.2rem",
                        marginRight: "1rem",
                      }}
                    ></i>
                    <span style={{ fontWeight: "700" }}>
                      Mark as Unavailable
                    </span>
                  </h5>
                  <p style={{ margin: "0 auto 0 3.2rem" }}>
                    Remove this post from available for adoption?
                  </p>
                </div>
              </div>
              <div className="modal-footer" style={{ marginBottom: "-1rem" }}>
                <button
                  type="button"
                  className="btn btn-style btn-secondary"
                  style={{
                    padding: "0.6rem 1.5rem",
                    borderRadius: "var(--border-radius)",
                  }}
                  onClick={() => onStatusChangeConfirm(showModal2)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-ghost-secondary"
                  onClick={() => setShowModal2(null)}
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

export default UserAdoptPostsList;
