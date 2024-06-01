// import React from 'react'

// import styled from "styled-components"
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaRegHeart } from "react-icons/fa";
// import { useStateValue } from '../StateProvider';
// import { useNavigate } from 'react-router-dom';
// const Cart = () => {
//     const [{ basket }, dispatch] = useStateValue();
//   const navigate = useNavigate();
//   const removeFromBasket = (e, id) => {
//     e.preventDefault();

//     dispatch({
//       type: "REMOVE_FROM_BASKET",
//       id: id,
//     });
//   };

//   console.log("checkout >>>>>", basket);
//   return (
//     <Container>
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <LeftSide>
//             <DeliveryInfo>
// <p>Check Delivery Info</p>
// <p className='Country'>Country</p>
// <select name="" id="">
//     <option value="">IN</option>
//     <option value="">IN</option>
//     <option value="">IN</option>
//     <option value="">IN</option>
//     <option value="">IN</option>
//     <option value="">IN</option>
//     <option value="">IN</option>

// </select>


// <input type="text" placeholder='Pincode' />
// <button>Check</button>
//             </DeliveryInfo>


//             <Message>
//                 <img  src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa3cdaba1/login_signup/cart.png" alt="" />
//                 <p>Your cart may expire soon, Click here to save your cart</p>
//             </Message>
//             <hr />
//             <br />
// {
//     basket?.map((product) => (

    
//             <MainContent>
//                 <img src={product.url} alt="" />
//                 <div className="msg">

//                 <h1>{product.name}</h1>
//                 <p className='weight'>Weight : 3.773 g</p>
//                 <p className='price'>{product.offerPrice}</p>


//                 <div className="remove"  style={{marginTop:"-13px"}}>

//                 <RiDeleteBin6Line style={{fontSize:"20px" , marginTop:"4px"}}/>
//                 <p style={{marginTop:"2px", marginLeft:"6px", cursor:"pointer"}} onClick={(e) => removeFromBasket(e, product.id)}> Remove </p>
//                 <p style={{marginTop:"2px", marginLeft:"10px"}}>|</p>
//                 <FaRegHeart style={{fontSize:"20px" , marginTop:"4px", marginLeft:"18px"}}/>
//                 <p style={{marginTop:"2px", marginLeft:"10px"}}> Move To WishList</p>
//                 </div>
// <br />


//                 <div className="gift">

//                 <input type="checkbox"  />
//                 <p>Add Gift Message</p>
//                 </div>
//                 </div>
//                 <hr />
//             </MainContent>
//             ))
//         }
//             <Delivery>
//                 <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfef73f4d/cart-secure-delivery-new.png" alt="" />
//             </Delivery>
//             <hr />
//         </LeftSide>

//         <RightSide>
//             <div className="code">
//                 <p className='enterCode'>Enter Code</p>
//                 <p className='promo'>View Prompo Code</p>
//             </div>

//             <div className="apply">
//                 <input type="text" placeholder='Enter Coupon Code'/>
//                 <button>Apply</button>
//             </div>

//             <div className="total">
//                 <h1>ORDER SUMMARY</h1>
//                 <br />
//                 <div className="row">

//                 <div className="left">
//                     <p style={{fontSize:"15px"}}>sub Total</p>
//                     <p style={{fontSize:"15px"}}>Discount</p>
//                     <p style={{fontSize:"15px"}}>Delivery Charge</p>
//                     <p style={{color:'rgb(131,39,41)', fontSize:"16px", fontWeight:"600"}}>TOTAL (Incl of all Taxes.)</p>
//                     <p style={{color:"green", fontSize:"16px", fontWeight:"600"}}>YOU SAVE</p>
//                 </div>

//                 <div className="right">
//                     <p>₹ 46639</p>
//                     <p>- ₹ 0</p>
//                     <p>FREE</p>
//                     <p style={{color:'rgb(131,39,41)', fontSize:"17px", fontWeight:"600"}}>₹ 46639</p>
//                     <p style={{color:"green", fontSize:"16px", fontWeight:"600"}}>+ ₹ 0</p>
//                 </div>
//                 </div>
//             </div>
//         </RightSide>
        

