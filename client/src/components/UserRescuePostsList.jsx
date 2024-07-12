import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./UI/Modal";
import NoResult from "./UI/NoResult";

const UserRescuePostsList = ({
  posts,
  headingText,
  onDelRescuePost,
  onChangePostStatus,
}) => {
  const [showModal, setShowModal] = useState(null);
  const [showModal2, setShowModal2] = useState(null);

  const onConfirm = (id) => {
    onDelRescuePost(id);
    setShowModal(null);
  };

  const onStatusChangeConfirm = (id) => {
    onChangePostStatus(id);
    setShowModal2(null);
  };

  return (
    <>
      {posts.length > 0 ? (
        <div className="container mt-2 mb-2 rescue-posts_list">
          <h4>{headingText}</h4>
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
                <div
                  className="d-flex flex-column align-items-end"
                  style={{ minWidth: "150px" }}
                >
                  {!post.rescued && (
                    <button
                      id="mark-as-rescued-btn"
                      onClick={() => setShowModal2(post._id)}
                    >
                      Mark as Rescued
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
                    Remove this post from pending to be Rescued?
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

export default UserRescuePostsList;
