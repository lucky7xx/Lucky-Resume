import React from "react";
import { ContainerDiv, InnerDiv, TitleSpan } from "../../Style/Stylings";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";

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
              <Tooltip
                title="Basic Understanding of HTML layout and tags."
                arrow
                bootstrap
              >
                <li>HTML5</li>
              </Tooltip>
              <Tooltip title="Basic Understanding of CSS  styles." arrow>
                <li style={{ cursor: "pointer" }}>CSS</li>
              </Tooltip>
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
              <Tooltip title="React components,props, memo, States, Hooks, Styled Components,Router, Fetching API,">
                <li>React</li>
              </Tooltip>
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
