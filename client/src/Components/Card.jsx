import React from 'react'
import styled from 'styled-components'
import { CiHeart } from "react-icons/ci";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { earringData } from './Data/data';

const Card = () => {
  return (
    <>
    {
        earringData.map((earringData,i)=>(

        

    
    <Container>
        <Image>
            <CiHeart className='heart'/>
            {/* <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd45f1640/images/hi-res/50D2I2DWFAAA09_1.jpg" alt="" /> */}
            <img src={earringData.img} alt="" />
        </Image>

        <Heading>
            
            <Description>
                <h1>Refined Glam Diamond Drop Earrings</h1>
            </Description>

            <Price>
                <p>₹ 33900 <span>₹ 35684</span></p>
                <h5>Flat 5% off</h5>
            </Price>


        </Heading>

    </Container>
    ))
    }
    </>
  )
}

const Container = styled.div`
/* margin-left: 50px; */
`;

const Image = styled.div`
border: 1px solid lightgray;
height: 325px;
align-items: center;
width: 264px;
margin-left: 30px;

img{
    width: 245px;
    height: 245px;
    margin-top: 10px;
}


.heart{
    width: 40px;
    height: 30px;
    position: absolute;
    margin-left: 180px;
    margin-top: 25px;
    background-color: #fff;
    border-radius: 50%;
    color: gray;
}
`;

const Heading = styled.div`
/* position: absolute; */
margin-top: -48px;
float: left;
margin-left: -10px;

`;



const Description = styled.div`

h1{
    font-size: 13px;
    margin-top: -10px;
    margin-left: 43px;

}

`;

const Price = styled.div`
p{
    margin-left: -68px;
    font-weight: bolder;

    span{
        text-decoration: line-through;
        font-size: 12px;
        color: gray;
        margin-left: 8px;
    }
}

h5{
    /* float: right; */
    margin-left: 230px;
    margin-top: -34px;
    color: red;
    font-size: 13px;
}

`;


export default Card