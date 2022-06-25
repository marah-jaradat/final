import React from "react";

// import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">New way to check your WebSite</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        You have new project, or new WebSitem and want to check the requests and
        responses of it. Or you are not sure if that URL is really exist for
        that site, and you have to make sure it is working probably. with new
        experience, our web application provides that and more{" "}
      </p>
      <button type="button" className="custom__button">
        Check your webSite
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.logo} alt="header_img" />
    </div>
  </div>
);

export default Header;