//         <Button>
//             <div className="checkout">

//             <p>Total(1 item): ₹15903</p>
//             <button>Proceed to Checkout</button>
//             </div>
//         </Button>

//     </Container>
//   )
// }

// const Container = styled.div`
// margin-top: 55px;
// `;
// const LeftSide = styled.div`

// margin-left: 75px;
// width: 55%;
// `;
// const DeliveryInfo = styled.div`
// /* text-align: justify; */
//     display: inline-flex;
//     margin: 10px;
//     margin-left: -117px;

//     p{
//         font-size: 16px;
//         font-weight: 600;
//         margin-left: 100px;
//     }

//     .Country{
//         margin-left: 330px;
//         font-size: 12px;
//         color: #908e8a;
//         margin-top: 3px;
//         background-color: #fff;
//         position: absolute;
//     }

//     select{
//         width: 100px;
//         border-radius: 5px;
//         height: 40px;
//         margin-top: 10px;
//         margin-left: 70px;

//     }

//     input{
//         margin: 10px;
//         width: 260px;
//         height: 38px;
//         border-radius: 5px;
//         border: none;
//         border: 1px solid lightgray;
//         /* border-color: lightgray; */
//         margin-left: 40px;
//     }
//     button{
//         width: 80px;
//         border: none;
//         height: 42px;
//         margin-top: 10px;
//         border-radius: 5px;
// color: white;
//         background-color: rgb(131,39,41);
//     }
    
// `;
// const Message = styled.div`
// margin-right: 255px;
// margin-top: 20px;
// display: inline-flex;
// img{
//     width: 48px;
//     height: 40px;
// }
// p{
//     font-size: 18px;
//     width: 470px;
//     margin-top: 7px;
// }
// `;
// const MainContent = styled.div`
// margin-top: 20px;
// img{
//     width: 190px;
//     float: left;
//     margin-left: 5px;
//     height: 190px;
//     border-radius: 8px;
// }
// h1{
//     font-size: 21px;
    
// }

// .weight{
//     margin-top: -4px;
//     font-size: 14px;
//     font-weight: 500;
//     color: rgb(131,131,131);
// }

// .price{
//     margin-top: -4px;
//     font-size: 24px;
//     font-weight: 500;
// }

// .msg{
//     text-align: justify;
//     margin-left: 250px;
// }

// .remove{
//     display: inline-flex;
//     /* margin-top: -40px; */
//     /* justify-content: baseline; */
// }


// .gift{
//     display: inline-flex;
//     margin-top: -10px;
    
//     input{
//         /* height: 20px; */
//         width: 15px;
//     }

//     p{
//         margin-left: 10px;
//     }

// }



// `;
// const Delivery = styled.div`
// margin-left: -30px;
// img{
//     width: 699px;
//     height: 109px;
// }
// `;

// const RightSide = styled.div`

// width: 30%;
// height: 420px;
// margin-top: -200px;
// margin-right: 85px;
// float: right;
// background-color: rgb(244,243,243);




// .code{
//     display: inline-flex;
//     margin-left: -20px;
//     margin-top: 10px;
// }

// .enterCode{
//     font-size: 18px;
//     font-weight: 600;
//     width: 150px;
//     text-align: justify;
//     color: rgb(131,39,41);
//     border-bottom: 2px solid rgb(131,39,41);
//     margin: 12px;
// }

// .promo{
//     font-size: 18px;
//     font-weight: 600;

//     width: 170px;
//     text-align: justify;
//     color: rgb(131,39,41);
//     border-bottom: 2px solid lightgray;
//     margin: 12px;
//     margin-left: -10px;


// }

// .apply{
//     margin-top: 10px;
//     margin-left: 10px;
//     input{
//         height: 43px;
//         width: 250px;
//         border-radius: 5px;
//         border: 1px solid;
//         background-color: rgb(244,243,243);
//     }
    
//     button{
//         height: 50px;
//         border-radius: 8px;
//         width: 90px;
//         margin-left: 13px;
//         background-color: rgb(131,39,41);
//         color: white;
//         font-weight: 600;
//         border: none;
//     }
// }

