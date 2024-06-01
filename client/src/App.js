import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
 import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Product from './Components/product/Product';
import Home from './Components/Home';
import Cat from './Components/Cat';
import AllProducts from './Components/AllProducts';
import NewSlider from './Components/NewSlider';
import Cart from './Components/Cart';
import Dashboard from './Components/admin/Dashboard';
import AddProducts from './Components/admin/AddProducts';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import { useState } from 'react';
import AdminProducs from './Components/admin/AdminProducs';
import Address from './Components/Address';
import Orders from './Components/Orders';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
       
      <Router>
      {isLoggedIn? <Navbar /> : null}
      <Header/>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cat' element={<Cat/>}></Route>
        <Route path='/all' element={<AllProducts/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Register/>}></Route>


          <Route path='/card' element={<Card/>}></Route>
        <Route path='product/:id' element={<Product/>}></Route>
        {/* <Route path='/slider' element={<NewSlider/>}></Route> */}
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/admin' element={<Dashboard/>}></Route>
        <Route path='/admin/addProducts' element={<AddProducts/>}></Route>
        <Route path='/admin/products' element={<AdminProducs/>}></Route>
        <Route path='/address' element={<Address/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>








        </Routes>

      <Footer/>
      </Router>

    </div>
  );
}

export default App;
