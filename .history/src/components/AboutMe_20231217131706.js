import React from 'react'
import styled from "styled-components"
import ABOUTME from "../images/About me.png";

const AboutMe = () => {
  return (
    <Container >
      <img src={ABOUTME}alt=""/>

      <Title>
        <h1>About me</h1>

        <p>
        My name is Marwah Alsaggaf, and I'm a <br/>software developer in <br/>JavaScript,python,flutter and PHP 
 and <br/>graphic designer. I  <br/>          
            graduated from Arab Open <br/> University with a major in <br/>
             Information Technology and <br/>Computing
        </p>
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
  right:300px;
  font-size:50px;
 }

 p{
  position:relative;
  bottom:1250px;
  right:320px;
  font-size:30px;
 }
`

export default AboutMe