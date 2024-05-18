import { Grid } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { TbMathGreater } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Cat from './Cat';
import Test from './Test';

const Category = () => {
 
  return (

    <Container>

      <Heading>
        <h1>Shop By Category</h1>
      </Heading>
      <About>
        <p>Browse through your favorite categories. We've got them all!</p>
      </About>
      <Border>
      <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
      </Border>

      <Cat/>




       
      



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
width: 176px;
height: 250px;

img{
  width: 176px;
  height: 160px;
}
`;




const Desc = styled.div`
    h1{
        font-size: 17px;
        font-weight: 500;
color: rgb(131,39,69);

    }
`;
const Button = styled.div`
        margin-top: -4px; 
        text-align: center;
        margin-left: -13px;
a{
        font-size: 14px;
        text-decoration: none;
        color: black;
        font-weight: lighter;
    }

     
   a:hover{
        cursor: pointer;
        color: red;
      }

  p .greater{
      font-size: 13px;
      margin-top: -30px;
      margin-left: 30px;
      position: absolute;
      font-weight: lighter;


      &hover{
        margin-right: 40px;
        cursor: pointer;
        color: red;

      }
    }

`;






export default Category