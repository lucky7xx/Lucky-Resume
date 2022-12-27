import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Phone } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { ContainerDiv, InnerDiv, Links } from "./Stylings";

const About = () => {
  return (
    <ContainerDiv>
      <img src="/123.jpg" className="headImg" alt="headimage"></img>
      <InnerDiv>
        Name: Lucky Patel
        <br />
        <Links href="mailto:lbp7198@gmail.com">
          <MailOutlineIcon
            sx={{
              "&:hover": { color: "lightblue" },
              verticalAlign: "bottom",
              color: "orange",
            }}
          />{" "}
          &nbsp;-lbp7198@gmail.com
        </Links>
        <br />
        <Links href="tel:+919824697672">
          <Phone
            sx={{
              "&:hover": { color: "green" },
              verticalAlign: "bottom",
              color: "gold",
            }}
          />{" "}
          &nbsp;-+91 98246 97672
        </Links>{" "}
        <br />
        <Links href="https://github.com/lucky7xx">
          <GitHubIcon
            sx={{
              "&:hover": { color: "white" },
              verticalAlign: "bottom",
              color: "black",
            }}
          />{" "}
          &nbsp;-/Lucky7xx
        </Links>
        <br />
        <a
          href="https://www.google.com/maps/place/Aashray+Vatika/@22.32805,73.2705273,17z/data=!3m1!4b1!4m5!3m4!1s0x395fcfe11aed4c3b:0x820e8dc7eb3bb7d2!8m2!3d22.328052!4d73.2727193"
          className="linkto"
        >
          <HomeIcon
            sx={{
              "&:hover": { color: "blue" },
              verticalAlign: "bottom",
              color: "black",
            }}
          />
          &nbsp; -189, Aashray Vatika,Bakrol.Ajwa Road,Vadodara.390019
        </a>
      </InnerDiv>
    </ContainerDiv>
  );
};

export default About;
