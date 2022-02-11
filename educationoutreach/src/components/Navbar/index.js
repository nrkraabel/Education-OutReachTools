import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavLink to="/">
          <h1>Home</h1>
        </NavLink>
        <NavMenu>
          <NavLink to="/add-program" activeStyle>
            Add Program
          </NavLink>
          <NavLink to="/search-programs" activeStyle>
            Search Programs
          </NavLink>
          <NavLink to="/program-comparison" activeStyle>
            Program Comparison
          </NavLink>
          <NavLink to="/evaluation-tools" activeStyle>
            Evaluation Tools
          </NavLink>
          <NavLink to="/other-resources" activeStyle>
            Other Resources
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
