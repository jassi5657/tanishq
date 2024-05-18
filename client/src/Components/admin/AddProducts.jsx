import axios from '../../axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

function AddProducts() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    axios
      .post("/product/addProduct", { name , category , offerPrice ,discountPrice,  desc, url, url1, url2, url3 })
      .then(() => {
        setName("");
        setCategory("");
        setOfferPrice(0);
        setDiscountPrice(0);
        setDesc("");
        setUrl("");
        setUrl1("");
        setUrl2("");
        setUrl3("");
      })
      .catch((error) => alert(error.message));
  };
  return (
<Container>
  <h1>Add Products</h1>

  <form action="">
    <input type="text" 
    onChange={(e) => setName(e.target.value)}
    value={name}
    placeholder='Enter Product Title'/>

{/* 
    <input type="text" 
    onChange={(e) => setCategory(e.target.value)}
    value={category} 
    placeholder='Enter Product Category'/> */}
    <select value={category} onChange={(e) => setCategory(e.target.value)} id="" >
      <option >Earring</option>
      <option >Rings</option>
      <option >Pendants</option>
      <option >Mangalsutras</option>
      <option >Chains</option>
      <option >Bracelets</option>
      <option >Bangles</option>
      <option >Neckwear</option>
      <option >Pendants Sets</option>
    </select>
    <input type="text" 
    onChange={(e) => setUrl(e.target.value)}
    value={url}
    placeholder='Enter Product Image Url'/>

    <input type="text"
    onChange={(e) => setUrl1(e.target.value)}
    value={url1}

    placeholder='Enter Product Image Url 1'/>
    


    <input type="text"
    onChange={(e) => setUrl2(e.target.value)}
    value={url2}

    
    placeholder='Enter Product Image Url 2'/>


    <input type="text" 
    value={url3}

    onChange={(e) => setUrl3(e.target.value)}
    
    placeholder='Enter Product Image Url 3'/>


    <input type="number" onChange={(e) => setOfferPrice(e.target.value)} value={offerPrice} placeholder='Enter Price'/>
    <input type="number" onChange={(e) => setDiscountPrice(e.target.value)} value={discountPrice} placeholder='Enter Discount Price'/>

    <textarea name=""  cols="40" rows="10"
    onChange={(e) => setDesc(e.target.value)}
    value={desc}
    placeholder='Enter Product Description'></textarea>
    <br />
  <button onClick={addProduct}>Submit</button>
  </form>

</Container>
  );
}

const Container = styled.div`
margin-top: 40px;

input{
  border-radius: 5px;
  height: 30px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px;
  width: 300px;
}

select{
  width: 310px;
  border-radius: 5px;
  margin-bottom: 20px;
  height: 35px;
}

option{
  overflow-y: scroll;
}

textarea{
  border-radius: 5px;

}

button{
  margin-top: 10px;
  width: 100px;
  height: 36px;
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: 600;
  background-color:rgb(131,39,41);
}
`;

export default AddProducts;