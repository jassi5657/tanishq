import React, { useState } from 'react'
import styled from 'styled-components';
import { FaRegCircle } from "react-icons/fa";
const Gold = () => {

    return (
        <Container>
            <Hover>
                <p>Gold</p>
            </Hover>

            <Content className='dropdown-menu'>

                <div className="row">

                    <div className="col-1">
                        <h1>Category</h1>
                        <a href="">BRACELETS</a>
                        <a href="">BRACELETS</a>
                        <a href="">EARRINGS</a>
                        <a href="">GOLD CHAINS</a>
                        <a href="">PENDANTS</a>
                        <a href="">RINGS</a>
                        <a href="">ENGAGEMENT RINGS</a>
                        <a href="">NECKLACES</a>
                        <a href="">NOSE PINS</a>
                        <a href="">KADAS</a>
                        <a href="">MANGALSUTRAS</a>
                    </div>

                    <div className="col-2">
                        <a href="">JHUMKAS</a>
                        <a href="">HOOP EARRINGS</a>
                        <a href="">STUD EARRINGS</a>
                        <a href="">DROP EARRINGS</a>
                        <a href="">MAANG TIKKA</a>
                        <a href="">NECKLACE SET</a>
                        <a href="">PENDANTS & EARRINGS SETS</a>

                    </div>


                    <div className="col-3">
                        <h1>MEN</h1>
                        <a href="">BRACELETS</a>
                        <a href="">CHAINS</a>
                        <a href="">ENGAGEMENT RINGS</a>
                        <a href="">KADAS</a>
                        <a href="">PENDANTS</a>
                        <a href="">RINGS</a>
                    </div>


                    <div className="col-4">
                        <h1>KIDS</h1>
                        <a href="">EARRINGS</a>
                        <a href="">ANKLETS</a>
                        <a href="">BANGLES</a>
                        <a href="">BRACELET</a>
                        <a href="">CHAIN</a>
                        <a href="">RINGS</a>

                    </div>

                    <div className="col-5">
                        <h1>GOLD COIN</h1>
                        <a href="">SPECIAL COINS</a>
                        <a href="">1 GRAM</a>
                        <a href="">2 GRAM</a>
                        <a href="">4 GRAM</a>
                        <a href="">5 GRAM</a>
                        <a href="">8 GRAM</a>
                        <a href="">10 GRAM</a>
                        <a href="">25 GRAM</a>
                        <a href="">30 GRAM</a>
                        <a href="">50 GRAM</a>
                        <a href="">100 GRAM</a>
                    </div>

                    <div className="col-6">

                    






                        <h1>METAL</h1>
                        <a href=""><FaRegCircle className='rose'/> Rose</a>
                        <a href=""><FaRegCircle className='white'/> WHITE</a>
                        <a href=""><FaRegCircle className='yellow'/> YELLOW</a>
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
width: 950px;
height: 420px;
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
      margin-left: -50px;
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
    margin-left: -90px;
    /* display: block; */
}

.col-4{
  margin-left: 20px;
}

.col-4 h1{
  margin-left: -12px;
}

.col-6 .rose{
    background-color: rgb(244,183,137);
    border-radius: 50px;
    border: none;
    color: white;
    
}  

.col-6 .white{
    background-color:rgb(209,209,209) ;
    border-radius: 50px;
    border: none;
    color: white;

    
}


.col-6 .yellow{
    background-color: rgb(252,221,105);
    border-radius: 50px;
    border: none;
    color: white;
}
}
`;


export default Gold