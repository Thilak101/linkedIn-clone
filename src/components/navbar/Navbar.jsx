import React from "react";
import "./navbar.css";
import logo2 from "../../assets/logo2.png";
import {
  Search,
  Home,
  Diversity2,
  Work,
  Message,
  Notifications,
  ExitToApp,
  Apps,
  ArrowDownward,
  AdsClick,
} from "@mui/icons-material";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Navbar = ({ photoURL, id }) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo2} alt="logo" width={"50px"} />
        <div className="navbar__searchtag">
          <Search />
          <input type="search" placeholder="search" />
        </div>
      </div>
      <div className="navbar__content">
        <div className="navbar__icons">
          <div className="navbar__icon">
            <Home />
            <small>Home</small>
          </div>
          <div className="navbar__icon">
            <Diversity2 />
            <small>My Network</small>
          </div>
          <div className="navbar__icon">
            <Work />
            <small>Jobs</small>
          </div>
          <div className="navbar__icon">
            <Message />
            <small>Message</small>
          </div>
          <div className="navbar__icon">
            <Notifications />
            <small>Notifications</small>
          </div>
        </div>
        <hr />
        <div className="navbar__profile">
          <div
            className="navbar__photo navbar__end"
            onClick={() => signOut(auth)}
          >
            <img src={photoURL} alt="profile photo" />
            <small>
              {id}
              <ExitToApp fontSize="30px" />
            </small>
          </div>

          <div className="navbar__work navbar__end">
            <Apps />
            <small>
              Work <ArrowDownward />
            </small>
          </div>
          <div className="navabar__ads navbar__end">
            <AdsClick />
            <small>Advertise</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
