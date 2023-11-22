import React from 'react';
import './Product.css';
// import {FaCar, FaTractor} from 'react-icons/fa';
const Product = () => {
  return (
    <>
    <div className="product" id="product">
        <div className="product-contact">
        <div className="input-field">
            <input type="text" placeholder='Name' />
        </div>

        <div className="input-field">
            <input type="text" placeholder='LastName' />
        </div>

        <div className="input-field">
            <input type="text" placeholder='Car You Order' />
        </div>

        <div className="input-field">
            <input type="price" placeholder='Your Demand' />
        </div>

            <a href="">Submit</a>

        </div>

        


    </div>
    
    
    
    
    </>
  )
}

export default Product