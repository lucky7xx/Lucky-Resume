import React from "react";
import { Route, Routes } from "react-router-dom";
import { Extra } from "./Components/Extra";
import { HomePage } from "./Components/HomePage";
import { Skills } from "./Components/Skills";
import { Schooling } from "./Components/Schooling";
import About from "./Components/About";
import { Info } from "./Components/Info";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="info" element={<Info />} />
        <Route path="schooling" element={<Schooling />} />
        <Route path="skills" element={<Skills />} />
        <Route path="extra" element={<Extra />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
