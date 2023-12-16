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
  position:relative;
  top:20px;
 
  
  
  ul{
    position:static
   list-style-type: none;
  margin-top: 20px;
  padding: 10;
  top: 40px;  
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
position:relative;
bottom:40px;
padding-bottom:80px;
 img{
 width:60px;
 height:60px;
 float: left;
 margin-left:20px;
 padding-bottom:20px;
 justifyContent: flex-end;
 
 }
`

export default Navbar