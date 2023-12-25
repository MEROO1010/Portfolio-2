import React from 'react'
import styled from 'styled-components'
import DOTS from "../images/dots.png"

const Contact = () => {
  return (
    <Container>
        <img src={DOTS} alt=""/>
    </Container>
  )
}


const Container = styled.div `
  img{
    position: relative;
    bottom: 1100px;
  }
` 

export default Contact