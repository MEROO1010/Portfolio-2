import React from 'react'
import styled from 'styled-components'
import DOTS from "../images/dots.png"

const Contact = () => {
  return (
    <Container>
        <img src={DOTS} alt=""/>

        <h1>Contact.</h1>

        <ContactForm>
        <input type="text" placeholder="your Email"/>
        </ContactForm>
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
    bottom: 1120px;
    font-size:60px;
    color:#3BB873;
  }
` 

const ContactForm = styled.div `
  input{
    position: relative;
    bottom:1120px;
    width: 400px;
    height:50px;
    border-radius:30px;
    border:0;
    background-color:#DEDEDE;
    padding-left:20px;
  }

  input:hover{
  border:none;
}
`

export default Contact