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

        <textarea placeholder="your Message"/>

        <InputBtn>
        <input type="submit" value="Send"/>
        </InputBtn>
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
    bottom:1250px;
    left:220px;
    width: 400px;
    height:50px;
    border-radius:30px;
    border:0;
    background-color:#DEDEDE;
    padding-left:20px;
  }

  input:hover{
    border-color:transparent;
}

textarea {
    position: relative;
    bottom:980px;
    right:200px;
    width: 400px;
    height:200px;
    border-radius:20px;
    border:0;
    background-color:#DEDEDE;
    padding-left:20px;
    padding-top:10px;
}
`

const InputBtn = styled.div` 
  input {
    position:relative;
    bottom:960px;
    margin-right:420px;
    width:20px;
    
  }
`

export default Contact