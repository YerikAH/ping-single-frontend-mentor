import React from "react";
import logo from "../assets/logo.svg";
import {
  HeaderComponent,
  HeaderNavegator,
  NavegatorBox,
  NavegatorLogo,
  NavegatorText,
  NavegatorTitle,
  NavegatorTitleTwo,
} from "../styles/header_style";

export default function Header() {
  return (
    <HeaderComponent role="heading">
      <HeaderNavegator role="navigation">
        <NavegatorLogo src={logo} />
        <NavegatorBox>
          <NavegatorTitle>
            We are launching <NavegatorTitleTwo> soon!</NavegatorTitleTwo>
          </NavegatorTitle>
        </NavegatorBox>
        <NavegatorText>Subscribe and get notified</NavegatorText>
      </HeaderNavegator>
    </HeaderComponent>
  );
}
