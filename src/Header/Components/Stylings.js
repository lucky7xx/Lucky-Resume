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
`;

const InnerDiv = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  margin-top: 10px;
  line-height: 25px;
  font-size: 20px;
  text-align: justify;
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

export { ContainerDiv, InnerDiv, Links };
