import React from 'react'
import styled from 'styled-components'
import { IoDiamondOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import ind from "./img/flag.png"
import AllJewellery from './nav/AllJewellery';
import Gold from './nav/Gold';
import Diamond from './nav/Diamond';
import Earrings from './nav/Earrings';
import Rings from './nav/Rings';
import BestSellers from './nav/bestSellers';
import MIA from './nav/Mia';
import GoldenHarvest from './nav/GoldenHarvest';
import Wedding from './nav/Wedding';
import Collections from './nav/Collections';
import Gifting from './nav/Gifting';
import More from './nav/More';
import PinCode from './nav/PinCode';

const Navbar = () => {
    return (
        <Container>
            <List>
                <ul>
                    <li><AllJewellery/></li>
                    <li><Gold/></li>
                    <li><Diamond/></li>
                    <li><Earrings/></li>
                    <li><Rings/></li>
                    <li><BestSellers/></li>
                    <li><MIA/></li>
                    <li><Collections/></li>
                    <li><Wedding/></li>
                    <li><Gifting/></li>
                    <li><GoldenHarvest/></li>
                    <li style={{marginLeft:"30px"}} ><More/></li>
                </ul>
                
            </List>


{/* 
            <SecondNav>
                <ul>
                    <li>Home</li>
                    <li>|</li>
                    <li>Diamond</li>
                    <li style={{marginLeft:"25px"}}>11832 Designs</li>
                </ul>

                <ul>
                </ul>

                <End>


                    <IoDiamondOutline className='diamond' />
                    <p>Festival Of Diamonds</p>

                    <p style={{ marginLeft: "20px", borderLeft: "1px solid gray", marginTop:"-1px" }}></p>
                    <div className="end2">


                    <IoLocationOutline className='location' />
                    <p className='pinCode' style={{marginTop:"-10px"}}><PinCode/></p>

                    <img src={ind} alt="" />
                    </div>
                </End>
            </SecondNav> */}
        </Container>
    )
}


const Container = styled.div`
width: 100%;
height: 60px;
float: left;
margin-left: 45px;
font-size: 15px;
margin-top: 25px;
`;

const List = styled.div`

ul{
    width: 90%;
    
    /* background-color: red; */
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    gap: 0.5rem;
    font-size: 16px;
    /* font-size: 17px; */
    margin-left: -10px;
    margin-top: -3px;
}

li{
    z-index: 1;
}
`;






export default Navbar