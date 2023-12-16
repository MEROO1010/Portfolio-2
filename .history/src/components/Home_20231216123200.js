import React from 'react'
import HomeImage from "../images/header background.png";
import styled from "styled-components"


const Home = () => {
  return (
    <Container>
       <BackgroundImage>
       <img src={HomeImage}alt=""/>
       </BackgroundImage>
    </Container>
  )
}

const Container = styled.div`
 
`

const BackgroundImage = styled.div `
 img{
  object-fit:cover;
  
  height:100%;
 }
`

export default Home