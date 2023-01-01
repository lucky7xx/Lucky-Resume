import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ContainerDiv, InnerDiv } from "../../Style/Stylings";

export const Projects = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "yellow" : "white",
    };
  };
  return (
    <ContainerDiv>
      <InnerDiv>
        <NavLink style={navLinkStyles} to={"/projects/layouts"}>
          Layouts
        </NavLink>
        <br />
        <NavLink style={navLinkStyles} to={"/projects/reactapps"}>
          React Apps
        </NavLink>
        <Outlet />
      </InnerDiv>
    </ContainerDiv>
  );
};
