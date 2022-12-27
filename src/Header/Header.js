import React from "react";
import Person4Icon from "@mui/icons-material/Person4";
import InfoIcon from "@mui/icons-material/Info";
import { Route, Link, Routes } from "react-router-dom";
import About from "./Components/About";
import { Info } from "./Components/Info";
import { School } from "@mui/icons-material";
import { Schooling } from "./Components/Schooling";

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

        <Link to="/info">
          <InfoIcon
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
      </nav>

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="info" element={<Info />} />
        <Route path="schooling" element={<Schooling />} />
      </Routes>
    </div>
  );
};

export default Header;
