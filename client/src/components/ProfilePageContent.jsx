import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProfileInfo from "./ProfileInfo";
import UsersPosts from "./UsersPosts";
import PostsFilteredList from "./PostsByQueryList";
import { adoptPosts } from "../utils/misc";

const ProfilePageContent = ({ userData }) => {
  return (
    <section className="py-4 px-3 mt-5 mb-3 mx-4" id="user-profile">
      <Tabs defaultIndex={0} className="col-12 mt-5 pt-6 column container">
        <div className="row">
          <div
            className="col-md-4 d-flex justify-content-center"
            data-aos="fade-right"
          >
            <div className="profile-img">
              <img src={userData.user.image} alt="" />
            </div>
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
                  <strong>My Posts</strong>
                </Tab>
              </TabList>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" data-aos="fade-right">
            <div className="profile-work">
              <p>WORK LINK</p>
              <Link>Website Link</Link>
              <br />
              <Link>Bootsnipp Profile</Link>
              <br />
              <Link>Bootply Profile</Link>
              <p>SKILLS</p>
              <Link>Web Designer</Link>
              <br />
              <Link>Web Developer</Link>
              <br />
              <Link>WordPress</Link>
              <br />
              <Link>WooCommerce</Link>
              <br />
              <Link>PHP, .Net</Link>
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
                {/* <UsersPosts /> */}
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
            <button type="button" className="btn btn-ghost">
              Delete Account
            </button>
            <Link to="edit" className="btn btn-style profile-edit-btn">
              Edit Profile
            </Link>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default ProfilePageContent;
