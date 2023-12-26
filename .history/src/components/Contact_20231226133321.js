import React from 'react'
import styled from 'styled-components'
import DOTS from "../images/dots.png"
import { db } from './firebase';
import firebase from './firebase';

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Save the data to Firestore
    firebase.firestore().collection('contacts').add({
      email: email,
      message: message
    })
    .then(() => {
      console.log('Data successfully saved!');
    })
    .catch((error) => {
      console.error('Error saving data:', error);
    });

    // Reset the form
    event.target.reset();
  };

  return (
    <Container>
        <img src={DOTS} alt=""/>

        <h1>Contact.</h1>

        <ContactForm onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Your Email"/>

        <textarea name="message" placeholder="Your Message"/>

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
    font-family:'Poppins';
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
    font-family:'Poppins';
}
`

const InputBtn = styled.div` 
  input {
    position:relative;
    bottom:960px;
    margin-right:420px;
    width:350px;
    background-color:#3BB873;
    color:white;
    font-weight:bold;
    font-size:20px;
    
  }
`

export default Contact