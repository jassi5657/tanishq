import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaExchangeAlt, FaLessThan, FaPen, FaRegStar } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TiMessages } from "react-icons/ti";
import ImgSlider from '../ImgSlider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useStateValue } from '../../StateProvider';
const Product = ({ url, name, offerPrice }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket >>>>", basket);
  const addToBasket = (e) => {
    e.preventDefault();

    const item = {
      id: product.id,
      name: product.name,
      offerPrice: product.offerPrice,
      url: product.url,
      quantity: 1,
    };

    const existingItems = JSON.parse(localStorage.getItem('basket')) || [];
    const newItems = [...existingItems, item];
    localStorage.setItem('basket', JSON.stringify(newItems));

    dispatch({
      type: "ADD_TO_BASKET",
      item,
    });
  };

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }


  

  return (
    <Container>
      <p className='head'>Home | Product |<span> Riona Pearl Stud Earrings</span></p>

      <Row>

        <br />
        <br />
        <br />
        <Col1>

          <img src={product.url1} alt="" />
          <img src={product.url2} alt="" />
          <img src={product.url3} alt="" />



        </Col1>

        <Col2>
          <FaLessThan className='less' />
          <img src={product.url} alt="" />
          <FaGreaterThan className='great' />
        </Col2>

        <Col3>
          <CiHeart className='heart' />
          <CiShare2 className='share' />
          <br />
          <br />

          <p style={{marginLeft:"-30px"}}>{product.name}</p>
          <div className="star">
            <div className="star-star">

              <IoIosStarOutline />
              <IoIosStarOutline />
              <IoIosStarOutline />
              <IoIosStarOutline />
              <IoIosStarOutline />
            </div>
            <p style={{ marginLeft: "5px" }}>write a review</p>
          </div>
          <hr />
          <Content>
            <p style={{marginLeft:"55px"}}>{product.desc}</p>
          </Content>

          <Price style={{marginLeft:"-50px"}}><p>Price <span>{product.offerPrice}</span></p></Price>
          <PriceInfo style={{marginLeft:"-50px"}}><p>Price Inclusive of all taxes. See full <span> Price Breakup </span></p></PriceInfo>

          <Size>

            <Weight>
              <label className="weight">Gross Weight</label>
              <br />
              <select>
                <option value="">2.168g</option>
                <option value="">2.168g</option>
                <option value="">2.168g</option>
                <option value="">2.168g</option>

              </select>
            </Weight>
            <Qty>
              <label className='qtyLbale'>Qty</label>
              <br />

              <div className='qty'>
                <CiCircleMinus className='minus' />
                <h1>1N</h1>
                <CiCirclePlus className='plus' />
              </div>

            </Qty>
          </Size>

          <Purity>
            <Karat>
              <p>Gold Purity: 18 Karat</p>
              <DiamondWeight><p>Diamond weight: 0.115 c</p></DiamondWeight>
            </Karat>

            <Guides style={{marginLeft:"-60px"}}><p>Not sure what to buy? Check out our Buying Guides</p></Guides>

          </Purity>


          <Button style={{marginLeft:"-50px"}}>
            <button onClick={(e)=>addToBasket(e,product)}>Add To Cart</button>
            <button style={{ backgroundColor: "rgb(131,39,41)", color: "white", border: "none" }}>Buy Now</button>
          </Button>
          <hr />



          <Country>
            <label className='country'>Country</label>
            <select >
              <option>India</option>
              <option>India</option>
              <option>India</option>
              <option>India</option>
              <option>India</option>
            </select>

            <PinCode>
              <div className="location">

                <CiLocationOn className='loc' />
                <p>Pincode</p>
              </div>
              {/* <input type="text" placeholder='PinCode'  /> */}
              <button>Check</button>
            </PinCode>
          </Country>

          <br />



          <hr />


          <Text>

            <p><IoDiamondOutline style={{ fontSize: "20px" }} /> <span> Purity Guaranteed.</span></p>
            <p><FaExchangeAlt style={{ fontSize: "20px" }} /> <span> Exchange across all stores.</span></p>
            <p><LiaShippingFastSolid style={{ fontSize: "20px" }} /> <span> Free Shipping all across India</span></p>
          </Text>

          <hr />

          <Guranted>
            <h1>Still Confused What to Buy?</h1>
            <p>Get on live video call with our design experts, or visit your nearest Tanishq store to get an closer look and know more about the product.</p>
          </Guranted>


          <Experttalk style={{marginLeft:"-60px"}}>
            <button>Talk To Expert</button>
          </Experttalk>




        </Col3>
      </Row>

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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />



      <Col4>
        <ProductDetails>
          <h1>Product Details</h1>
          <p>The perfect statement danglers to complete your festive attire are here! Indulge your inner diva and let her shine bright at every gathering, with this glamorous pair!</p>
        </ProductDetails>

        <Specifications>
          <h1>Specifications</h1>
          <ul>
            <li>Earring Height: 2.6 Cm</li>
            <li>Earring Width: 0.3 Cm</li>
            <li>Brand: Tanishq</li>
            <li>Collection: Padmaja</li>
            <li>Gender: Women</li>

          </ul>
        </Specifications>
      </Col4>

      <Col5>
      <img src={product.url} style={{marginLeft:"810px"}} />
      </Col5>


      <PriceBreakup>
        <h1>Price Breakup</h1>
        <TopHead>
          <ul>
            <li>Component</li>
            <li>Gold Rate(18KT)</li>
            <li>Weight (g)</li>
            <li>Discount</li>
            <li>Final Value</li>
          </ul>
          <br />
          <hr className='line' />
        </TopHead>

        <List>
          <div className="listData">

          <ul>
            <li>18KT Plain Gold</li>
            <li>Stone Detail</li>
            <li>Making Charges</li>
          </ul>

          <ul style={{marginLeft:"50px"}}>
            <li>Rs 5138.18/g</li>
            <li style={{marginLeft:"60px"}}>-</li>
            <li style={{marginLeft:"60px"}}>-</li>
          </ul>

          <ul style={{marginLeft:"115px"}}>
            <li>2.145g</li>
            <li>0.115 ct/ 0.023 g</li>
            <li style={{marginLeft:"60px"}}>-</li>
          </ul>

          <ul style={{marginLeft:"50px"}}>
            <li>-</li>
            <li>-</li>
            <li>-</li>
          </ul>

          <ul style={{marginLeft:"130px"}}>
            <li>Rs 11021.4</li>
            <li>Rs 12273</li>
            <li>Rs 4827.00</li>
          </ul>

          </div>
          
          <hr className='line' style={{color:"rgb(131,39,41)"}}/>

          <div className="listData">

          <ul>
            <li>Sub Total</li>
            <br />
            <li >GST</li>
            <li><b>Grand Total</b></li>
          </ul>

          <ul style={{marginLeft:"80px"}}>
            <li style={{marginLeft:"60px"}}>-</li>
            <br />

            <li style={{marginLeft:"60px"}}>-</li>
          </ul>

          <ul style={{marginLeft:"170px"}}>
            <li><span style={{marginLeft:"20px"}}> 2.168g</span> <br /> (Gross Weight)</li>
            <br />
            <li style={{marginLeft:"60px", marginTop:"-1px"}}>-</li>
          </ul>

          <ul style={{marginLeft:"60px"}}>
            <li>-</li>
            <br />
            <li>-</li>
          </ul>

          <ul style={{marginLeft:"130px"}}>
            <li>Rs 28121.40</li>
            <li>Rs 843.64</li>
            <li><b>Rs 28965</b></li>
          </ul>

          </div>


        </List>


        <Image >
          <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites/default/dw05fc6be3/images/pdp/Promises_Banner_DesktopU.jpg" alt="" />
        </Image>

        <Review>
              <h1>Reviews</h1>
              <hr className='line'/>
              <Star>
                <IoIosStarOutline className='star'/>
                <IoIosStarOutline className='star'/>
                <IoIosStarOutline className='star'/>
                <IoIosStarOutline className='star'/>
                <IoIosStarOutline className='star'/>
<p>0 Reviews</p>
<Button1>
  <button><FaPen className='pen'/><span> Write a Review</span></button>
  <button><TiMessages style={{fontSize:"15px"}} /><span className='msg1'>Ask a Question</span></button>

</Button1>

              </Star>
        </Review>

      </PriceBreakup>

      <ImgSlider/>
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
      <br />
      <br />


    </Container>

  )
}

