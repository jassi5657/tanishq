import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/slider.css"
import { earringData } from './Data/data';
import axios from "axios"
import { Link } from 'react-router-dom';



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



const Slider = ({ title }) => {

  const [products,setProducts] = useState([])
  
  
  useEffect(() => {
    axios.get('http://localhost:4000/product')
     .then(products => {
        const earringProducts = products.data.filter(product => product.category.toLowerCase() === 'earrings');
        setProducts(earringProducts);
      })
     .catch(err => console.log(err));
  }, []);
  

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
        showDots={true}
        // centerMode={true
        initialSlide={0}
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
  )
}

export default Slider