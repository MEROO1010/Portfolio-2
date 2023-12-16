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
  width:1600px;
  height:400px;
 }
`

export default Home