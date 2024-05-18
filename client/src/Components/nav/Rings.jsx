import React, { useState } from 'react'
import styled from 'styled-components';
import { FaLessThan } from "react-icons/fa";

const Rings = () => {

  return (
    <Container>
      <Hover>
        <p>RINGS</p>
      </Hover>

      <Content className='dropdown-menu'>

        <div className="row">

        <div className="col-1">
        <h1>ALL RINGS</h1>
        







        <a href="">CASUAL RINGS</a>
        <a href="">COUPLE RINGS</a>
        <a href="">DIAMOND ENGAGEMENT RINGS</a>
        <a href="">ENGAGEMENT RINGS</a>
        <a href="">GOLD ENGAGEMENT RINGS</a>
        <a href="">MEN'S RINGS</a>
        <a href="">PLATINUM ENGAGEMENT RINGS</a>


        </div>

        <div className="col-2">
        <h1>BY METAL & STONES</h1>
        <a href="">DIAMOND</a>
      <a href="">GEMSTONE</a>
      <a href="">GOLD</a>
      <a href="">ROSE GOLD</a>
      <a href="">SOLITAIRE</a>
      <a href="">WHITE GOLD</a>

        </div>


        <div className="col-3">
        <h1>PRICE BAND</h1>
        <a href=""><FaLessThan/>25K</a>
        <a href="">25K-50K</a>
        <a href="">  50K-1L</a>
        <a href="">1L & ABOVE</a>
        </div>

        </div>
      </Content>
    </Container>
  );

}

const Container = styled.div`
/* position: fixed; */
cursor: pointer;




&:hover .dropdown-menu{
  display: block;
}
`;


const Hover = styled.div`
width: 90px;
height: 30px;

p:after{
  display:block;
  content: ' ';
  border-bottom: solid 3px rgb(131,39,41);  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
  margin-top: 10px;

  
}

p:hover:after { transform: scaleX(1); }
`;




const Content = styled.div`
/* margin-top: 20px; */
display: none;
position: absolute;
background-color: white;
color: rgb(131,39,41);
width: 650px;
height: 260px;
box-shadow: 2px 2px 15px;
margin-top: 10px;




h1{
  font-size: 17px;
  font-weight: 500;

}




a{
  padding: 4px;
  color: black;
/* color: white; */

  display: contents;
  text-align: start;
  margin-left: 20px;
  text-decoration: none;
  display: block;
}

.row{
  display: flex;

  .col-1 h1{
      margin-left: -110px;
  }


  .col-2 {
    margin-top: 15px;
    margin-left: 25px;
    /* display: block; */
}

.col-2 h1{
  margin-top: -2px;
  margin-left: 24px;
}

.col-3{
    margin-left: 30px;
}

.col-3 h1{
    margin-left: 20px;
    /* display: block; */
}

}
`;


export default Rings