const Container = styled.div`
margin-top: 50px;


.head{
  /* margin-left: -700px; */
  float: left;
  margin-left: 70px;
  font-size: large;
  

  span{
    color: rgb(131,39,41);
    font-weight: 600;
  }
}
`;


const Row = styled.div`
/* background-color: red; */

`;
const Col1 = styled.div`
width: 15%;
margin-top: 100px;
margin-left: 30px;
img{
  margin: 10px;
}



`;
const Col2 = styled.div`
margin-left: 250px;
width: 35%;
margin-top: -410px;


img{
  width: 417px;
  height: 417px;
}

.less{
  margin-left: -33px;
  font-size: 22px;
  color: gray;
  margin-top: 200px;
  position: absolute;
}

.great{
  font-size: 22px;
  color: gray;

  margin-left: 20px;
  margin-top: 200px;
  position: absolute;
}

`;
const Col3 = styled.div`

  position: absolute;
  width: 40%;
  margin-top: -500px;
  margin-left: 750px;

.heart{
  font-size: 38px;
  margin-left: 370px;

  
}


.share{
  font-size: 38px;
  margin-left: 20px;
  
}

  p{
    font-size: 25px;
    font-weight: 700;
    margin-top: -10px;
    margin-left: 50px;
  }

  .star{
    display: flex;
    justify-content: baseline;
    margin-left: 55px;


    p{
      font-size: 18px;
      font-weight: 400;
    }
    
  }

  .star-star{
    font-size: 23px;
    margin-top: -5px;
  }

  hr{
    width: 90%;
    margin-left: 55px;
    border-color: rgb(131,39,41);
  }

  
  `;
