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
 height: 920px;
`

export default Home