import React from "react";
import "./rightSidebar.css";
import { ArrowDownward, ArrowForward } from "@mui/icons-material";
import img from "../../assets/rightSidebarImg.png";
import logo from "../../assets/logo.png";

const RightSidebar = () => {
  return (
    <div className="rightSidebar">
      <div className="rightSidebar__top">
        <ul>
          <li>
            <p>Game on, says Zoom</p>
            <small>14th ago 25,559 readers</small>
          </li>
          <li>
            <p>It's raining jobs in Indian IT</p>
            <small>3d ago 29,317 readers</small>
          </li>
          <li>
            <p>Millennials new wealth-creation tools</p>
            <small>11th ago 17,368 readers</small>
          </li>
          <li>
            <p>Did remote work save introverts?</p>
            <small>14th ago</small>
          </li>
        </ul>
        <div className="rightSidebar__end">
          <small>Show more</small> <ArrowDownward />
        </div>
      </div>

      <div className="rightSidebar__middle">
        <ol>
          <li>
            <p>Creativity at Work. A short Course from</p>
            <small>Seth God in</small>
          </li>
          <li>
            <p>Customer Service Foundations</p>
            <small>Jelf Toister</small>
          </li>
          <li>
            <p>Creating Positive Conversations with Customers</p>
            <small>Myta Golden</small>
          </li>
        </ol>
        <div className="rightSidebar__end">
          <small>Show more on Liniked In Learning </small>
          <ArrowForward />
        </div>
      </div>
      <div className="rightSidebar__img">
        <img src={img} alt="" width={"425px"} />
      </div>

      <div className="rightSidebar__last">
        <div>
          <small>About Accessbility HelpCenter</small>
          <div>
            <small>
              <span>
                Privacy & Terms <ArrowDownward fontSize="15px" />
              </span>{" "}
              Ad Choices
            </small>
          </div>
          <div>
            <small>
              <span>
                Advertising Business Service <ArrowDownward fontSize="15px" />
              </span>
            </small>
          </div>
          <div>
            <small>Get the Linkedin app More</small>
          </div>
          <div className="rightSidebar__last_end">
            <img src={logo} alt="" width={"50px"} />
            <span style={{color: "gray"}}>LinkedIn Corporation &#169; 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
