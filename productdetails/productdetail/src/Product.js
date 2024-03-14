// Product.js
import React from 'react';
import './Product.css'; // Import Product.css

const Product = ({ product, addToCart}) => {
  return (
    <div className="product"> {/* Apply the 'product' class */}
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <h4>${product.price}</h4>
      <p>{product.description}</p>
      <button onClick={addToCart}>+ Cart</button> {/* Pass a function reference to addToCart */}
    </div>
  );
}

export default Product;
