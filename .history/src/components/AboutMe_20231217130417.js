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
    position: relative;
    bottom:80px;
    width:1100px;
  }
`

export default AboutMe