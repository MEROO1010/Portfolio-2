import React from 'react'
import styled from 'styled-components'
import MYLOGO from "../images/white logo.png";
import Behance from "../images/Behance.png";
import TwitterX from "../images/TwitterX.png";
import LinkedIn from "../images/LinkedIn.png";
import Instagram from "../images/Instagram.png";


const Footer = () => {
  return (
    <Container>
       <Logo>
       
       <img src={MYLOGO}alt=""/>
       </Logo>

       <Icons>
       <ul >
            <li><a href='https://github.com/MEROO1010'><img src={Behance}alt=""/></a></li>
            <li><a href='https://www.instagram.com/meroo_alsaggaf/'><img src={TwitterX}alt=""/></a></li>
            <li><a href='https://www.behance.net/merooalsaggaf'><img src={LinkedIn}alt=""/></a></li>
            <li><a href='https://www.linkedin.com/in/marwah-alsaggaf-ba44011b2/'><img src={Instagram}alt=""/></a></li>
          </ul>
       </Icons>
    </Container>
  )
}

const Container = styled.div `

`

const Logo = styled.div `
 position:relative;
bottom:800px;
left:700px;
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

 const Icons = styled.div `
 ul{
    position:relative;
   list-style-type: none;

  padding-left: 40px;
  bottom: 740px;
  right:90px;    
  overflow: hidden;
    
  }

  li{
    display: inline;
    padding-left:60px;
    position:relative;
  }
`


export default Footer