import React from 'react'
import styled from "styled-components"

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
    </Container>
  )
}


const Container = styled.div `
  padding-top:20px;
  background-color:red;
  ul{
    list-style-type: none;
  }
`

export default Navbar