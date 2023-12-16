import React from 'react'
import HomeImage from "../images/header background.png";
import styled from "styled-components"


const Home = () => {
  return (
    <Container>
       <BackgroundImage>
       <img src={HomeImage}alt=""/>

       <h4>Hello! I’m</h4>

       <h3>Marwah Alsaggaf</h3>
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
  bottom:660px;
  right:340px;
  font-size:20px;
  color:#3BB873
 }
`

export default Home