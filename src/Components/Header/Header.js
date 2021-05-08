import React from "react";

import {
  HeaderContainer,
  HeaderWrapper,
  HeaderTitle,
  HeaderSubtitle,
  CreateDiscus,
} from "./";
import { config } from "../../config";

export const Header = () => {
  return (
    <HeaderContainer>
      <CreateDiscus isAbsolute={true} />
      <HeaderWrapper>
        <HeaderTitle>{config.title}</HeaderTitle>
        <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
