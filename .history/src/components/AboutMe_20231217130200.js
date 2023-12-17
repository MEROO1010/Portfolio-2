import React from 'react'
import styled from "styled-components"
import ABOUTME from "../images/About me.png";

const AboutMe = () => {
  return (
    <Container >
      <img src={ABOUTME}alt=""/>
    </Container>
  )
}


const Container = styled.div `
  img{
    width:400px;
  }
`

export default AboutMe