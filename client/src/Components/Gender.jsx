import React from 'react'
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { TbMathGreater } from 'react-icons/tb';
import "./css/collection.css"

const Gender = () => {
    
  return (
    <Container>
         <Heading>
        <h1>Shop By Gender</h1>
      </Heading>
      <About>
        <p>First-class jewelry for first-class Men, Women & Children.</p>
      </About>
      <Border>
      <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
      </Border>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginLeft:"75px"}}>
  <Grid item xs={3.5}>
    <Item className='item'>
        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwef4310c0/homepage/ShopByGender/Men.jpg" alt="" />
      <Desc>
            <h1>Earrings</h1>
        </Desc>
        <Button className='btn'>
            <a href="">Explore More</a>
            <p><TbMathGreater className='greater'/></p>
        </Button>
    </Item>
  </Grid>

  <Grid item xs={3.5}>
  <Item className='item'>
    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw24db1907/homepage/ShopByGender/kid.jpg" alt="" />
      <Desc>
            <h1>Earrings</h1>
        </Desc>
        <Button className='btn'>
            <a href="">Explore More </a>
            <p><TbMathGreater className='greater'/></p>
        </Button>
    </Item>
  </Grid>

  <Grid item xs={1.7}>
  <Item className='item'>
  <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc0abe627/homepage/ShopByGender/Woman.jpg" alt="" />

      <Desc>
            <h1>Earrings</h1>
        </Desc>
        <Button className='btn'>
            <a href="">Explore More </a>
            <p><TbMathGreater className='greater'/></p>
        </Button>
    </Item>
  
  </Grid>
  </Grid>

  <Banner>
    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw40b8ac95/homepage/Mia/cupid-edit-desktop.jpg" alt="" />
        <Button1>
            <button>Explore More</button>
        </Button1>
      </Banner>

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

img{
  width: 368px;
  height: 310px;
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


const Banner = styled.div`
img{
    width: 83%;
    margin-top: 40px;
}
`;

const Button1 = styled.div`
button{
    position: absolute;
    margin-top: -70px;
    margin-left: -60px;
    width: 140px;
    height: 40px;
    border-radius: 5px;
    border: none;
    border: 1px solid rgb(131,39,41);
    background-color: white;
    font-weight: 500;
    font-size: 16px;
}
button:hover{
    color: white;
    transition: 0.6s ease-in;
    background-color:#832729 ;
}
`;

export default Gender