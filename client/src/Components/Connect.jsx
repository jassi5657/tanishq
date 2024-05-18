import React from 'react'
import styled from 'styled-components'
import connect from "./img/connect.png"


const Connect = () => {
  return (
    <Container>
    <Heading>
    <h1>Connect With Us</h1>
  </Heading>
  <About>
    <p>We are always available to guide you at your convenience.</p>
  </About>
  <Border>
  <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
  </Border>

  <Image>
    <img src={connect} alt="" />
  </Image>

</Container>
)
}

const Container = styled.div`
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
const Image = styled.div``;

export default Connect