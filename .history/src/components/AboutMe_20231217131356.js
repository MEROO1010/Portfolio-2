import React from 'react'
import styled from "styled-components"
import ABOUTME from "../images/About me.png";

const AboutMe = () => {
  return (
    <Container >
      <img src={ABOUTME}alt=""/>

      <Title>
        <h1>About me</h1>
      </Title>
    </Container>
  )
}


const Container = styled.div `
  img{
    position: relative;
    bottom:450px;
    width:1500px;
    height:1200px;
  }
`

const Title = styled.div `
 h1{
  position:relative;
  bottom:1300px;
  right:400px;
  font-size:50px;
 }
`

export default AboutMe