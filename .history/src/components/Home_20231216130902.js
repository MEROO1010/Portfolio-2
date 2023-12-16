import React from 'react'
import HomeImage from "../images/header background.png";
import Circle from "../images/Green-circle.png";
import Behance from "../images/Behance.png";
import TwitterX from "../images/TwitterX.png";
import LinkedIn from "../images/LinkedIn.png";
import Instagram from "../images/Instagram.png";

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

       <ul >
            <li><a href='https://github.com/MEROO1010'><img src={Behance}alt=""/></a></li>
            <li><a href='https://www.instagram.com/meroo_alsaggaf/'><img src={TwitterX}alt=""/></a></li>
            <li><a href='https://www.behance.net/merooalsaggaf'><img src={LinkedIn}alt=""/></a></li>
            <li><a href='https://www.linkedin.com/in/marwah-alsaggaf-ba44011b2/'><img src={Instagram}alt=""/></a></li>
          </ul>

          <CVButton>
         <button>CV Here</button>
       </CVButton>
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
 

  ul{
    position:relative;
   list-style-type: none;

  padding-left: 40px;
  bottom: 620px;
  right:240px;    
  overflow: hidden;
    
  }

  li{
    display: inline;
    padding-left:60px;
    position:relative;
  }
`

const CircleIcon = styled.div` 
  img{
    position:relative;
  bottom:700px;
  left:80px;
  
  
  }
`

const CVButton = styled.div `
  button{
    position:relative;
margin-left:40px;
right:400px;
bottom:550px;
width:120px;
height:40px;
font-size:14px;
border-radius:8px;
background-color:#3BB873;
color:white;
}
`

export default Home