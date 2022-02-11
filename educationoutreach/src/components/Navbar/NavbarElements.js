import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #fffb3ff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw-1000px) / 2);
  z-index: 12;
`;
export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-size: 18px;
  text-decoration: underline;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    postion: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25vw;
  text-size: 18px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
