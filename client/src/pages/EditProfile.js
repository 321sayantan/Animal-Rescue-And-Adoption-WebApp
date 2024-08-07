import { useState, useContext, Suspense, useEffect } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Alert from "../components/UI/Alert";
import { toasterVariants } from "../utils/misc";
import { AuthContext } from "../store/AuthContext";
import EditProfileForm from "../components/EditProfileForm";
import ImageUploader from "../components/ImageUploader";
import MapPreLoader from "../components/UI/MapPreLoader";
import Modal from "../components/UI/Modal";
import { AnimatePresence } from "framer-motion";

function EditProfile() {
  const { userData } = useLoaderData();
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [newProfilePic, setNewProfilePic] = useState({});
  const [errors, setErrors] = useState();
  const { jwt } = useContext(AuthContext);

  const updateProfilePicHandler = async (imgData) => {
    try {
      // const response = await toast.promise(
        // fetch("http://localhost:5000/profile/updateProfilePic", {
          const response = await toast.promise(
            fetch("https://adopet-backend.onrender.com/profile/updateProfilePic", {
          method: "POST",
          body: JSON.stringify(imgData),
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${jwt}`,
          },
        }),
        {
          pending: "Updating...",
        }
      );
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        console.log(result);
        navigate("../profile");
        toast.success(result.message)
        setErrors(null);
      } else {
        toast.error(result.errors[0])
        setErrors(result.errors || {});
      }
    } catch (error) {
      console.error('Error Updating Image', error);
    }

    // console.log({
    //   msg: 'Image updated successfully',
    //   userImage: imgData
    // })
    setShow(prev => !prev)
  }

  const updateInfoHandler = async (userData) => {
    console.log(userData);
    try {
      // const response = await toast.promise(fetch("http://localhoost:5000/profile/edit", {
      const response = await toast.promise(
        fetch("https://adopet-backend.onrender.com/profile/edit", {
          method: "PATCH",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${jwt}`,
          },
        }),
        {
          pending: "Processing...",
        }
      );
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        console.log(result);
        navigate("../profile");
        toast.success(result.message, toasterVariants);
        setErrors(null);
      } else {
        toast.error(result.errors[0], toasterVariants);
        setErrors(result.errors || {});
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const toggleModal = (imgData) => {
    setNewProfilePic(imgData[0])
    setShow(prev => !prev)
  }
  const fallback = <MapPreLoader msg="Loading Info..." />;

  return (
    <>
      {/* inner banner */}
      <section className="inner-banner py-5">
        <div className="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
            <path fillOpacity={1}>
              <animate
                attributeName="d"
                dur="20000ms"
                repeatCount="indefinite"
                values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                         M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;"
              />
            </path>
          </svg>
        </div>
      </section>
      {/* //inner banner */}
      {/* signup section */}
      <section className="register-section py-5" id="signup">
        <div className="container py-md-5 py-4">
          <div className="position-relative mb-lg-5 mb-4">
            <h3 className="title-style mb-2 text-center">Edit Your Details</h3>
            <div className="title-paw-style">
              <i className="fas fa-paw" />
              <i className="fas fa-paw paw-2" />
              <i className="fas fa-paw paw-3" />
            </div>
          </div>
          <div className="row align-items-start">
            <div
              className="col-md-5 mt-5 d-flex justify-content-center position-relative"
              data-aos="fade-right"
            >
              <div className="profile-img edit-image">
                <Suspense>
                  <Await resolve={userData}>
                    {(userImage) => <img src={userImage.user.image} alt="" />}
                  </Await>
                </Suspense>
              </div>
              <div className="btn btn-style btn-secondary position-absolute image-edit-btn">
                <label htmlFor="profile-pic">
                  <i className="fas fa-pencil" />
                  <span>Change</span>
                </label>
                <ImageUploader
                  id="profile-pic"
                  onUploaded={toggleModal}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="col-md-7 mt-4 px-4" data-aos="fade-left">
              {errors && (
                <Alert className="alert-danger">
                  <ul>
                    {Object.values(errors[0]).map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </Alert>
              )}
              <Suspense fallback={fallback}>
                <Await resolve={userData}>
                  {(data) => (
                    <EditProfileForm
                      userData={data.user}
                      onSubmit={updateInfoHandler}
                    />
                  )}
                </Await>
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      {/* //edit profile section */}

      
      {/* profile pic priview dialog */}
      <AnimatePresence>
        {show &&
          <Modal className='confirm-profile-pic__dialog' onClose={() => setShow(prev => !prev)} title='Set as Profile pic?'>
            <div className="modal-body py-3 px-4 mt-2 mb-2">
              <div className="d-flex container mb-3">
                <div className="profile-pic__wrapper" style={{ border: '8px solid #ECD078' }}>
                  <img src={newProfilePic.image} alt="" />
                </div>
              </div>
              <div className="modal-footer d-flex flex-column" style={{ marginBottom: "-1rem", borderTop: 0 }}>
                <button
                  type="button"
                  className="btn btn-style"
                  onClick={() => updateProfilePicHandler(newProfilePic)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-ghost-secondary"
                  style={{
                    width: '100%'
                  }}
                  onClick={() => setShow(prev => !prev)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
        }
      </AnimatePresence>
    </>
  );
}

export default EditProfile;
