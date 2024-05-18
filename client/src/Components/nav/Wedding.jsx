import React, { useState } from 'react'
import styled from 'styled-components';
import { FaLessThan } from "react-icons/fa";

const Wedding = () => {

  return (
    <Container>
      <Hover>
        <p>WEDDING</p>
      </Hover>
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



export default Wedding