import React from 'react'
import styled from 'styled-components'
import banner from "./img/banner.png"
import jewGuide from "./img/jew_guide.png"



const JewelleryGuide = () => {
  return (
    <Container>
        <Banner>
            <img src={banner} alt="" />
            <Button1>
            <button>Arrange a Callback</button>
            <button style={{marginLeft:"300px"}}>Explore Now</button>
        </Button1>
        </Banner>


        <Heading>
        <h1>Jewellery Guides</h1>
      </Heading>
      <About>
        <p>Check out our ready made guides to make your buying process easier.</p>
      </About>
      <Border>
      <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
      </Border>

      <Image>
        <img src={jewGuide} alt="" />
      </Image>

    </Container>
  )
}

const Container =styled.div`
    margin-top: 50px;
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


const Banner = styled.div`
img{
     width: 83%;
    /*
    margin-top: 40px; */
}
`;

const Button1 = styled.div`
button{
    position: absolute;
    margin-top: -85px;
    margin-left: 103px;
    width: 182px;
    height: 50px;
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

const Image = styled.div`
img{
    
}
`; 

export default JewelleryGuide