import React from 'react'
import logo from "../assets/logo.svg"
import { HeaderComponent, HeaderNavegator, NavegatorBox, NavegatorLogo, NavegatorText, NavegatorTitle, NavegatorTitleTwo } from '../styles/header_style'

export default function Header() {
  return (
    <HeaderComponent>
        <HeaderNavegator>
            <NavegatorLogo src={logo}/>
            <NavegatorBox>
                <NavegatorTitle>We are launching </NavegatorTitle>
                <NavegatorTitleTwo> soon!</NavegatorTitleTwo>
            </NavegatorBox>
            <NavegatorText>Subscribe and get notified</NavegatorText>
        </HeaderNavegator>
    </HeaderComponent>
  )
}
