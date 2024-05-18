import React, { useState } from 'react'
import styled from 'styled-components';
import { FaLessThan } from "react-icons/fa";

const More = () => {

    return (
        <Container>
            <Hover>
                <p>MORE</p>
            </Hover>

            <Content className='dropdown-menu'>

                <div className="row">

                    <div className="col-1">
                        <a href="">BRANDS</a>
                        <a href="">ENCIRCLE</a>
                        <a href="">DIGITAL GOLD</a>
                        <a href="">CURRENCY SELECTOR</a>
                        <a href="">BOOK AN APPOINTMENT</a>
                        <a href="">GOLD RATE</a>

                        
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
width: 280px;
height: 200px;
margin-left: -120px;
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
  margin-top: 15px;

  .col-1 h1{
      margin-left: -20px;
  }


  .col-2 {
    /* margin-top: 45px; */
    margin-left: 30px;
    /* display: block; */
}

.col-3{
    margin-left: 30px;

}



}
`;


export default More