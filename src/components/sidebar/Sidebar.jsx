import React from "react";
import "./sidebar.css";
import coverpic from "../../assets/cover.jpg";
import profile from "../../assets/profile.jpg";
import icon from "../../assets/moneyIcon.png";
import icon2 from "../../assets/tagIcon.png";
import birdLogo from "../../assets/bird.png";
import techeegy from "../../assets/techeegy.png";
import techieey from "../../assets/techieey.png";
import { LocalLibrary, Tag, Add, ArrowDropDown } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__contianer1">
        <div className="sidebar__coverpicAndprofile">
          <div className="sidebar__coverpic">
            <img src={coverpic} alt="cover pic" className="cover__photo" />
          </div>
          <div className="sidebar__profile">
            <img
              src={profile}
              alt="profile"
              className="profile__photo"
              width={"100px"}
            />
          </div>
          <div className="sidebar__username">
            <h2>User Name</h2>
            <h4>Product Specialist at TechieeGY</h4>
          </div>
        </div>

        <div className="sidebar__section">
          <div className="sidebar__section_content">
            <p>Who viewed your profile</p>
            <span>225</span>
          </div>

          <div className="sidebar__section_content">
            <p>Views of your post</p>
            <span>538</span>
          </div>
        </div>

        <div className="sidebar__section2">
          <p className="sidebar__section2_p1">Access exclusive tool & inside</p>
          <p className="sidebar__section2_p2">
            <img src={icon} alt="money" />
            <p>Try Premium Free for 1 Month</p>
          </p>
        </div>
        <div className="sidebar__section3">
          <img src={icon2} alt="" width={"25px"} />
          <span>My items</span>
        </div>
      </div>

      <div className="sidebar__container2">
        <div className="sidebar__container2_top">
          <h3 className="sidebar__container2_header">My Page(3)</h3>
          <div className="sidebar__container2_content">
            <img src={techeegy} alt="logo" />
            <h3>TechieeGY</h3>
          </div>

          <small>Page notifications</small>
        </div>
        <div className="sidebar__container2_center">
          <div className="sidebar__container2_content">
            <img src={birdLogo} alt="" />
            <h3>AR Projects LTD</h3>
          </div>
          <div>
            <small>Page notifications</small>
          </div>
        </div>
        <div className="sidebar__container2_end">
          <div className="sidebar__container2_content">
            <img src={techieey} alt="" />
            <h3>The Find talk</h3>
          </div>
          <small>Page notifications</small>
        </div>
      </div>

      <div className="container3">
        Recent
        <div className="container3__list">
          <ul>
            <li>
              <LocalLibrary /> <h4>Level Up Your Career By Learinig</h4>
            </li>
            <li>
              <Tag  /> <p style={{marginLeft: "10px"}}>arprojectsltd</p>
            </li>
            <li>
              <Tag  /> <p style={{marginLeft: "10px"}}>arprojectseducation</p>
            </li>
            <li>
              <Tag  />
              <p style={{marginLeft: "10px"}}>arprojects</p>
            </li>
            <li>
              <Tag  />
              <p style={{marginLeft: "10px"}}>machinelearning</p>
            </li>
          </ul>
          <div className="container3__group">
            <p>Groups</p>
            <div className="container3__events">
              <p>Events</p>
              <Add style={{color: "gray"}} />
            </div>
            <p>Followed Hashtags</p>
          </div>
          <div className="container3__group2">
            <ul>
              <li>
                <Tag  />
                <p style={{marginLeft: "10px"}}>arprojectsltd</p>
              </li>
              <li>
                <Tag  />
                <p style={{marginLeft: "10px"}}>arprojectseducation</p>
              </li>
              <li>
                <Tag  />
                <p style={{marginLeft: "10px"}}>arprojects</p>
              </li>
            </ul>
            <div className="container3__section1">
              <small>Show more </small>
              <ArrowDropDown />
            </div>
          </div>
        </div>
        <div className="container3__end">
        <p className="sidebar__end_portion">Discover more</p>
      </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
