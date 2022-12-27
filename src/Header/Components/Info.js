import React from "react";
import { ContainerDiv, InnerDiv } from "../../Style/Stylings";

export const Info = () => {
  return (
    <>
      <ContainerDiv>
        <InnerDiv>
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
            <span style={{ fontSize: "25px" }}>Client Scripting</span> :{" "}
            <ul>
              <li>JQuery</li>
              <li>React</li>
            </ul>
          </p>
          <p>
            <span style={{ fontSize: "25px" }}>Server Scripting</span> :{" "}
            <ul>
              <li>Node.js</li>
            </ul>
          </p>
        </InnerDiv>
        <InnerDiv>
          {" "}
          <p>
            <span style={{ fontSize: "25px" }}>Frameworks </span> :{" "}
            <ul>
              <li>React Js</li>
              <li>Bootstrap 5</li>
            </ul>
          </p>
        </InnerDiv>
      </ContainerDiv>
    </>
  );
};
