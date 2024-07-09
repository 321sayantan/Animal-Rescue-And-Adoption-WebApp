import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../store/AuthContext";

const AuthUserPopup = ({ children, onClose, className }) => {
  const [userData, setUserData] = useState({});
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const menuClasses = className
    ? "auth-user-menu " + className
    : "auth-user-menu";

  const popupVariant = {
    hidden: {
      opacity: 0,
      clipPath: "circle(0% at 100% 0)",
      transition: {
        type: "spring",
        stiffness: 200,
        bounce: 1,
        duration: 0.8,
      },
    },
    visible: {
      opacity: 1,
      clipPath: "circle(52% at 114% 16%)",
      transition: {
        type: "spring",
        stiffness: 200,
        bounce: 1,
        duration: 0.8,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      x: -56,
      transition: { type: "spring", stiffness: 500, damping: 24 },
    },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const variants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.1,
      },
    },
    closed: { opacity: 0, scale: 0 },
  };

  async function logoutHandler() {
    authCtx.logout();
    onClose();
    navigate("..");
  }

  const getuser = async (jwt) => {
    try {
      // const response = await fetch("http://localhost:5000/profile/getuser", {
      const response = await fetch(
        "https://adopet-backend.onrender.com/profile/getuser",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${jwt}`,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data || "Failed to fetch User details!");
      }
      // console.log(data);
      setUserData(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authCtx.jwt) {
      getuser(authCtx.jwt);
    }
  }, [authCtx.jwt]);

  return createPortal(
    <>
      <div className="menu-backdrop" onClick={onClose}></div>
      <motion.dialog
        variants={popupVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className={menuClasses}
      >
        <div className="user-prof-container flex-column">
          <i className="fa-solid fa-xmark" onClick={onClose} />
          <motion.div
            variants={variants}
            className="inner-container d-flex flex-column"
          >
            <motion.div className="user-thumbnail d-flex" variants={item}>
              {!authCtx.isAuthenticated ? (
                <>
                  <div className="thumbnail-icon d-flex justify-content-center align-items-center">
                    <img src="assets/images/user-not-found.png" alt="" />
                  </div>
                  <p>
                    <strong>User Not Found!</strong>
                  </p>
                </>
              ) : (
                <>
                  <div
                    className="thumbnail-icon authenticated d-flex justify-content-center align-items-center"
                    style={{
                      background: `url(${userData.image}) center center/cover`,
                      // backgroundRepeat: "no-repeat",
                    }}
                  />
                  <p>
                    Hi,{" "}
                    <strong className="text-uppercase text-warning">
                      {userData?.name || "...."}
                    </strong>
                  </p>
                </>
              )}
            </motion.div>
            <motion.div
              variants={item}
              className="redirect-grp d-flex flex-column"
            >
              {!authCtx.isAuthenticated ? (
                <>
                  <Link
                    to="login"
                    className="btn btn-style btn-outline-primary"
                    onClick={onClose}
                  >
                    Login
                  </Link>
                  <div className="seperator">
                    <hr />
                    <span id="or-text">Or</span>
                  </div>
                  <Link to="signup" className="btn btn-style" onClick={onClose}>
                    Signup
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="profile"
                    className="btn btn-style btn-outline-primary"
                    onClick={onClose}
                  >
                    View Profile
                  </Link>
                  <div className="seperator">
                    <hr />
                    <span id="or-text">Or</span>
                  </div>
                  <button className="btn btn-style" onClick={logoutHandler}>
                    Logout
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.dialog>
    </>,
    document.getElementById("overlays")
  );
};

export default AuthUserPopup;
