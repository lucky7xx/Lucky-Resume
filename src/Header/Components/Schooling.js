import React from "react";
import { ContainerDiv, InnerDiv } from "../../Style/Stylings";
import { motion } from "framer-motion";

export const Schooling = () => {
  return (
    <ContainerDiv
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <InnerDiv>
        <h4>Bachelors of Technology</h4>
        <h4>Parul University,2019</h4>
        <h5>6.5 CGPA</h5>
      </InnerDiv>{" "}
      <hr />
      <InnerDiv>
        <h4>
          MERN Stack Development Course
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h4>
        <h4>Weltec Institute Vadodara, 2023</h4>
      </InnerDiv>
    </ContainerDiv>
  );
};