// .total{
//     margin-top: 25px;
//     h1{
//         color: rgb(131,39,41);
//         font-size: 20px;
//         margin-left: -170px;
        
//     }
// }

// .row{
//     display: inline-flex;
//     text-align: justify;
//     float: left;
//     margin-left: 33px;
//     margin-top: -15px;
// }


// .right{
// text-align: end;
//     margin-left: 130px;
// }


// `;

// const Button = styled.div`
// /* position: fixed; */
// /* position: absolute; */
// /* margin-top: 400px; */
// .checkout{
//     margin-top: -110px;
//     position: fixed;
//     width: 100%;
//     height: 100px;
//     background-color: white;
//     color: rgb(140,55,57);
//     border: 1px solid;
//     font-size: 26px;
    
//     font-weight: 700;
// }

// p{
//     margin-left: -930px;
// }

// button{
//     position: absolute;
//     width: 200px;
//     height: 50px;
//     margin-left: 480px;
//     /* margin-top: -760px; */
//     margin-top: -60px;
//     background-color: rgb(140,55,57);
//     color: white;
//     border-radius: 8px;
// }
// `;






// export default Cart



import React from 'react'
// import "../Components/css/cart.css"
import { RiDeleteBinLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"


const Cart = () => {
        const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const removeFromBasket = (e, id) => {
    e.preventDefault();

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  console.log("checkout >>>>>", basket);
  return (
    <Container>
        <br />
        <br />
        <br />
        <br />


    <div className="top">
        
        <div className="info">

<p className='check'>Check Delivery Info</p>
<p className='country'>Country</p>
<select>
    <option>IN</option>
    <option>IN</option>
    <option>IN</option>
    <option>IN</option>
    <option>IN</option>

</select>

<input type="text" placeholder='Pincode' className='pin'/>
<button>Check</button>
</div>

<br />
<br />
<br />


<div className="cartLogo">


<img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa3cdaba1/login_signup/cart.png" className="cart" />
<p>You have one reward waiting for you! Claim Now</p>
</div>
    </div>
<hr style={{width:"60%", marginLeft:"70px"}} />

<div className="main">


<div className="leftSide">
    {
        basket.map((product)=>(

        
    <div className="card">

    {/* <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3759716d/images/hi-res/50D4I1GMDAAPL_1.jpg" alt="" /> */}
    <img src={product.url} alt="" />
    <div className="content">

    <h3>Whimsical Pearl Pendant with Chain</h3>
    <p className='weight'>Weight : 2.328 g | Size : 18 INCHES</p>
    <p className='price'>{product.offerPrice}</p>

    <div className="remove">
        <RiDeleteBinLine className='removeLogo'/>
      <p style={{marginTop:"2px", marginLeft:"6px", cursor:"pointer"}} onClick={(e) => removeFromBasket(e, product.id)}> Remove <span style={{marginLeft:"15px"}}>|</span></p>

        {/* <p className='removeP'>Remove </p> */}
        <CiHeart className='removeLogo' style={{marginLeft:"12px"}}/>
        <p className='removeP'>Move to Wishlist</p>
        </div>
        <br />

    <hr style={{width:"850px", marginLeft:"-240px"}}/>


    </div>
    <br />
    <br />

    </div>
    ))
}
</div>

<div className="rightSide">
    <div className="code">
    <h1 className='enterCode'>Enter Code</h1>
    <h1 className='promo'>View Promo Codes</h1>
    </div>

<div className="input">

    <input type="text" placeholder='Enter Coupon Code' />
    <button>Apply</button>
</div>

<h3 style={{marginLeft:"-150px"}}>ORDER SUMMERY</h3>

<div className="list">


<ul>
    <li>Sub Total</li>
    <li>Discount</li>
    <li>Delivery charges</li>
    <li>Total (Incl of all taxes)</li>
    <li>You Save</li>
</ul>

<ul>
    <li>₹ 15903</li>
    <li>- ₹ 0</li>
    <li>FREE</li>
    <li>₹ 15903</li>
    <li>+ ₹ 0</li>

</ul>

</div>

</div>
<div className="total">
    <h1 style={{marginTop:"30px"}}>Total ({basket.length} Item) : ₹ 15953 </h1>
    <button onClick={() => navigate("/address")}>Proceed to Checkout</button>
</div>
</div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />



    </Container>

  )
}

const Container = styled.div`
margin-top: 60px;


.info{
    display: inline-flex;
    margin: 20px;
    margin-left: -300px;
}

.info .check{
    color: rgb(131,39,41);
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    margin-left: -270px;
    /* margin: 0px; */
}

 select{
    margin: 10px;
    width: 100px;
    font-size: 16px;
    height: 50px;
    border-radius: 8px;
}

.country{
    background-color: #fff;
    height: 20px;
    margin-left: 27px;
    margin-top: -1px;
    position: absolute;
}

.pin{
    height: 45px;
    width: 220px;
    margin-top: 10px;
    border-radius: 8px;

}

.info button{
    margin: 10px;
    width: 100px;
    font-weight: 600;
    font-size: 16px;
    color: white;
    background-color: rgb(131,39,41);
    border-radius: 8px;
}


.cartLogo{
    display: inline-flex;
    margin-left: -850px;
    

}

.cartLogo img{
    width: 40px;
    height: 50px;
    margin-top: 10px;
}

.cartLogo p{
    font-size: 20px;
}

.leftSide{
    /* float: left; */
    margin-left: 70px;
    margin-top: 20px;
}

.leftSide img{
    width: 190px;
    height: 190px;
    margin-left: -1200px;
}

.content{
    /* position: absolute; */
    display: grid;
    text-align: start;
    margin-left: -300px;
    margin-top: -210px;
    /* position: absolute; */
}

.content h3{
    width: 280px;
    /* background-color: red; */
}

.weight{
    font-size: 16px;
    color: gray;
    margin-top: -15px;
}

.price{
    font-size: 26px;
    margin-top: -8px;
    font-weight: bolder;
}

.remove{
    font-size: 17px;
    display: flex;
    margin-top: -9px;
}

.removeLogo{
    font-size: 23px;
}

.removeP{
    margin-top: 1px;
    margin-left: 6px;
}

.rightSide{
    background-color: rgb(244,243,243);
    position: absolute;
    width: 30%;
    margin-left: 430px;
    /* float: right; */
    /* margin-left:; */
}


.enterCode{
    padding: 5px;
    border-bottom: 3px solid rgb(131,39,41) ;
    width: 150px;
    /* background-color: red; */
}

.promo{
    padding: 5px;
    border-bottom: 3px solid lightgray ;
    width: 160px;
}


.code h1{
    display: inline-flex;
    font-size: 16px;
}

.input{
    display: inline-flex;

}

.input input{
    height: 45px;
    width: 200px;
    margin: 20px;
    margin-left: 10px;
    border-radius: 8px;
}

.input ::placeholder{
    padding: 20px;
    background-color: rgb(244,243,243) ;
    font-size: 16px;
}


.input button{
    border-radius: 8px;
background-color: rgb(131,39,41);
color: white;
font-weight: 600;
    width: 100px;
    height: 45px;
    margin-top: 20px;
}


.list{
    display: inline-flex;
    margin-left: -100px;
}

ul{
text-align: start;
/* margin: 20px; */

/* padding: 20px; */
    list-style-type: none;
}

li{
    margin: 10px;
    font-size: 18px;
}


.main{
    display: inline-flex;
}

.total{
    /* position: absolute; */
    margin-top: 410px;
    /* width: 100%; */
    /* margin-left: 350px; */
    height: 100px;
    background-color: #fff;
}

.total h1{
    float: left;
    position: absolute;
    font-size: 23px;
    margin-left: 30px;
    /* margin-top: 20px; */
    color: rgb(131,39,41);
    /* margin-top: 200px; */
}

.total button{
    /* float: right; */
    position: absolute;
width: 200px;
height: 50px;
border-radius: 8px;
color: white;
font-weight: 600;
margin-top: 20px;
/* margin-right: 80px; */
margin-left: 300px;
border: none;
/* align-items: center; */
background-color: rgb(131,39,41);
}

`;

export default Cart