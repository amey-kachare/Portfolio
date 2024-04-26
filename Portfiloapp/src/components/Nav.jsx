import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// Define styled components for the navbar elements
const NavbarContainer = styled.nav`
  background-color: #191970;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

// const NavLinks = styled.ul`
//   display: flex;
//   list-style-type: none;
// `;

// const NavLink = styled.li`
//   margin-right: 1rem;
// `;

const Nav = () => {
  return (
    <NavbarContainer className=" rounded-md shadow-2xl">
      <Logo>My Portfolio</Logo>
      <div className=" flex mx-2 text-2xl">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-orange-700" : "text-white"
            } mx-8 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/project"}
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-orange-700" : "text-white"
            } mx-8 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={'/contact'}
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-orange-700" : "text-white"
            } mx-8 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Contact
        </NavLink>
      </div>
    </NavbarContainer>
  );
};

export default Nav;
