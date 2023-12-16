import React from 'react'
import styled from "styled-components"
import MYLOGO from "../images/white logo.png";

const Navbar = () => {
  return (
    <Container>
       <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
       </ul>

       <Logo>
       <img src={MYLOGO}alt=""/>
       </Logo>
    </Container>
  )
}


const Container = styled.div `
  padding-top:40px;
  background-color:white;
  ul{
   list-style-type: none;
  margin: 0;
  padding: 10;
  top: 20px;  
  overflow: hidden;  
  }

  li {
    position:sticky;
    justifyContent: flex-end;
    display: flex;
    right:100px;
  float: left;
  padding-left: 20px;
  margin-left:120px;
  
  
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
`

const Logo = styled.div `
 img{
 width:80px;
 height:80px;
 float: left;
 margin-left:40px;
 
 
 }
`

export default Navbar