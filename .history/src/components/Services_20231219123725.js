import React from 'react'
import styled from "styled-components"
import Card1 from "../images/Card 1.png"
import Card2 from "../images/Card 2.png"
import Card3 from "../images/Card 3.png"
import Card4 from "../images/Card 4.png"


const Services = () => {
  return (
    <Container>
       <h1>Services</h1>
       <li>
        <ul><img src={Card1} alt=""/> </ul>
        <ul><img src={Card2} alt=""/> </ul>
        <ul><img src={Card3} alt=""/> </ul>
        <ul><img src={Card4} alt=""/> </ul>
       </li>
       
    </Container>
  )
}

const Container = styled.div`
h1{
  position:relative;
  bottom:900px;
  font-size:60px;
}

ul{
  display: inline-block;
}

img{
  position:relative;
  padding-right:40px;
  left:400px;
  bottom:600px;
  width:300px;
  height:300px;
}
`


export default Services