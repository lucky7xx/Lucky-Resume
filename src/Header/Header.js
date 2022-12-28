import React from "react";
import Person4Icon from "@mui/icons-material/Person4";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

import { School } from "@mui/icons-material";

import CodeIcon from "@mui/icons-material/Code";

import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import HomeIcon from "@mui/icons-material/Home";
import { ContainerDiv, HomeDiv, IconWrapperDiv } from "../Style/Stylings";
import AnimatedRoutes from "./AnimatedRoutes";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div>
        <nav>
          <Link to="/about">
            <IconWrapperDiv>
              {" "}
              <Person4Icon
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",

                  fontSize: "inherit",
                  color: "white",
                }}
              />
            </IconWrapperDiv>
          </Link>

          <Link to="/schooling">
            <IconWrapperDiv>
              <School
                color="secondary"
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",

                  fontSize: "inherit",
                  color: "white",
                }}
              />
            </IconWrapperDiv>
          </Link>

          <Link to="/info">
            <IconWrapperDiv>
              {" "}
              <LanguageIcon
                color="secondary"
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",

                  fontSize: "inherit",
                  color: "white",
                }}
              />
            </IconWrapperDiv>
          </Link>

          <Link to="/skills">
            <IconWrapperDiv>
              {" "}
              <CodeIcon
                color="secondary"
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",

                  fontSize: "inherit",
                  color: "white",
                }}
              />{" "}
            </IconWrapperDiv>
          </Link>

          <Link to="/projects">
            <IconWrapperDiv>
              <MoreVertIcon
                color="secondary"
                sx={{
                  "&:hover": { color: "red" },
                  size: "2em",

                  fontSize: "inherit",
                  color: "white",
                }}
              />{" "}
            </IconWrapperDiv>
          </Link>
        </nav>

        <AnimatedRoutes />
      </div>

      <HomeDiv>
        <Link to="/">
          <HomeIcon
            color="secondary"
            sx={{
              "&:hover": { color: "gold" },
              fontSize: "30px",
              color: "white",
            }}
          />
        </Link>
      </HomeDiv>
    </>
  );
};

export default Header;
