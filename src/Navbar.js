import React from "react";
import "./Navbar.css";
import "./Hamburger.css";
import { pushRotate as Menu } from "react-burger-menu";
import ContactLinks from "./components/ContactLinks";
import logoImage from "./images/dog.jpg";

function Navbar(props) {
  const scroll = (element) => {
    console.log(element);
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* <Menu className="#hamburger-menu" right width={300} noOverlay>
        <a
          className="menu-item"
          onClick={() => {
            scroll(props.home);
          }}
        >
          Home
        </a>
        <a
          className="menu-item"
          onClick={() => {
            scroll(props.projects);
          }}
        >
          Projects & Interships
        </a>
        <a
          className="menu-item"
          onClick={() => {
            scroll(props.skills);
          }}
        >
          Skills
        </a>
        <a
          className="menu-item"
          onClick={() => {
            scroll(props.aboutMe);
          }}
        >
          About me
        </a>
        <ContactLinks />
      </Menu> */}
      <div className="navbar-container">
        <label className="name-logo">
          <img src={logoImage} height={50} width={50} alt=""></img>
          <div>
            <b>SAMUEL</b>
            <br></br>MALTAIS
          </div>
        </label>

        <div className="navbar-links">
          <a
            onClick={() => {
              scroll(props.home);
            }}
          >
            Home
          </a>
          <a
            onClick={() => {
              scroll(props.projects);
            }}
          >
            Projects & Interships
          </a>
          <a
            onClick={() => {
              scroll(props.skills);
            }}
          >
            Skills
          </a>
          <a
            onClick={() => {
              scroll(props.aboutMe);
            }}
          >
            About me
          </a>
        </div>

        <ContactLinks />
      </div>
    </>
  );
}

export default Navbar;
