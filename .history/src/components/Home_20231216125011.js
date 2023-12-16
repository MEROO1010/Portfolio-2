import React from 'react'
import HomeImage from "../images/header background.png";
import Circle from "../images/Green-circle.png";
import styled from "styled-components"


const Home = () => {
  return (
    <Container>
       <BackgroundImage>
       <img src={HomeImage}alt=""/>

       <h4>Hello! I’m</h4>

       <h3>Marwah Alsaggaf</h3>

       <h1>Graphic Designer &</h1>
       <h1>Full-stack Developer </h1>
       <CircleIcon>
       <img src={Circle}alt=""/>
       </CircleIcon>
       </BackgroundImage>


    </Container>
  )
}

const Container = styled.div`
 
`

const BackgroundImage = styled.div `
 img{
  object-fit:cover;
  max-width: 100%;
    max-height: 100%;
  -o-object-fit: contain;
    object-fit: contain;
 }

 h4{
  position:relative;
  bottom:700px;
  right:450px;
  font-size:20px;
  color:#3BB873
 }

 h3{
  position:relative;
  bottom:690px;
  right:320px;
  font-size:30px;
  color:#3BB873
 }

 h1{
  position:relative;
  bottom:650px;
  right:200px;
  font-size:40px;
  color:#000
 }
`

const CircleIcon = styled.div` 
  img{
    position:relative;
  bottom:650px;
  right:60px;
  
  
  }
`

export default Home