import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TbMathGreater } from 'react-icons/tb';
import axios from "axios"

const Pendant = () => {
const [products,setProducts] = useState([])

useEffect(()=>{
    axios.get('http://localhost:4000/product')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err) )
},[])

    
    return (
        <Container>


            <div className="card">
                
                        
                        <div className="cards">

<img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3617b276/homepage/shopByCategory/fod-pendants.jpg" alt="" />
                            <h1>Pendant</h1>


                            <a href="">Explore</a>
            <p><TbMathGreater className='greater'/></p>

                        </div>

                
            </div>
        </Container>
    )
}



const Container = styled.div`


.cards{
    border: 1px solid lightgray;
    width: 186px;
    
    
    margin: 15px;
height: 280px;




    h1{
        position: absolute;
        height: 10px;
        width: 400px;
margin-top: 190px;
margin-left: -116px;
font-size: 17px;
        font-weight: 500;
color: rgb(131,39,69);
    }

    a{
        margin-top: 225px ;
        margin-left: -130px;
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
      margin-top: 215px;
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
    width: 185px;
    height: 176px;

}


.cards:hover{
    box-shadow: 0 5px 8px 0 rgb(237,225,225), 0 6px 20px 0 rgb(237,225,225);
}

`;



export default Pendant