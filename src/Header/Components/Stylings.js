import styled from "styled-components";

const ContainerDiv = styled.div`
  background-color: grey;
  height: auto;
  width: 800px;
  border: 2px solid black;
  border-radius: 30px;
  display: inline-flex;
  margin-top: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  color: black;
`;

const InnerDiv = styled.div`
  margin-left: 20px;
  text-align: left;
  margin-top: 10px;
  line-height: 25px;
  font-size: 20px;
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
