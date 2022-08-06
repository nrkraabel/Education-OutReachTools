import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #fffb3ff;
  height: 35px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw-1000px) / 2);
  width: 100%;
  z-index: 12;
`;
export const NavLink = styled(Link)`
  color: rgb(3, 125, 158);
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;

  &.active {
    color: lightblue;
  }
  &:hover {
    color: darkblue;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 950px) {
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
  margin-left: calc(50% - 478.4px);
  margin-bottom: 2px;
  text-size: 24px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
