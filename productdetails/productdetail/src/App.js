// App.js
import './App.css';
import React, { useState } from 'react';
import { IoMdCart } from "react-icons/io";

import Product from './Product';

function App() {
  let [cartitem, setCartitem] = useState(0);

  const addtocart = () => {
    console.log("Add to cart");
    
    setCartitem(cartitem+1);
  }
 
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Product Details</h1>
        <div className="cart">
          <IoMdCart />
          <span className="cart-count">{cartitem}</span>
        </div>
      </nav>
      <div className="product-list">
      <Product 
          product={{ 
            name: "Gaming Chair 2", 
            price: 120, 
            description: "Stylish ergonomic gaming chair design", 
            image: "https://images-eu.ssl-images-amazon.com/images/I/81NxrLg1GxL._AC_UL320_SR320,320_.jpg"
          }} 
          addToCart={addtocart} // Pass the addtocart function as a prop
        />
         <Product 
          product={{ 
            name: "Gaming Chair 2", 
            price: 120, 
            description: "Stylish ergonomic gaming chair design", 
            image: "https://images-eu.ssl-images-amazon.com/images/I/81NxrLg1GxL._AC_UL320_SR320,320_.jpg"
          }} 
          addToCart={addtocart} // Pass the addtocart function as a prop
        />
         <Product 
          product={{ 
            name: "Gaming Chair 2", 
            price: 120, 
            description: "Stylish ergonomic gaming chair design", 
            image: "https://images-eu.ssl-images-amazon.com/images/I/81NxrLg1GxL._AC_UL320_SR320,320_.jpg"
          }} 
          addToCart={addtocart} // Pass the addtocart function as a prop
        />
      </div>
   
      
    </div>
  );
}

export default App;
