import React from 'react'
import ReactCardSlider from 'react-card-slider-component';
import "./css/imgslider.css"
import styled from 'styled-components';

const ImgSlider = () => {
  // a slide object contains the image link, title and function/click event for when a user clicks on a card
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
        <h1>Best of Tanishq</h1>
      </Heading>
      <About>
        <p>Shop the year's most cherished products</p>
      </About>
      <Border>
      <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
      </Border>



      <ReactCardSlider slides={slides} />
    </Container>

  )
}

const Container = styled.div`
width: 100%;
/* background-color: red; */
height: inherit;

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
  /* border-bottom: 1px solid; */
}
`;

const Border = styled.div`
margin-top: -20px;
width: 90%;
margin-left: 70px;
`;



export default ImgSlider