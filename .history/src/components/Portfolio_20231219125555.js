import React from 'react'
import styled from 'styled-components'

const Portfolio = () => {
  return (
    <Container>
         <h1>Our Regular Updated</h1>

         <Title>
           <h1>Portfolio.</h1>
         </Title>
    </Container>
  )
}


const Container = styled.div`
 h1{
    position: relative;
    bottom:600px;
    font-weight:500;
 }
`
const Title = styled.div` 
h1{
    position: relative;
    bottom:600px;
    font-weight:800;
 }
`

export default Portfolio