import React from "react";
import { Route, Routes } from "react-router-dom";
import { Extra } from "./Components/Extra";
import { HomePage } from "./Components/HomePage";
import { Skills } from "./Components/Skills";
import { Schooling } from "./Components/Schooling";
import About from "./Components/About";
import { Info } from "./Components/Info";
import { AnimatePresence } from "framer-motion";
import { ErrorPage } from "./Components/ErrorPage";
import { Projects } from "./Components/Projects";
import { Layouts } from "./Components/Layouts/Layouts";
import { Reactsapps } from "./Components/Layouts/Reactsapps";

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
        <Route path="projects" element={<Projects />}>
          <Route path="layouts" element={<Layouts />} />
          <Route path="reactapps" element={<Reactsapps />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
