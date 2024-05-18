import React from 'react'
import styled from 'styled-components';
import { Grid } from '@mui/material';
import Card from './Card';
import { TbMathGreater } from 'react-icons/tb';
import ReactCardSlider from 'react-card-slider-component';


import "./css/collection.css"
import "./css/pickup.css"

import Image1 from "./img/ring.webp"
import { earringData } from './Data/data';
import Slider from './Slider';




const Recommanded = ({Image}) => {

  const slides = [
    { image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/511819HIIAAA00_1.jpg", title: "Traditional Minimal Hoop Earrings", description: "₹  36890" },
    { image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/513219JDLABB00_1.jpg", title: "Opulent Rawa Work Gold Jhumkas", description: "₹  115273" },
    { image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/50G3I1FBUAA09_1.jpg", title: "Bold Square Diamond Ring", description: "₹  61030" },
    { image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/51D2P1GIUAA00_1.jpg", title: "Bead and Tassels Diamond Pendant ", description: "₹  54981" },
    { image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/513220PQDAAA00_1.jpg", title: "Opulent Traditional Pendant", description: "₹  54981" },
    { image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/511250YIAAB00_1.jpg", title: "Classic Beaded Mangalsutra", description: "₹  54981" },
  ]
  

  return (
    <Container>
        <Heading>
        <h1>Recommended for you</h1>
      </Heading>
      <About>
        <p>Discover products tailored to your preferences and interests.</p>
      </About>
      <Border>
      <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
      </Border>
    
      {/* <ReactCardSlider slides={slides} /> */}
      <Slider/>


      <Banner>
        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwffe155d5/homepage/posters/gifting-banner-desktop-new.jpg" alt="" />
        <Button>
            <button>Explore More</button>
        </Button>
      </Banner>


      


    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: inherit;

`;



const Item = styled.div`
border: 1px solid lightgray;
width: 368px;
height: 375px;
/* margin: 10px; */
border-top-left-radius: 10px;
margin-left: 60px;

img{
  width: 368px;
  height: 310px;
/* border-radius: 8px; */
border-top-left-radius: 10px;

}
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
    width: 86%;
    margin-top: 40px;
}
`;

const Button = styled.div`
button{
    position: absolute;
    margin-top: -70px;
    margin-left: -60px;
    width: 140px;
    height: 40px;
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

export default Recommanded