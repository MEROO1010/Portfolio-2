import React, { useState } from 'react';
import styled from 'styled-components';
import DOTS from '../images/dots.png';
import firebase from '../firebase/firebase';
import { db } from '../firebase/firebase';


function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to Firebase
    db.collection('contacts').add({
      email,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Clear form fields
    setEmail('');
    setMessage(''); };

  return (
    <Container>
      <img src={DOTS} alt="" />

      <h1>Contact.</h1>

      <ContactForm onSubmit={handleSubmit}>
      <label>
       
        <input
          placeholder="Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        
        <textarea
         placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Send</button>
      </ContactForm>
    </Container>
  );
};

const Container = styled.div`
  img {
    position: relative;
    bottom: 1100px;
  }

  h1 {
    position: relative;
    bottom: 1120px;
    font-size: 60px;
    color: #3bb873;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  bottom:1800px;

  label {
    margin-bottom: 10px;
  }

  input {
    width: 400px;
    height: 50px;
    border-radius: 30px;
    border: 0;
    background-color: #dedede;
    padding-left: 20px;
    font-family: 'Poppins';
    margin-bottom: 10px;
  }

  input:hover {
    border-color: transparent;
  }

  textarea {
    width: 400px;
    height: 200px;
    border-radius: 20px;
    border: 0;
    background-color: #dedede;
    padding-left: 20px;
    padding-top: 10px;
    font-family: 'Poppins';
    margin-bottom: 10px;
  }
`;

const InputBtn = styled.div`
  button {
    width: 350px;
    background-color: #3bb873;
    color: white;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    border: 0;
    border-radius: 30px;
    height: 50px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #2a8e5a;
  }
`;

export default Contact;