const Content = styled.div`
  margin-top: 20px;
  p{
    text-align: start;
    font-size: 14px;
    font-weight: 400;
    margin-left: 50px;
    white-space: pre-wrap;
  }
  `;

const Price = styled.div`
  p{
    margin-left: -310px;
    font-size: 15px;
    span{
      font-size: 24px;
    }
  }
`;

const PriceInfo = styled.div`
p{
  font-size: 13px;
  margin-left: -165px;
  font-weight: 400;
}

`;

const Size = styled.div`
display: flex;
margin-left: 48px;
`;
const Weight = styled.div`
  font-size: 16px;
  font-weight: 500;

  .weight{
    margin-left: -20px;
  }

  select{
    margin-top: 10px;
    margin-left: 10px;
    width: 120px;
    height: 35px;
    /* text-align: ; */
    text-align:center;
    
    
  }

`;
const Qty = styled.div`
margin-left: 100px;
.qtyLbale{
  font-size: 15px;
  font-weight: 600;
}
.qty{
  display: flex;
  margin-top: 10px;

  

  .minus{
    font-size: 28px;
    margin-left: -15px;
    background-color: lightgray;
    border-radius: 50px;
    color: white;

  }

  .plus{
    font-size: 28px;
    margin-left: 15px;
    background-color: lightgray;
    border-radius: 50px;
    color: white;
  }

  h1{
    font-size: 15px;
    margin-left: 10px;
    margin-top: 3px;
    
  }
}
`;
const Purity = styled.div`

`;
const Karat = styled.div`
display: flex;
p{
  font-size: 15px;
  margin-top: 20px;
  font-weight: 500;
}
`;
const DiamondWeight = styled.div``;
const Guides = styled.div`
p{
  font-size: 14px;
  margin-left: -116px;
  font-weight: 400;

}

`;


