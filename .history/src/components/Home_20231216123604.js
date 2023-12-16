import React from 'react'
import HomeImage from "../images/header background.png";
import styled from "styled-components"


const Home = () => {
  return (
    <Container>
       <BackgroundImage>
       <img src={HomeImage}alt=""/>

       <h4>Hello! I’m</h4>
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
  top:60px;
 }
`

export default Home