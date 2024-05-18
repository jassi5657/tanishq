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


function App() {
  return (
    <div className="App">
       
      <Router>
      <Header/>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cat' element={<Cat/>}></Route>
        <Route path='/all' element={<AllProducts/>}></Route>
          <Route path='/card' element={<Card/>}></Route>
        <Route path='product' element={<Product/>}></Route>
        {/* <Route path='/slider' element={<NewSlider/>}></Route> */}
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/admin' element={<Dashboard/>}></Route>
        <Route path='/admin/addProducts' element={<AddProducts/>}></Route>





        </Routes>

      <Footer/>
      </Router>

    </div>
  );
}

export default App;
