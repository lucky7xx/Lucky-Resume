import React from "react";
import { ContainerDiv, InnerDiv } from "./Stylings";

export const Info = () => {
  return (
    <>
      <ContainerDiv>
        <InnerDiv>
          <h2>Skills</h2>
          <p>
            <span style={{ fontSize: "25px" }}>Frontend</span> :{" "}
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </p>
          <p>
            <span style={{ fontSize: "25px" }}>Languages</span> :{" "}
            <ul>
              <li>Javascript (ES5 + ES6)</li>
            </ul>
          </p>
          <p>
            <span style={{ fontSize: "25px" }}>Client SCripting</span> :{" "}
            <ul>
              <li>JQuery</li>
              <li>React</li>
            </ul>
          </p>
        </InnerDiv>
      </ContainerDiv>
    </>
  );
};
