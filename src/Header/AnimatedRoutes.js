import React from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import { Projects } from "./Components/Projects";
import { HomePage } from "./Components/HomePage";
import { Skills } from "./Components/Skills";
import { Schooling } from "./Components/Schooling";
import About from "./Components/About";
import { Info } from "./Components/Info";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="info" element={<Info />} />
        <Route path="schooling" element={<Schooling />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
