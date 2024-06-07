import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { categoryProduct } from './Data/categoryProduct';
import { TbMathGreater } from "react-icons/tb";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [products,setProducts] = useState([])

useEffect(()=>{
    axios.get('http://localhost:4000/product')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err) )
},[])
  return (
    <Container>
            {
              
              
              products.map((products,i)=>(
                
                
                <div className="cards">
                  {/* <Link to={`/product/${products._id}`} key={products._id}> */}
                    <img src={products.url} alt="" />
                    {/* <h1 className='head'> {products.name}</h1> */}
                    <h1 className='head'> {products.category}</h1>

                    
                    {/* <p className='price'>{products.price}</p> */}
                    <a href="">Check Delivery Date <span><TbMathGreater/></span></a>
              {/* </Link> */}
              </div>

                ))
            }
    </Container>
  )
}

const Container = styled.div`
margin-top: 60px;


.cards{
  /* margin-top: 50px; */
  display: inline-flex;
    border: 1px solid lightgray;
  margin: 10px;
    width: 270px;
    height: 360px;
}


img{
  margin: 10px;
  width: 245.25px;
  height: 245.25px;
}

.head{
  width: 240px;
  margin-top: 270px;
  position: absolute;
  margin-left: 10px;
  text-align: start;
  font-size: 13px;
  font-weight: 600;
  text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
}

.price{
  margin-top: 296px;
  position: absolute;
  margin-left: 13px;
  font-weight: 600;

}

a{
  margin-top: 326px;
  position: absolute;
  margin-left: 13px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  color: rgb(131,39,41);

  span{
    position: absolute;
    margin-top: 3px;
    margin-left: 4px;
  }

}

`;

export default AllProducts