import React from "react";
import "./Navbar.css";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import Logo from "./Logo.JPG";
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 4,
    }}
  />
);
const Navbar = () => {
  return (
    <>
      <div className="aligned">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="logoText">
          <h1 className="headerLogoText">
            Tools & Resources for Behavior Change Programs
          </h1>
          <h2 className="subLogoText">IN STORMWATER & WATER QUALITY</h2>
        </div>
      </div>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activestyle>
            Home
          </NavLink>
          <NavLink to="/add-program" activestyle>
            Add Program
          </NavLink>
          <NavLink to="/search-programs" activestyle>
            Search Programs
          </NavLink>
          <NavLink to="/program-comparison" activestyle>
            Program Comparison
          </NavLink>
          <NavLink to="/evaluation-tools" activestyle>
            Evaluation Tools
          </NavLink>
          <NavLink to="/other-resources" activestyle>
            Other Resources
          </NavLink>
          <NavLink to="/about" activestyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
      <div className="underLine">
        {" "}
        <ColoredLine color="rgb(3, 125, 158)" />
      </div>
    </>
  );
};

export default Navbar;
