import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/slider.css"
import { earringData } from './Data/data';
import axios from "axios"

// import { Divider } from '@mui/material';
// import { NavLink } from "react-router-dom"
// import { products } from './ProductData';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
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



const Slider = ({ title }) => {

  const [products,setProducts] = useState([])
  
  
  useEffect(()=>{
      axios.get('http://localhost:4000/product')
      .then(products => setProducts(products.data))
      .catch(err => console.log(err) )
  },[])
  

  return (
    <div className='products_section'>
      <div className="products_deal">
        <h3>{title}</h3>
        {/* <button className='view_btn'>View All</button> */}
      </div>

      {/* <Divider /> */}

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
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


                <div className="products_items">
                  <div className="product_img">
                    <img src={e.url} alt="productItem" />
                  </div>

                  

                  <h5 className='products_name'>{e.name}</h5>
                  <p className='products_price' style={{marginTop:"-10px"}}>{e.offerPrice}</p>

                </div>
            )
          })
        }



      </Carousel>
    </div>
  )
}

export default Slider