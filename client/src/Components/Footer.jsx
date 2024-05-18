import React from 'react'
import styled from 'styled-components'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import visa from "./img/visa.png"

const Footer = () => {
    return (
        <Container>
            {/* <FooterTop>
                <Heading>
                    <h1>WELCOME TO A WORLD WHERE DIAMONDS TRULY SHINE – WELCOME TO TANISHQ. 💎 <span>✨</span> </h1>
                </Heading>
                <br />
                <br />
                <br />


                <Content>
                    <p>When it comes to the world of diamonds, Tanishq stands as the beacon of brilliance and innovation. Renowned as the premier diamond jeweler, we have redefined luxury and sophistication through our exquisite diamond collections. Discover the unmatched craftsmanship, precision, and sheer magnificence that make Tanishq the destination of choice for those who seek the very best in diamond jewelry. Welcome to a world where diamonds truly shine – welcome to Tanishq. 💎  ✨</p>
                </Content>

                <Content>
                    <p>Casual Wear Collection: For the days when you want to add a subtle touch of elegance to your everyday attire, our casual wear collection is designed just for you. Discover delicate pieces that seamlessly blend into your daily life, enhancing your natural beauty with a touch of sophistication.</p>
                </Content>

                <Content>
                    <p>Daily Wear Essentials: Our daily wear collection is a testament to comfort and grace. Crafted with precision and care, these pieces are lightweight and durable, perfect for your busy lifestyle. Elevate your everyday look effortlessly, embracing the charm of understated elegance.</p>
                </Content>

                <Content>
                    <p>Party Wear Extravaganza: When it's time to celebrate, our party wear collection takes center stage. Dazzling diamonds, lustrous gemstones, and intricate designs come together to create pieces that steal the spotlight. Make a statement at every party, turning heads and leaving a lasting impression with our glamorous party wear jewelry.</p>
                </Content>

                <Content>
                    <p>Versatility Redefined: Whether you're attending a casual brunch, going to work, or dancing the night away at a grand celebration, our jewelry seamlessly transitions from one occasion to another. Each piece is thoughtfully designed to complement various styles, making them a perfect addition to your versatile wardrobe.
                        At Tanishq, we understand the importance of finding the right jewelry for every moment. Explore our diverse collections and let your jewelry reflect your mood, enhancing your beauty and confidence wherever you go. Your perfect piece awaits, designed with love and crafted with precision, only at Tanishq.</p>
                </Content>

                <Heading>
                    <h1>ELEVATE YOUR ONLINE DIAMOND SHOPPING EXPERIENCE WITH TANISHQ</h1>
                </Heading>

                <Content>
                    <p>Explore our extensive collections, from classic solitaires to contemporary masterpieces, all designed to capture the essence of your unique style. With secure transactions, expert guidance, and the assurance of Tanishq's quality, your online diamond shopping experience becomes not just convenient, but also a celebration of sophistication and trust. Discover the perfect diamond that reflects your essence, effortlessly, online at Tanishq. Discover the perfect diamond that reflects your essence, effortlessly, online at Tanishq.</p>
                </Content>
            </FooterTop> */}
            


            <MainFooter>
                <List>
                    <ul>
                        <h3>Useful Links</h3>
                        <li>Delivery Information</li>
                        <li>International Shipping</li>
                        <li>Payment Options</li>
                        <li>Track your Order</li>
                        <li>Returns</li>
                        <li>Find a Store</li>
                    </ul>
                </List>

                <List>
                    <ul>
                        <h3>Information</h3>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Offers & Contest Details</li>
                        <li>Help & FAQs</li>
                        <li>About Tanishq</li>
                    </ul>
                </List>

                <List>
                    <ul>
                        <h3>Contact Us</h3>
                        <li><CiMail style={{fontSize:"30px"}}/> <span>Write to Us</span>  </li>
                        <li><FaPhoneAlt style={{fontSize:"30px"}}/> <span> 1800-266-0123</span> </li>
                        <li><FaRegMessage style={{fontSize:"30px"}}/> <span>Chat with Us</span> </li>
                        <li></li>
                        <li></li>
                    </ul>
                </List>

                <List>
                    

                
<ul>
                <App>
                    <h3>Download the Tanishq App <br /> Now</h3>
                </App>

                <br />
                <br />
                

                <AppLogo>
                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3727ec18/images/footer/appstore-d.png" alt="" />
                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa17f8ad4/images/footer/Component%20145%20%E2%80%93%201@2x.png" alt="" />
                </AppLogo>
                <br />
                

                <Follow>
                    <h3>Follow Us On   </h3>
                    <h1>

                    <span><FaFacebookF/></span>  <span><RiTwitterXFill/></span>  <span><FaInstagram/></span>
                    </h1>
                </Follow>
                </ul>
                </List>

                <hr />
                <br />
                
                <Last>
                    <img src={visa} alt="" />
                    <CopyWrite>
                        <p>© 2023 Titan Company Limited. All Rights Reserved.</p>
                        <h6>Terms & Conditions <span>|</span> Privacy Policy</h6>
                    </CopyWrite>
                </Last>
                <br />
                <br />
                <br />


            </MainFooter>
        </Container>
    )
}

const Container = styled.div`
    /* background-color: red; */
width: 86.4%;
height: inherit;
margin-left: 80px;
color: rgb(163,96,97);
margin-top: 50px;

`;
const FooterTop = styled.div`

`;
const Heading = styled.div`


h1{
    font-size: 29px;
    /* margin-left: 30px; */
    font-weight: 400;
    text-decoration: underline;
}
span{
    float: left;
    text-decoration: underline;
    margin-left: 15px;
}
`;


const Content = styled.div`
height: 130px;
border: 1px solid;
border-radius: 5px;
box-shadow: 2px 2px 10px;
margin: 10px;

p{
    padding: 20px;
    width: 1120px;
    text-align :  left ; 
    font-size: 13px;
}


`;


const MainFooter = styled.div`
width: 119%;
margin-left: -100px;
height: inherit;
background-color: rgb(239,227,227);

hr{
    width: 85%;
    size: "10";
    height: 2px;
    background-color: black;
    border: none;
    color: black;
    
}

`;


const List = styled.div`
display: inline-flex;
justify-content: baseline;
/* margin-right: 200px; */


ul{
    list-style-type: none;
    text-align: justify;
    margin-right: 28px;
}

ul h3{
    margin-left: 30px;
}

li{
    color: black;
    margin: 30px;
    font-size: 19px;
    
}

`;



const App = styled.div`
    margin-top: -100px;
    color: black;
`;
const AppLogo = styled.div`
margin-left: 25px;

img{
    width: 130px;
    height: 40px;
    
}
`;
const Follow = styled.div`

h3{
    color: black;
};

h1{
    margin-top: -50px;
    margin-left: 140px;
    color: black;
    
}

span{
    margin: 10px;
    font-size: 30px;
}
`;


const Last = styled.div`

img{
    float: left;
    margin-left: 100px;
    width: 58%;
}

`;


const CopyWrite = styled.div`
margin-right: -10px;
height: 10px;
float: right;
width: 40%;
margin-top: -50px;

p{
    font-size: 15px;
    /* text-align: justify; */
}

h6{
    height: 10px;
    margin-right: 140px;
    margin-top: -2px;
    font-size: 13px;
    font-weight: 400;
}


`;




export default Footer