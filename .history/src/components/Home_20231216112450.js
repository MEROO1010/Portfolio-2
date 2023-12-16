import React from 'react'
import HomeImage from "../images/header background.png";
import styled from "styled-components"


const Home = () => {
  return (
    <Container>
        <img src={HomeImage}alt=""/>
    </Container>
  )
}

const Container = styled.div`
 width: 1920px;
 height:1020px;
`

export default Home