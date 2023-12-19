import React from 'react'
import styled from 'styled-components'
import LOGO1 from "../images/logo.png"
import LOGO2 from "../images/logo1.png"
import LOGO3 from "../images/logo2.png"
import APP from "../images/appmockup.png"
import ADS from "../images/ads.png"

const Portfolio = () => {
  return (
    <Container>
         <h1>Our Regular Updated</h1>

         <Title>
           <h1>Portfolio.</h1>
         </Title>

         <IMAGES1>
            <img src={LOGO1} alt=""/>
         </IMAGES1>

         <IMAGES2>
             <table>
                <tr>
                    <td><img src={APP} alt=""/></td>
                    <td><img src={LOGO3} alt=""/></td>
                </tr>
                <tr>
                    <td><img src={LOGO2} alt=""/></td>
                    <td><img src={ADS} alt=""/></td>
                </tr>
             </table>
         </IMAGES2>
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

const IMAGES1 = styled.div `
 img{
    width:400px;
    position:relative;
    bottom:550px;
    right:460px;
 }
`

const IMAGES2 =styled.div `
 table{
    position: relative;
    bottom:1140px;
    left:660px;    
 }
 
 img{
    width:250px;
    height:250px;
 }
` 

export default Portfolio