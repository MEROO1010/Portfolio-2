import React from 'react'
import styled from 'styled-components'
import MYLOGO from "../images/white logo.png";
import Behance from "../images/Behance.png";
import TwitterX from "../images/TwitterX.png";
import LinkedIn from "../images/LinkedIn.png";
import GitHub from "../images/GitHub.png";


const Footer = () => {
  return (
    <Container>
       <Logo>
       
       <img src={MYLOGO}alt=""/>
       </Logo>

       <Icons>
       <ul >
            <li><a href='https://www.behance.net/merooalsaggaf'><img src={Behance}alt=""/></a></li>
            <li><a href='https://github.com/MEROO1010'><img src={GitHub}alt=""/></a></li>
            <li><a href='https://twitter.com/meroo_alsaggaf'><img src={TwitterX}alt=""/></a></li>
            <li><a href='https://www.linkedin.com/in/marwah-alsaggaf-ba44011b2/'><img src={LinkedIn}alt=""/></a></li>
          </ul>
       </Icons>

       <h1>© 2023  All rights reserved</h1>
    </Container>
  )
}

const Container = styled.div `
h1{
  position:relative;
  bottom:660px;
  left:20px;
  font-size:16px;
  font-weight: 400;
}
`

const Logo = styled.div `
 position:relative;
bottom:940px;
left:660px;
padding-bottom:80px;
 img{
 width:100px;
 height:100px;
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
  right:100px;    
  overflow: hidden;
    
  }

  li{
    display: inline;
    padding-left:60px;
    position:relative;
  }
`


export default Footer