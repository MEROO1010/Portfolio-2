import React from 'react'
import styled from 'styled-components'
import DOTS from "../images/dots.png"

const Contact = () => {
  return (
    <Container>
        <img src={DOTS} alt=""/>

        <h1>Contact.</h1>
    </Container>
  )
}


const Container = styled.div `
  img{
    position: relative;
    bottom: 1100px;
  }

  h1{
    position: relative;
    bottom: 1100px;
    fontWight:semibold;
  }
` 

export default Contact