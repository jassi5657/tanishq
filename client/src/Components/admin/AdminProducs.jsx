import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const AdminProducs = () => {
    const [products,setProducts] = useState([])

useEffect(()=>{
    axios.get('http://localhost:4000/product')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err) )
},[])

const deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/product/${id}`)
    .then(res => {
    setProducts(products.filter(product => product.id!== id))
    })
    .catch(err => console.log(err))
    }
  return (
    <Container>
        

    <table className='table table-striped'>
        <thead>
            <tr>
                <th>sr no</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
                <th>Update</th>



            </tr>
        </thead>

        <tbody>
                {
                    products.map((product,i)=>(
                        <tr className='main'>
                        <>
                        <td>{i+1}</td>

                        <td className='image'><img src={product.url} alt="" /></td>
                        <td>{product.name}</td>
                        <td>{product.offerPrice}</td>
                        {/* <td> <button onClick={() => deleteProduct(product.id)}> Delete </button></td> */}
                        <td> <button onClick={() => deleteProduct(product.id)}> Delete </button></td>
                        <td> <button>Update </button></td>


                        </>
            </tr>
                    ))
                }
        </tbody>
    </table>
    </Container>

  )
}


const Container = styled.div`
margin-left: 300px;

.main{
    /* display: grid; */
}
.image img{
    width: 100px;
    height: 100px;
}
`;

export default AdminProducs