import React from "react";
import { ContainerDiv, InnerDiv, TitleSpan } from "../../Style/Stylings";
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
        <TitleSpan>Bachelors of Technology</TitleSpan>
        <br />
        <TitleSpan style>Parul University,2019</TitleSpan>
        <br />
        <TitleSpan style>6.5 CGPA</TitleSpan>
      </InnerDiv>{" "}
      <hr />
      <InnerDiv>
        <TitleSpan>MERN Stack Development Course</TitleSpan>
        <br />
        <TitleSpan style>Weltec Institute Vadodara, 2023</TitleSpan>
      </InnerDiv>
    </ContainerDiv>
  );
};
