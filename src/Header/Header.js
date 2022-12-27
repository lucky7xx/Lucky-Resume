import React from "react";
import Person4Icon from "@mui/icons-material/Person4";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

import { School } from "@mui/icons-material";

import CodeIcon from "@mui/icons-material/Code";

import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import HomeIcon from "@mui/icons-material/Home";
import { ContainerDiv, HomeDiv } from "../Style/Stylings";
import AnimatedRoutes from "./AnimatedRoutes";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div>
        <nav>
          <Link to="/about">
            <Person4Icon
              sx={{
                "&:hover": { color: "red" },
                fontSize: "100px",
                color: "white",
              }}
            />
          </Link>

          <Link to="/schooling">
            <School
              color="secondary"
              sx={{
                "&:hover": { color: "red" },
                fontSize: "100px",
                color: "white",
              }}
            />
          </Link>

          <Link to="/info">
            <LanguageIcon
              color="secondary"
              sx={{
                "&:hover": { color: "red" },
                fontSize: "100px",
                color: "white",
              }}
            />
          </Link>

          <Link to="/skills">
            <CodeIcon
              color="secondary"
              sx={{
                "&:hover": { color: "red" },
                fontSize: "100px",
                color: "white",
              }}
            />
          </Link>

          <Link to="/projects">
            <MoreVertIcon
              color="secondary"
              sx={{
                "&:hover": { color: "red" },
                fontSize: "100px",
                color: "white",
              }}
            />
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
