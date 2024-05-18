import React, { useState } from 'react'
import styled from 'styled-components';
import { FaLessThan } from "react-icons/fa";

const Earrings = () => {

  return (
    <Container>
      <Hover>
        <p>EARRINGS</p>
      </Hover>

      <Content className='dropdown-menu'>

        <div className="row">

        <div className="col-1">
        <h1>STYLE</h1>
            <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7773c9b5/All%20Earrings%2040.png" alt="" />

        <a href="">ALL EARRINGS</a>

            <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw5f2c52fa/Drop%20&%20Danglers%2040.png" alt="" />

        <a href="">DROP & DANGLERS</a>

            <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3b5ca4b4/Group%2010(1).png" alt="" />

        <a href="">HOOP & HUGGIES</a>

            <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwd9f6109b/Jhumkas.png" alt="" />

        <a href="">JHUMKAS</a>

        </div>

        <div className="col-2">
        <h1>METAL & STONES</h1>

            <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9210c614/diamond%20resized.png" alt="" />
        <a href="">DIAMOND</a>

            <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwcfeb4ccd/gemstone%20resized.png" alt="" />

        <a href="">GEMSTONE</a>
                <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwf38b3449/Group%2010.png" alt="" />

            <a href="">GOLD</a>

            <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwb1fa4f17/Group%207.png" alt="" />

        <a href="">PLATINUM</a>


            <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9ecea101/Group%208.png" alt="" />

        <a href="">ROSE GOLD</a>
        </div>




        <div className="col-3">
          <h1>OCCASION</h1>
        <a href="">CASUAL WEAR</a>
        <a href="">MODERN</a>
        <a href="">TRADITIONAL</a>
        <a href="">WEDDING</a>
        <a href="">WORK WEAR</a>
        </div>

        <div className="col-4">
        <h1>PRICE BAND</h1>
        <a href=""><FaLessThan/>25K</a>
        <a href="">25K-50K</a>
        <a href="">  50K-1L</a>
        <a href="">1L & ABOVE</a>
        </div>

        <div className="col-5">
        <h1>GENDER</h1>
        <a href="">WOMEN'S EARRINGS</a>
        <a href="">KIDS & TEENS</a>
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
background-color: red;
background-color: white;
color: rgb(131,39,41);
width: 890px;
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

  img{
    width: 30px;
    height: 30px;
  }

  .col-1{
    margin-left: 20px;
  }

  .col-1 img{
    display: flex;
  }

  .col-1 h1{
      margin-left: -130px;
  }

  .col-1 a{
    margin-top: -25px;
    margin-left: 35px;
  }


  .col-2 {
    margin-top: 15px;
    margin-left: 25px;
}

.col-2 img{
    display: flex;

}

.col-2 a{
 margin-top: -25px;
 margin-left: 35px;
    
}

.col-2 h1{
  margin-top: -2px;
  margin-left: -1px;
}

.col-3{
    margin-left: 30px;
}

.col-3 h1{
    margin-left: -1px;
    /* display: block; */
}

.col-4{
  margin-left: 20px;
}

.col-4 h1{
  margin-left: 20px;
}

.col-5{
    margin-left: 20px;
}

.col-5 h1{
  margin-left: -56px;
}

  

}
`;


export default Earrings