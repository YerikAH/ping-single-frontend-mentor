import React from 'react'
import { MainStyleComponent } from '../styles/main_style'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

export default function MainComponent() {
  return (
    <MainStyleComponent role="main">
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </MainStyleComponent>
  )
}
