import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { earringData } from './Data/data';
import { TbMathGreater } from 'react-icons/tb';
import axios from "axios"
import { NavLink } from 'react-router-dom';
import { categoryProduct } from './Data/categoryProduct';
import Earrings from './category/Earrings';
import Coin from './category/Coin';
import Rings from './category/Rings';
import Pendant from './category/Pendant';
import Bangle from './category/Bangle';
import Chains from './category/Chains';
const Cat = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/product')
            .then(products => setProducts(products.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <Container>


            {/* <div className="card"> */}


                {/* <div className="cards"> */}
                <div className="row">


                <Earrings />
                <Coin />
                <Rings />
                <Pendant />
                <Bangle />

                <Chains />
                </div>
                <div className="col">
                <Earrings />
                <Earrings />
                <Earrings />
                <Earrings />
                <Earrings />
                <Earrings />

                

                </div>



                {/* <a href="">Explore</a>
            <p><TbMathGreater className='greater'/></p> */}

                {/* </div> */}

            {/* </div> */}
        </Container>
    )
}



const Container = styled.div`
width: 90%;
margin-top: 10px;
margin-left: 100px;
    /* margin-top: -20px; */

    .row{
        display: flex;
        /* margin: 10px; */
        /* gap: 15px; */
        width: 100%;
        /* background-color: red; */
        /* overflow: scroll; */
        
    }

    .col{
        /* margin-left: -100px;  */
         display: flex;
        /* gap: 15px; */

    }

.cards{
    display: inline-flex;
    border: 1px solid lightgray;
    width: 178px;
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
    width: 176px;
    height: 176px;

}


.cards:hover{
    box-shadow: 0 5px 8px 0 rgb(237,225,225), 0 6px 20px 0 rgb(237,225,225);
}

`;




export default Cat

