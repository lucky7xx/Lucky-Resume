import { style } from "@mui/system";
import styled from "styled-components";

const ContainerDiv = styled.div`
  background: rgba(255, 255, 255, 0.5);
  height: auto;
  width: 800px;
  border: 1px solid white;
  border-radius: 30px;
  display: inline-flex;
  margin-top: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(3px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  @media (min-width: 0px) and (max-width: 480px) {
    width: 380px;
    height: auto;
    display: grid;
    grid-template-rows: repeat(1, 3fr);
    margin-left: 5px;
  }
`;

const InnerDiv = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  margin-top: 10px;
  line-height: 25px;
  font-size: 20px;
  text-align: justify;
  justify-content: center;
  align-items: center;
  @media (min-width: 0px) and (max-width: 480px) {
    text-align: justify;
    font-size: 10px;
    line-height: 12px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
`;

const ImgDiv = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 30px;
  @media (min-width: 0px) and (max-width: 480px) {
    width: 225px;
    height: 225px;
    margin-right: auto;
    display: block;
    margin-left: auto;
  }
`;

const Links = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  margin-top: 10px;
  &:hover {
    color: white;
  }
`;

const HomeDiv = styled.div`
  margin-top: 30px;
`;

const HomepageDiv = styled.div`
  text-align: justify;
  /* margin: 40px 100px; */
  margin-left: 20px;
  margin-right: 20px;
  color: white;
  font-size: 20px;
  @media (min-width: 0px) and (max-width: 480px) {
    font-size: 15px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const IconWrapperDiv = styled.div`
  font-size: 80px;
  display: inline-flex;
  flex-direction: row;
  @media (min-width: 0px) and (max-width: 480px) {
    font-size: 40px;
  }
`;

export {
  ContainerDiv,
  InnerDiv,
  Links,
  HomeDiv,
  HomepageDiv,
  ButtonDiv,
  ImgDiv,
  IconWrapperDiv,
};
