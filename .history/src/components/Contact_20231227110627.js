import React, { useState } from 'react';
import styled from 'styled-components';
import DOTS from '../images/dots.png';
import firebase from '../firebase/firebase';
import { db } from './firestore';


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
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
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
  input {
    position: relative;
    bottom: 1250px;
    left: 220px;
    width: 400px;
    height: 50px;
    border-radius: 30px;
    border: 0;
    background-color: #dedede;
    padding-left: 20px;
    font-family: 'Poppins';
  }

  input:hover {
    border-color: transparent;
  }

  textarea {
    position: relative;
    bottom: 980px;
    right: 200px;
    width: 400px;
    height: 200px;
    border-radius: 20px;
    border: 0;
    background-color: #dedede;
    padding-left: 20px;
    padding-top: 10px;
    font-family: 'Poppins';
  }
`;

const InputBtn = styled.div`
  input {
    position: relative;
    bottom: 960px;
    margin-right: 420px;
    width: 350px;
    background-color: #3bb873;
    color: white;
    font-weight: bold;
    font-size: 20px;
    pointer: cursor;
  }
`;

export default Contact;