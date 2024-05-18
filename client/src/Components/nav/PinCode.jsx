import React, { useState } from 'react'
import styled from 'styled-components';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const PinCode = () => {

    return (
        <Container>
            <Hover>
                <p>Pincode</p>
            </Hover>

            <Content className='dropdown-menu'>

                <div className="row">

                    <div className="col-1">
                        <h1 style={{marginLeft:"1px"}}>Enter Your Pincode To Browse Better</h1>
                        <p>Get fastest delivery dates possible on your favourite Jewellery pieces</p>
                        <label className='lable'>Pin Code</label>
                        <input type="text"/>
                        <IoLocationOutline className='location'/>
                        <button>Apply</button>
                        <FaLocationCrosshairs className='locationIcon'/>
                        <h6>Use current location</h6>

                        
                    </div>
                </div>
            </Content>
        </Container>
    );

}

const Container = styled.div`
/* position: fixed; */




`;


const Hover = styled.div`
width: 90px;
height: 30px;

`;




const Content = styled.div`
/* margin-top: 20px; */
display: none;
position: absolute;
background-color: white;
color: rgb(131,39,41);
width:280px;
height: 220px;
margin-left: -215px;
padding: 20px;
border: 1px solid lightgray;
border-radius: 5px;



h1{
  font-size: 14px;
  font-weight: 500;

}

p{
    font-size: 13px;
    color: gray;
}

input{
    height: 38px;
    width: 245px;
    margin-left: 4px;
}

.lable{
    position: absolute;
    margin-left: 35px;
    margin-top: 11px;
    color: gray;
}

.location{
    height: 40px;
    margin-left: -250px;
    position: absolute;
    color: gray;
}

button{
    border: none;
    position: absolute;
    margin-left: -60px;
    margin-top: 12px;
    background-color: white;
color: rgb(131,39,41);

}

h6{
    font-size: 12px;
    margin-left: 20px;
    margin-top: 38px;
}

.locationIcon{
    height: 40px;
    width: 15px;
    position: absolute;
    margin-top: 70px;
    margin-left: -200px;
color: rgb(131,39,41);

}






`;


export default PinCode