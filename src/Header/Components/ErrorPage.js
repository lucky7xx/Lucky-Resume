import React from "react";
import {
  ContainerDiv,
  InnerDiv,
  ParaStyle,
  TitleSpan,
} from "../../Style/Stylings";

export const ErrorPage = () => {
  return (
    <ContainerDiv>
      <InnerDiv>
        <TitleSpan errorColor>Error 404.</TitleSpan>
        <br />

        <TitleSpan errorColorRed>
          Page Not Found! <br />
          Try checking the URL.
        </TitleSpan>
      </InnerDiv>
    </ContainerDiv>
  );
};
