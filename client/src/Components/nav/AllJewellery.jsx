import React, { useState } from 'react'
import styled from 'styled-components';
import { FaLessThan } from "react-icons/fa";

const AllJewellery = () => {

  return (
    <Container>
      <Hover>
        <p>All Jewellery</p>
      </Hover>

      <Content className='dropdown-menu'>

        <div className="row">

        <div className="col-1">
        <h1>Category</h1>
        <a href="">ALL JEWELLERY</a>
        <a href="">EARRINGS</a>
        <a href="">PENDANTS</a>
        <a href="">FINGER RINGS</a>
        <a href="">MANGALSUTRA</a>
        <a href="">CHAINS</a>
        <a href="">NOSE PIN</a>
        <a href="">NECKLACES</a>
        <a href="">NECKLACE SET</a>

        </div>

        <div className="col-2" style={{marginLeft:"10px"}}>
        <a href="">BANGLES</a>
        <a href="">BRACELETS</a>
        <a href="">PENDANTS & EARRING SET</a>
        <a href="">GOLD COINS</a>
        <h1>GIFT CARD</h1>
        </div>




        <div className="col-3" style={{marginLeft:"10px"}}>
          <h1>GENDER</h1>
        <a href="">WOMEN'S JEWELLERY</a>
        <a href="">MEN</a>
        <a href="">KIDS & TEENS</a>
        <a href=""></a>
        <h1> </h1>
        </div>



        <div className="col-4">
        <h1>PRICE BAND</h1>
        <a href=""><FaLessThan/>25K</a>
        <a href="">25K-50K</a>
        <a href="">  50K-1L</a>
        <a href="">1L & ABOVE</a>
        <h1> </h1>
        </div>

        </div>
      </Content>
    </Container>
  );

}

const Container = styled.div`
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
  margin-top: 10px;
  border-bottom: solid 3px rgb(131,39,41);  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
  
}

p:hover:after { transform: scaleX(1); }
`;




const Content = styled.div`
/* margin-top: 20px; */
display: none;
position: absolute;
background-color: white;
color: rgb(131,39,41);
width: 720px;
height: 320px;
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
    margin-top: 45px;
    /* display: block; */
}

.col-2 h1{
  margin-top: -2px;
  margin-left: -75px;
}

.col-3 h1{
    margin-left: -60px;
    /* display: block; */
}

.col-4{
  margin-left: 20px;
}

.col-4 h1{
  margin-left: 20px;
}

  

}
`;


export default AllJewellery