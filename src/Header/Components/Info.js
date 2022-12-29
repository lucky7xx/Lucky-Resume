import React from "react";
import { ContainerDiv, InnerDiv, TitleSpan } from "../../Style/Stylings";
import { motion } from "framer-motion";

export const Info = () => {
  return (
    <>
      <ContainerDiv
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <InnerDiv>
          <p>
            <TitleSpan>Frontend</TitleSpan> :{" "}
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </p>
          <p>
            <TitleSpan>Languages</TitleSpan> :{" "}
            <ul>
              <li>Javascript (ES5 + ES6)</li>
            </ul>
          </p>
          <p>
            <TitleSpan>Client Scripting</TitleSpan> :{" "}
            <ul>
              <li>JQuery</li>
              <li>React</li>
            </ul>
          </p>
          <p>
            <TitleSpan>Server Scripting</TitleSpan> :{" "}
            <ul>
              <li>Node.js</li>
            </ul>
          </p>
        </InnerDiv>
        <InnerDiv>
          <p>
            <TitleSpan>Frameworks </TitleSpan> :{" "}
            <ul>
              <li>Bootstrap 5</li>
              <li>Tailwind CSS</li>
            </ul>
          </p>
        </InnerDiv>
      </ContainerDiv>
    </>
  );
};
