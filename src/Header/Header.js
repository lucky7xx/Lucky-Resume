import React from "react";
import Person4Icon from "@mui/icons-material/Person4";
import { NavLink } from "react-router-dom";
import { School } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";
import { HomeDiv, IconWrapperDiv, NavBar } from "../Style/Stylings";
import AnimatedRoutes from "./AnimatedRoutes";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "yellow" : "white",
    };
  };

  return (
    <>
      <div>
        <NavBar>
          <NavLink to="/" style={navLinkStyles}>
            <IconWrapperDiv>
              <HomeIcon
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",
                  fontSize: "inherit",
                  color: "inherit",
                }}
              />
            </IconWrapperDiv>
          </NavLink>

          <NavLink to="/about" style={navLinkStyles}>
            <IconWrapperDiv>
              {" "}
              <Person4Icon
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",
                  fontSize: "inherit",
                  color: "inherit",
                }}
              />
            </IconWrapperDiv>
          </NavLink>

          <NavLink to="/schooling" style={navLinkStyles}>
            <IconWrapperDiv>
              <School
                color="secondary"
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",
                  fontSize: "inherit",
                  color: "inherit",
                }}
              />
            </IconWrapperDiv>
          </NavLink>

          <NavLink to="/info" style={navLinkStyles}>
            <IconWrapperDiv>
              {" "}
              <LanguageIcon
                color="secondary"
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",
                  fontSize: "inherit",
                  color: "inherit",
                }}
              />
            </IconWrapperDiv>
          </NavLink>

          <NavLink to="/skills" style={navLinkStyles}>
            <IconWrapperDiv>
              {" "}
              <CodeIcon
                color="secondary"
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",
                  fontSize: "inherit",
                  color: "inherit",
                }}
              />{" "}
            </IconWrapperDiv>
          </NavLink>

          <NavLink to="/extra" style={navLinkStyles}>
            <IconWrapperDiv>
              <MoreVertIcon
                color="secondary"
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",
                  fontSize: "inherit",
                  color: "inherit",
                }}
              />{" "}
            </IconWrapperDiv>
          </NavLink>
        </NavBar>

        <AnimatedRoutes />
      </div>
    </>
  );
};

export default Header;
