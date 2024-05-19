import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AuthUserPopup from "./AuthUserPopup";

const Navbar = (props) => {
  const [isUserToggled, setIsUserToggled] = useState(false);

  // function showUserPopup() {}
  // function closeUserPopup() {}

  // <!-- theme switch js (light and dark)-->
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }
  // <!-- //theme switch js (light and dark)-->

  return (
    <>
      <header id="site-header" className="fixed-top" data-aos="fade-down">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link
              className="d-flex align-items-center navbar-brand smoothscroll"
              to=""
            >
              <div className="icon">
                <img src="assets/images/logo.png" alt="" />
              </div>
              Ado<span>Pet</span>
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <NavLink
                    aria-current="page"
                    to=""
                    className={`nav-link ${({ isActive }) =>
                      isActive ? "active" : undefined}`}
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${({ isActive }) =>
                      isActive ? "active" : undefined}`}
                    to="about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${({ isActive }) =>
                      isActive ? "active" : undefined}`}
                    to="services"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${({ isActive }) =>
                      isActive ? "active" : undefined}`}
                    to="contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form
                action="#error"
                method="GET"
                className="d-flex search-header"
              >
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter Keyword..."
                  aria-label="Search"
                  required
                />
                <button className="btn btn-style" type="submit">
                  Search
                </button>
              </form>

              <div className="togglers d-flex align-items-center">
                {/* user badge */}
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="auth-user"
                  onClick={() => setIsUserToggled(true)}
                >
                  <button
                    type="button"
                    className="profile-icon d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-user"></i>
                  </button>
                </motion.div>
                {/* //user badge */}
                {/* toggle switch for light and dark theme */}
                <div className="cont-ser-position">
                  <nav className="navigation">
                    <div className="theme-switch-wrapper">
                      <label className="theme-switch" htmlFor="checkbox">
                        <input
                          type="checkbox"
                          id="checkbox"
                          onChange={switchTheme}
                        />
                        <div className="mode-container d-flex justify-content-center align-items-center">
                          <i className="gg-sun" />
                          <i className="gg-moon" />
                        </div>
                      </label>
                    </div>
                  </nav>
                </div>
                {/* //toggle switch for light and dark theme */}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isUserToggled && (
          <AuthUserPopup onClose={() => setIsUserToggled(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
