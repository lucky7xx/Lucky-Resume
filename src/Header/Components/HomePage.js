import React from "react";
import { HomepageDiv, TitleSpan } from "../../Style/Stylings";
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
        <TitleSpan color>Introduction: </TitleSpan>
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
        <TitleSpan color>About This Project: </TitleSpan>
        I have created this whole project using React concepts and implemented
        some css and javascript too. I have used some react libraries like
        styled components , framer motion , material UI in this project. I know
        concepts like Components, JSX, Hooks, Props, Lifecycle Methods, State,
        Router, Redux, Styled Components, Fetching API , etc. I have added few
        projects on my GitHub profile which i have done during my course period
        in weltec institute. <br />
        Hope you like this small portfolio!
      </p>
    </HomepageDiv>
  );
};
