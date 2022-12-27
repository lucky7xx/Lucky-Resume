import React from "react";
import Person4Icon from "@mui/icons-material/Person4";

import { Route, Link, Routes } from "react-router-dom";
import About from "./Components/About";
import { Info } from "./Components/Info";
import { School } from "@mui/icons-material";
import { Schooling } from "./Components/Schooling";
import CodeIcon from "@mui/icons-material/Code";
import { Skills } from "./Components/Skills";
import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Projects } from "./Components/Projects";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/about">
          <Person4Icon
            color="secondary"
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
      Hello bitches
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="info" element={<Info />} />
        <Route path="schooling" element={<Schooling />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default Header;
