import React from 'react'
import styled from 'styled-components'
import MYLOGO from "../images/white logo.png";


const Footer = () => {
  return (
    <Container>
       <Logo>
       
       <img src={MYLOGO}alt=""/>
       </Logo>
    </Container>
  )
}

const Container = styled.div `

`

const Logo = styled.div `
 position:relative;
bottom:200px;
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
export default Footer