const Button = styled.div`
button{
  width: 200px;
  height: 48px;
  background-color: white;
  border-radius: 5px;
  margin: 20px;
  font-size: 15px;
  font-weight: 600;
  
}
`;
const Country = styled.div`
margin-left: 55px;
margin-top: 30px;

display: flex;
  select{
    width: 200px;
    height: 40px;
    align-items: center;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    
  }

  
  option{
    margin-left: 10px;
    /* text-align: left; */
  }


  .country{
    position: absolute;
    margin-top: -10px;
    margin-left: 15px;
    width: 54px;

    font-size: 14px;
    height: 19px;
    background-color: white;
  }
`;
const PinCode = styled.div`
margin-left: 70px;

.location{
  border: 1px solid gray;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin-left: -30px;

  p{
    font-size: 16px;
    font-weight: 400;
    position: absolute;
    margin-top: 7px;
    color: rgb(25,21,12);
  }
}

  .loc{
    height: 50px;
    width: 30px;
    position: absolute;
    margin-left: -90px;
    margin-top: -6px;
    color: rgb(25,21,12);

  }

  button{
    margin-top: -32px;
    color: rgb(163,39,41);
    border: none;
    background-color: white;
    margin-left: 22px;
    font-size: 18px;
    position: absolute;
  }
`;
const Text = styled.div`
margin-top: 35px;
margin-left: 8px;
  p{
    font-size: 14px;
    font-weight: 600;
    text-align: start;
justify-content: baseline;
  }
  span{
    margin-top: -1px;
    margin-left: 8px;
    position: absolute;
  }
`;
const Guranted = styled.div`
margin-top: 30px;
h1{
  font-size: 20px;
  font-weight: 600;
  text-align: justify;
  margin-left: 56px;
}
p{
  width: 440px;
  font-size: 14px;
  font-weight: 400;
  text-align: justify;
  color: rgb(25,21,12);
  margin-left: 55px;
}
`;
const Experttalk = styled.div`
margin-top: 35px;
button{
  width: 435px;
  height: 50px;
  background-color: white;
  /* outline:1px; */
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
color  :gray ;
  margin-left: 12px;
  
}
`;


const Col4 = styled.div`
width: 50%;
margin-left: 60px;

`;
const ProductDetails = styled.div`
  h1{
    text-align: justify;
  font-size: 25px;

  }

  p{
    text-align: justify;
    width: 700px;
  }
`;
const Specifications = styled.div`
h1{
  font-size: 20px;
  text-align: justify;  
}

ul{
  list-style-type: none;
  text-align: justify;
  margin-left: -37px;
}
`;

const Col5 = styled.div`
width: 50%;
/* position: absolute; */
img{
width: 374px;
height: 374px;
margin-left: 810px;
margin-top: -318px;
}
`;

const PriceBreakup = styled.div`
h1{
  font-size: 27px;
  text-align: start;
  margin-left: 73px;
  font-weight: 600;
}
`;
const TopHead = styled.div`
ul{
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  margin-left: -140px;
  font-weight: 600;
  
  /* margin: 10px; */
}

.line{
  width: 90%;
  margin-left: 70px;
  border: 1px solid rgb(131,39,41);
}

`;

const List = styled.div`
.line{
  width: 90%;
  margin-left: 70px;
  border: 1px solid rgb(131,39,41);

}
ul{
  list-style-type: none;
  font-size: 17px;
}

.listData{
  display: flex;
  /* justify-content: space-evenly; */
  margin-left: 10px;


}

li{
  margin: 22px;
  text-align: justify;
}

`;


const Image = styled.div`
img{
  width: 100vw;

}
`;

const Review = styled.div`
.line{
  width: 90%;
  margin-left: 70px;
  border: 0.4px solid lightgray;
}
`;
const Star = styled.div`
margin-top: 50px;
.star{
  font-size: 25px;
  margin: 3px;
  color: rgb(131,39,41);
}
p{
  margin-top: -30px;
  margin-left: 220px;
  font-size: 14px;
}
`;
const Button1 = styled.div`
button{
  width: 220px;
  margin: 10px;
  border: none;
  color: white;
  height: 40px;
  background-color: rgb(131,39,41);
}
span{
  margin-left: 7px;
}

.pen{
  margin-left: -5px;
}


`;









export default Product