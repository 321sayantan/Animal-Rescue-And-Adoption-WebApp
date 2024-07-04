import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AnimatePresence } from "framer-motion";
import ProfileInfo from "./ProfileInfo";
import PostsFilteredList from "./PostsByQueryList";
import Modal from "./UI/Modal";
import Alert from "./UI/Alert";
import { AuthContext } from "../store/AuthContext";
import { toast } from "react-toastify";

const ProfilePageContent = ({ userData }) => {
  const [errors, setErrors] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const { jwt,logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onConfirm = async (token) => {
    try {
      const response = await toast.promise(
        fetch("http://localhost:5000/profile/deleteUser", {
          method: "DELETE",
          headers: {
            'authorization': `Bearer ${token}`,
          },
        }),
        {
          pending: "Processing...",
        }
      );
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setShowModal(null);
        logout()
        navigate("..");
        toast.success(result.msg);
        setErrors(null);
      } else {
        toast.error(result.errors[0]);
        setErrors(result.errors || {});
      }
    } catch (err) {
      console.err(err);
    }
    // console.log(token);
  };

  return (
    <>
      {errors && (
        <Alert className="alert-danger">
          <ul>
            {Object.values(errors[0]).map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}
      <section className="py-4 px-3 mt-5 mb-3 mx-4" id="user-profile">
        <Tabs defaultIndex={0} className="col-12 mt-5 pt-6 column container">
          <div className="row">
            <div
              className="col-md-4 d-flex justify-content-center"
              data-aos="fade-right"
            >
              <div
                className="profile-img"
                style={{
                  background: `url(${userData.user.image}) center center/cover`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <div className="col-md-8" data-aos="fade-left">
              <div className="profile-head">
                <h5 className="fw-bold fs-1">{userData.user.name}</h5>
                <h6>{userData.user.is_volunteer ? "Volunteer" : "User"}</h6>
                <p className="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p>
                <TabList className="nav nav-tabs">
                  <Tab className="nav-link" selectedClassName="active">
                    <strong>About</strong>
                  </Tab>
                  <Tab className="nav-link" selectedClassName="active">
                    <strong>Adopt Posts</strong>
                  </Tab>
                  <Tab className="nav-link" selectedClassName="active">
                    <strong>Rescue Posts</strong>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>
          <div className="row mb-5 pb-5">
            <div className="col-md-4" data-aos="fade-right">
              <div className="profile-work">
                <p>BIO</p>
                <span> ---- </span>
                {/* <Link>Website Link</Link>
                <br />
                <Link>Bootsnipp Profile</Link> */}
                <p>SKILLS</p>
                <span style={{ color: "var(--heading-color)" }}>
                  {userData.user.is_volunteer ? "Volunteer" : "User"}
                </span>
                <br />
              </div>
            </div>
            <div className="col-md-8" data-aos="fade-up">
              <div className="tab-content profile-tab" id="myTabContent">
                <TabPanel className="tab-pane show active" id="home">
                  <div data-aos="fade-up">
                    <ProfileInfo user={userData.user} />
                  </div>
                </TabPanel>
                <TabPanel className="tab-pane show active" id="posts">
                  <div style={{ marginTop: "-4.5rem" }}>
                    <PostsFilteredList
                      posts={userData.adopt}
                      headingText="Adopts"
                    />
                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
          <div className="row mt-4 px-4 py-1" data-aos="fade-up">
            <div className="d-flex align-items-right justify-content-end gap-2">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setShowModal(jwt)}
              >
                Delete Account
              </button>
              <Link to="edit" className="btn btn-style profile-edit-btn">
                Edit Profile
              </Link>
            </div>
          </div>
        </Tabs>
      </section>

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
                      Are you sure to delete your account?
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

export default ProfilePageContent;
