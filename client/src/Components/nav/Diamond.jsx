import React, { useState } from 'react'
import styled from 'styled-components';
import { FaLessThan } from "react-icons/fa";

const Diamond = () => {

  return (
    <Container>
      <Hover>
        <p>DIAMOND</p>
      </Hover>

      <Content className='dropdown-menu'>

        <div className="row">

        <div className="col-1">
        <h1>Category</h1>
        <a href="">BANGLES</a>
        <a href="">BRACELETS</a>
        <a href="">MANGALSUTRA</a>
        <a href="">NECKLACE SET</a>
        <a href="">NECKLACE</a>
        <a href="">NOSE PIN</a>

        </div>

        <div className="col-2">
        <h1>EARRINGS</h1>
        <a href="">DROP EARRINGS</a>
        <a href="">HOOP EARRINGS</a>
        <a href="">JHUMKAS</a>
        <a href="">STUD EARRINGS</a>
        </div>




        <div className="col-3">
          <h1>RINGS</h1>
        <a href="">ENGAGEMENT RINGS</a>
        </div>



        <div className="col-4">
        <h1>PENDANTS</h1>
        <a href="">CASUAL WEAR</a>
        <a href="">DAILY WEAR</a>
        <a href="">PARTY WEAR</a>
        <a href="">PENDANTS & EARRINGS SET</a>
        <a href="">TRADITIONAL</a>
        </div>

        <div className="col-5">
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
display: none;
position: absolute;
background-color: white;
color: rgb(131,39,41);
width: 820px;
height: 230px;
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
      margin-left: -20px;
  }


  .col-2 {
    margin-top: 15px;
    /* display: block; */
}

.col-2 h1{
  margin-top: -2px;
  margin-left: -15px;
}

.col-3 h1{
    margin-left: -75px;
    /* display: block; */
}

.col-4{
  margin-left: 20px;
}

.col-4 h1{
  margin-left: -80px;
}

.col-5 h1{
  margin-left: 20px;
}

  

}
`;


export default Diamond