import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#API-Checker">API-Checker</a>
        </li>

        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#Auth" className="p__opensans">
          Log In / Register
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div
            className="app__navbar-smallscreen_overlay
            flex__center
            slide-bottom"
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a href="#API-Checker" onClick={() => setToggleMenu(false)}>
                  API-Checker
                </a>
              </li>
              <li className="p__opensans">
                <a href="#WorkSpace" onClick={() => setToggleMenu(false)}>
                  Work Space
                </a>
              </li>
              <li className="p__opensans">
                <a href="#Contact" onClick={() => setToggleMenu(false)}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
