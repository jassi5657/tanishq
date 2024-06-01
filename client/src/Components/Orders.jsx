import axios from '../axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Orders = () => {
  //     const [orders, setOrders] = useState([]); // initialize an empty array to store orders

  //   useEffect(() => {
  //     // fetch orders from API endpoint
  //     fetch('/api/orders')
  //      .then(response => response.json())
  //      .then(data => setOrders(data));
  //   }, []);

  // const [products,setProducts] = useState([])

  const [orders, setOrders] = useState([]); // initialize an empty array to store orders

  useEffect(() => {
    axios.get('http://localhost:4000/order/getOrder')
      .then(orders => setOrders(orders.data))
      .catch(err => console.log(err))
  }, [])

  const deleteOrder = (orderId) => {
    axios.delete(`http://localhost:4000/order/deleteOrder/${orderId}`)
      .then(() => {
        setOrders(orders.filter((order) => order._id !== orderId));
      })
      .catch((err) => console.log(err));
  };

  
  return (
    <Container>
      <h1>Orders</h1>
      {orders.map((order) => {
        return (
          <div className='main' key={order._id}>
            
            
                {order.products.map((product,index) => {
                  return (
                    <div className='row'>
                     <img src={product.url} alt="" />
                     <div className="content">
                     <p style={{marginLeft:"30px"}}>{product.name}</p>
                     <p style={{marginLeft:"30px"}}>{order._id}</p>
                     <button onClick={() => deleteOrder(order._id)}>Cancel</button>
                     <hr style={{width:"800px", marginTop:"90px", marginLeft:"-200px"}}/>
                     </div>


                    </div>
                  )
                })}
                  
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
margin-top: 50px;

.main{
  width: 95%;
  margin-left: 30px;
  /* border: 1px solid; */
  padding: 10px;
}

img{
  width: 200px;
  height: 200px;
}

.row{
  display: flex;
}

.content{
  font-size: 18px;
  /* margin-left: -380px; */
  
  text-align: start;
}

.content button{
  width: 150px;
  height: 35px;
  margin-top: 30px;
  margin-left: 30px;
  font-size: 17px;
  border: none;
  color: white;
  background-color: rgb(99,22,23);
  border-radius: 8px;
  cursor: pointer;
}

`;

export default Orders