import React from "react";
import { HomepageDiv } from "../../Style/Stylings";
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <HomepageDiv
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      luckybhai
    >
      <p>
        <span style={{ fontSize: "25px", color: "red" }}>Introduction: </span>
        Hello reviewer! My name is Lucky Patel and I am a react developer
        fresher. I have recently completed MERN stack development course and i
        have bachelors degree in Information and technology field and i have a
        strong foundation in programming concepts. I am excited to begin my
        career as a react developer and am eager to learn and grow in this
        field. I have some experience with react and have built a few small
        projects on my own, but I am looking forward to learning from more
        experienced developers and taking on larger and more complex projects.
        Thank you for considering me for this opportunity.
      </p>
      <p>
        <span style={{ fontSize: "25px", color: "red" }}>
          About This Project:{" "}
        </span>
        I have created this whole project using React concepts and implemented
        some css and javascript too. I have used some react libraries too. I
        know concepts like Components, JSX, Hooks, Props, Lifecycle Methods,
        State, Router, Redux, Styled Components, Fetching API , etc. In the
        projects section i have added few projects which i have done during my
        course period in weltec institute. <br />
        Hope you like this small portfolio!
      </p>
    </HomepageDiv>
  );
};
