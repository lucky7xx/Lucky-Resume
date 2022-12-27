import React from "react";
import { ContainerDiv, InnerDiv } from "./Stylings";

export const Schooling = () => {
  return (
    <ContainerDiv>
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
