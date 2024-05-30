import React from 'react'
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { TbMathGreater } from 'react-icons/tb';
import "./css/collection.css"
import { earringData } from './Data/data';

const Collections = () => {
    
  return (
    <Container>
         <Heading>
        <h1>Shop By Collections</h1>
      </Heading>
      <About>
        <p>Whatever the occasion, we've got a beautiful piece of jewellery for you.</p>
      </About>
      <Border>
      <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
      </Border>

      

<Grid container spacing={2}>
  <Grid item xs={6} md={8} style={{display:"flex", marginLeft:"60px"}}>
    {
      earringData.slice(12,15).map((earringData,i)=>(

     
<Item className='item'>
      {/* <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47b1df4b/homepage/shopByCategory/fod-earrings.jpg" alt="" /> */}
      <img src={earringData.img} alt="" />
      <Desc>
            <h1>Earrings</h1>
        </Desc>
        <Button className='btn'>
            <a href="">Explore More</a>
            <p><TbMathGreater className='greater'/></p>
        </Button>
    </Item> 
     ))
    }
    </Grid>
</Grid>

    </Container>
  )
}

const Container = styled.div`
width: 100%;
/* background-color: red; */
height: inherit;

`;
const Heading = styled.div`
color: rgb(131,39,41);
font-size: 20px;
`;

const About = styled.div`
margin-top: -15px;
font-size: 19px;
p{
  font-weight: 400;
}
`;

const Border = styled.div`
margin-top: -20px;
width: 90%;
margin-left: 70px;
`;



const Item = styled.div`
border: 1px solid lightgray;
width: 368px;
height: 375px;
/* margin: 10px; */
border-top-left-radius: 10px;
margin-left: 60px;

img{
  width: 368px;
  height: 310px;
/* border-radius: 8px; */
border-top-left-radius: 10px;

}


`;

const Desc = styled.div`
    h1{
        width: 100px;
        font-size: 20px;
        font-weight: 500;
color: rgb(131,39,69);
/* margin-left: -390px; */
    }
    

`;
const Button = styled.div`
        margin-top: -34px; 
        text-align: center;
        margin-left: 220px;
        width: 140px;
        height: 30px;
        background-color: white;
        
a{
        font-size: 14px;
        text-decoration: none;
        color: black;
        font-weight: lighter;
    }
    &hover{
         left: 40;
         cursor: pointer;
         color: red;
       }

     

  p .greater{
      font-size: 13px;
      margin-top: -30px;
      margin-left: 40px;
      position: absolute;
      font-weight: lighter;


      &hover{
        margin-right: 40px;
        cursor: pointer;

      }
    }

`;

export default Collections