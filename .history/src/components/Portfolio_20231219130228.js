import React from 'react'
import styled from 'styled-components'
import LOGO1 from "../images/logo.png"

const Portfolio = () => {
  return (
    <Container>
         <h1>Our Regular Updated</h1>

         <Title>
           <h1>Portfolio.</h1>
         </Title>

         <IMAGES>
            <img src={LOGO1} alt=""/>
         </IMAGES>
    </Container>
  )
}


const Container = styled.div`
 h1{
    position: relative;
    bottom:600px;
    font-weight:400;
    font-size:40px;
 }
`
const Title = styled.div` 
h1{
    position: relative;
    bottom:600px;
    font-weight:800;
    color:#3BB873;
    font-size:38px;
 }
`

const IMAGES = styled.div `
 img{
    width:400px;
    position:relative;
    bottom:500px;
 }
`

export default Portfolio