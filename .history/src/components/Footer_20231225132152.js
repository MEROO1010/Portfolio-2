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

 `
export default Footer