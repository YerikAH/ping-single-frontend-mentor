import React from 'react'
import { SectionTwoComponent, StComponentResponsive, StCrImage } from '../styles/section_two'
import computer from '../assets/illustration-dashboard.png'
export default function SectionTwo() {
  return (
     <SectionTwoComponent>
        <StComponentResponsive>
            <StCrImage src={computer}/>
        </StComponentResponsive>
     </SectionTwoComponent>
  )
}
