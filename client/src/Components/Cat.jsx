import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { earringData } from './Data/data';
import { TbMathGreater } from 'react-icons/tb';
import axios from "axios"
import { NavLink } from 'react-router-dom';
const Cat = () => {
const [products,setProducts] = useState([])

useEffect(()=>{
    axios.get('http://localhost:4000/product')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err) )
},[])

    
    return (
        <Container>


            <div className="card">
                {
                    products.slice(0,12).map((products, i) => (
                        
                        
                        <div className="cards">

                            <img src={products.url} alt="" />

                            <h1>{products.title}</h1>


                            <a href="">Explore</a>
            <p><TbMathGreater className='greater'/></p>

                        </div>

                    ))
                }
            </div>
        </Container>
    )
}



const Container = styled.div`
margin-top: 50px;


.cards{
    display: inline-flex;
    border: 1px solid lightgray;
    width: 178px;
    margin: 9px;
height: 250px;




    h1{
        
margin-top: 170px ;
margin-left: -146px;
font-size: 17px;
        font-weight: 500;
color: rgb(131,39,69);
    }

    a{
        margin-top: 200px ;
/* margin-left: -55px; */
font-size: 14px;
        text-decoration: none;
        color: black;
        font-weight: lighter;

        &:hover{
        cursor: pointer;
        color: red;
        transition: all .3s ease-in;
        margin-right: 20px;
      }
    }

    .greater{
      font-size: 13px;
      margin-top: 189px;
      margin-left: 10px;
      position: absolute;
      font-weight: lighter;



      &hover{
        margin-right: 40px;
        cursor: pointer;
        color: red;
        margin-left: 20px;

      }
    }
}


img{
    margin: 10px;
    margin-top: -1px;
    margin-left: 1px;
    width: 176px;
    height: 160px;

}


.cards:hover{
    box-shadow: 0 5px 8px 0 rgb(237,225,225), 0 6px 20px 0 rgb(237,225,225);
}

`;



export default Cat