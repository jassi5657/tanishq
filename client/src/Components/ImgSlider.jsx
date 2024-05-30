import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/slider.css"
import { earringData } from './Data/data';
import axios from "axios"
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const ImgSlider = ({ title }) => {

  const [products,setProducts] = useState([])
  
  
  useEffect(() => {
    axios.get('http://localhost:4000/product')
     .then(products => {
        const earringProducts = products.data.filter(product => product.category.toLowerCase() === 'newarrival');
        setProducts(earringProducts);
      })
     .catch(err => console.log(err));
  }, []);
  

  return (

    <Container>

      <Heading>
        <h1>New Arrivals</h1>
      </Heading>
      <About>
        <p>This season's most loved, customer favorite designs - curated just for you!</p>
      </About>
      <Border>
      <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
      </Border>





       
      



    <div className='products_section' style={{marginTop:"-80px"}}>
      <div className="products_deal">
        <h3></h3>
        {/* <button className='view_btn'>View All</button> */}
      </div>

      {/* <Divider /> */}

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={true}
        // centerMode={true
        initialSlide={0}
        
        // autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass=''
        containerClass='carousel-container' >
        {
          products.map((e) => {
            return (

              <Link to={`/product/${e._id}`} key={e._id}>
                <div className="products_items">
                  <div className="product_img">
                    <img src={e.url} alt="productItem" />
                  </div>

                  

                  <h5 className='products_name' style={{width:"230px",
                    marginLeft:"-2px"

                  }}>{e.name}</h5>
                  <p className='products_price' style={{marginTop:"-10px", marginLeft:"-160px"}}>{e.offerPrice}</p>

                </div>
                </Link>
            )
          })
        }



      </Carousel>
    </div>
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
}
`;

const Border = styled.div`
margin-top: -20px;
width: 90%;
margin-left: 70px;
`;

const Item = styled.div`
border: 1px solid lightgray;
width: 176px;
height: 250px;

img{
  width: 176px;
  height: 160px;
}
`;




const Desc = styled.div`
    h1{
        font-size: 17px;
        font-weight: 500;
color: rgb(131,39,69);

    }
`;
const Button = styled.div`
        margin-top: -4px; 
        text-align: center;
        margin-left: -13px;
a{
        font-size: 14px;
        text-decoration: none;
        color: black;
        font-weight: lighter;
    }

     
   a:hover{
        cursor: pointer;
        color: red;
      }

  p .greater{
      font-size: 13px;
      margin-top: -30px;
      margin-left: 30px;
      position: absolute;
      font-weight: lighter;


      &hover{
        margin-right: 40px;
        cursor: pointer;
        color: red;

      }
    }

`;

export default ImgSlider