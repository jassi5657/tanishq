import React from 'react'

import styled from "styled-components"
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
const Cart = () => {
  return (
    <Container>
        <br />
        <br />
        <br />
        <br />
        <br />

        <LeftSide>
            <DeliveryInfo>
<p>Check Delivery Info</p>
<p className='Country'>Country</p>
<select name="" id="">
    <option value="">IN</option>
    <option value="">IN</option>
    <option value="">IN</option>
    <option value="">IN</option>
    <option value="">IN</option>
    <option value="">IN</option>
    <option value="">IN</option>

</select>


<input type="text" placeholder='Pincode' />
<button>Check</button>
            </DeliveryInfo>


            <Message>
                <img  src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa3cdaba1/login_signup/cart.png" alt="" />
                <p>Your cart may expire soon, Click here to save your cart</p>
            </Message>
            <hr />
            <br />

            <MainContent>
                <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa3cfc9a2/images/hi-res/50D2FFHGWAAA29_1.jpg" alt="" />
                <div className="msg">

                <h1>Serene Lilac Hoop Earrings</h1>
                <p className='weight'>Weight : 3.773 g</p>
                <p className='price'>₹ 46464</p>


                <div className="remove"  style={{marginTop:"-13px"}}>

                <RiDeleteBin6Line style={{fontSize:"20px" , marginTop:"4px"}}/>
                <p style={{marginTop:"2px", marginLeft:"6px"}}> Remove </p>
                <p style={{marginTop:"2px", marginLeft:"10px"}}>|</p>
                <FaRegHeart style={{fontSize:"20px" , marginTop:"4px", marginLeft:"18px"}}/>
                <p style={{marginTop:"2px", marginLeft:"10px"}}> Move To WishList</p>
                </div>
<br />


                <div className="gift">

                <input type="checkbox"  />
                <p>Add Gift Message</p>
                </div>
                </div>
            </MainContent>
            <hr />
            <Delivery>
                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfef73f4d/cart-secure-delivery-new.png" alt="" />
            </Delivery>
            <hr />
        </LeftSide>

        <RightSide>
            <div className="code">
                <p className='enterCode'>Enter Code</p>
                <p className='promo'>View Prompo Code</p>
            </div>

            <div className="apply">
                <input type="text" placeholder='Enter Coupon Code'/>
                <button>Apply</button>
            </div>

            <div className="total">
                <h1>ORDER SUMMARY</h1>
                <br />
                <div className="row">

                <div className="left">
                    <p style={{fontSize:"15px"}}>sub Total</p>
                    <p style={{fontSize:"15px"}}>Discount</p>
                    <p style={{fontSize:"15px"}}>Delivery Charge</p>
                    <p style={{color:'rgb(131,39,41)', fontSize:"16px", fontWeight:"600"}}>TOTAL (Incl of all Taxes.)</p>
                    <p style={{color:"green", fontSize:"16px", fontWeight:"600"}}>YOU SAVE</p>
                </div>

                <div className="right">
                    <p>₹ 46639</p>
                    <p>- ₹ 0</p>
                    <p>FREE</p>
                    <p style={{color:'rgb(131,39,41)', fontSize:"17px", fontWeight:"600"}}>₹ 46639</p>
                    <p style={{color:"green", fontSize:"16px", fontWeight:"600"}}>+ ₹ 0</p>
                </div>
                </div>
            </div>
        </RightSide>
    </Container>
  )
}

const Container = styled.div`
margin-top: 55px;
`;
const LeftSide = styled.div`

margin-left: 75px;
width: 55%;
`;
const DeliveryInfo = styled.div`
/* text-align: justify; */
    display: inline-flex;
    margin: 10px;
    margin-left: -117px;

    p{
        font-size: 16px;
        font-weight: 600;
        margin-left: 100px;
    }

    .Country{
        margin-left: 330px;
        font-size: 12px;
        color: #908e8a;
        margin-top: 3px;
        background-color: #fff;
        position: absolute;
    }

    select{
        width: 100px;
        border-radius: 5px;
        height: 40px;
        margin-top: 10px;
        margin-left: 70px;

    }

    input{
        margin: 10px;
        width: 260px;
        height: 38px;
        border-radius: 5px;
        border: none;
        border: 1px solid lightgray;
        /* border-color: lightgray; */
        margin-left: 40px;
    }
    button{
        width: 80px;
        border: none;
        height: 42px;
        margin-top: 10px;
        border-radius: 5px;
color: white;
        background-color: rgb(131,39,41);
    }
    
`;
const Message = styled.div`
margin-right: 255px;
margin-top: 20px;
display: inline-flex;
img{
    width: 48px;
    height: 40px;
}
p{
    font-size: 18px;
    width: 470px;
    margin-top: 7px;
}
`;
const MainContent = styled.div`
margin-top: 20px;
img{
    width: 190px;
    float: left;
    margin-left: 5px;
    height: 190px;
    border-radius: 8px;
}
h1{
    font-size: 21px;
    
}

.weight{
    margin-top: -4px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(131,131,131);
}

.price{
    margin-top: -4px;
    font-size: 24px;
    font-weight: 500;
}

.msg{
    text-align: justify;
    margin-left: 250px;
}

.remove{
    display: inline-flex;
    /* margin-top: -40px; */
    /* justify-content: baseline; */
}


.gift{
    display: inline-flex;
    margin-top: -10px;
    
    input{
        /* height: 20px; */
        width: 15px;
    }

    p{
        margin-left: 10px;
    }

}



`;
const Delivery = styled.div`
margin-left: -30px;
img{
    width: 699px;
    height: 109px;
}
`;

const RightSide = styled.div`
width: 30%;
height: 420px;
margin-top: -400px;
margin-right: 85px;
float: right;
background-color: rgb(244,243,243);




.code{
    display: inline-flex;
    margin-left: -20px;
    margin-top: 10px;
}

.enterCode{
    font-size: 18px;
    font-weight: 600;
    width: 150px;
    text-align: justify;
    color: rgb(131,39,41);
    border-bottom: 2px solid rgb(131,39,41);
    margin: 12px;
}

.promo{
    font-size: 18px;
    font-weight: 600;

    width: 170px;
    text-align: justify;
    color: rgb(131,39,41);
    border-bottom: 2px solid lightgray;
    margin: 12px;
    margin-left: -10px;


}

.apply{
    margin-top: 10px;
    margin-left: 10px;
    input{
        height: 43px;
        width: 250px;
        border-radius: 5px;
        border: 1px solid;
        background-color: rgb(244,243,243);
    }
    
    button{
        height: 50px;
        border-radius: 8px;
        width: 90px;
        margin-left: 13px;
        background-color: rgb(131,39,41);
        color: white;
        font-weight: 600;
        border: none;
    }
}

.total{
    margin-top: 25px;
    h1{
        color: rgb(131,39,41);
        font-size: 20px;
        margin-left: -170px;
        
    }
}

.row{
    display: inline-flex;
    text-align: justify;
    float: left;
    margin-left: 33px;
    margin-top: -15px;
}


.right{
text-align: end;
    margin-left: 130px;
}


`;






export default Cart