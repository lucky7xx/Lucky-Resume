import React from "react";
import { ContainerDiv, InnerDiv } from "../../Style/Stylings";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <ContainerDiv
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      delay={{}}
    >
      <InnerDiv>
        <p>
          <span style={{ fontSize: "25px" }}>Summary</span> : A graduate with a
          strong foundation in computer science and a passion for front-end
          development, I am excited to bring my skills and enthusiasm to a role
          as a React developer. I have a solid understanding of HTML, CSS, and
          JavaScript, and am eager to continue learning and growing as a
          developer.
        </p>
        <p>
          <span style={{ fontSize: "25px" }}>Skills</span> :{" "}
          <ul>
            <li>Proficient in HTML, CSS, and JavaScript.</li>
            <li>Strong understanding of React and its principles.</li>
            <li>Experience with Git and version control.</li>
            <li>A good knowledge of Routers,Redux and other libraries.</li>
            <li>Familiarity with agile development methodologies</li>
          </ul>
        </p>
      </InnerDiv>
    </ContainerDiv>
  );
};
