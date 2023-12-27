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

       <PortfolioButton>
         <button><a href='https://www.behance.net/merooalsaggaf'>Portfolio Here</a></button>
       </PortfolioButton>
    </Container>
  )
}


const Container = styled.div `
margin-top:8px;
height:8px;
  ul{
    position:relative;
   list-style-type: none;

  padding-left: 40px;
  top: 40px;
  left:20px;    
  overflow: hidden;
  background-color: #fff;
  }

  li {
    font-size:20px;
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
bottom:20px;
padding-bottom:80px;
 img{
 width:80px;
 height:80px;
 float: left;
 margin-left:40px;
 padding-bottom:4px;
 justifyContent: flex-end;
 
 }
`

const PortfolioButton = styled.div`
a{
  color: white;
  text-decoration: none;
}
  button{
    position:relative;
margin-left:40px;
left:550px;
bottom:80px;
width:120px;
height:40px;
font-size:14px;
border-radius:8px;
background-color:black;
color:white;
  }
`

export default Navbar