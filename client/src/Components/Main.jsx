import React from 'react'
import { GiSettingsKnobs } from "react-icons/gi";
import styled from 'styled-components';
import Card from './Card';
const Main = () => {
  return (
    <Container>
        <FirstLayer>
        <GiSettingsKnobs className='settingIcon'/>
        <h1>FILTER</h1>

        <Sort>
        <label>SORT BY:</label>
        <select >
            <option value=""><b>Best Matches</b></option>
            <option value="">Best Seller</option>
            <option value="">New Arrivals</option>
            <option value="">Popularity</option>
            <option value="">Price: Low To High</option>
            <option value="">Price: High To Low</option>
        </select>
        </Sort>
        </FirstLayer>
        <br />

        <CardItem>
            <div className="row">
                <div className="col-1">
                <Card/>
                </div>

                <div className="col-2">
                <Card/>
                </div>

                <div className="col-3">
                <Card/>
                </div>

                <div className="col-4">
                <Card/>
                </div>

        
            </div>
        </CardItem>


        


        


    </Container>
  )
}


const Container = styled.div`

`;


const FirstLayer = styled.div`
    margin-top: 125px;
/* background-color: red; */
width: 100%;
height: 30px;

.settingIcon{
    transform: rotate(270deg);
    height: 30px;
    width: 20px;
    float: left;
    margin-left: 80px;
color: rgb(131,39,41);

}

h1{
    font-size: 18px;
    font-weight: lighter;
    float: left;
    margin-left:20px ;
    margin-top: 2px;
}
`;

const Sort = styled.div`
float: right;
margin-right: 100px;

select{
    width: 150px;
    height: 35px;
    margin-left: 10px;
}

option{
    /* background-color: red; */
}
`;

const CardItem = styled.div`
/* background-color: red; */
width: 86.6%;
margin-left: 80px;

/* justify-content: space-evenly; */

.row{
    display: flex;
    margin-left: -78px;
}

.col-2{
    margin-left: -47px;
}


.col-3{
    margin-left: -47px;
}

.col-4{
    margin-left: -47px;
}


`;


export default Main