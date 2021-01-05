import React from 'react'
import './Product.css'

function Product({title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{ title }</p>
                <p className="product_price"><small>$</small><strong>11.99</strong></p>
                <div className="product_rating">
                    <p>⭐</p>

                </div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg" alt=""/>
        <button>Add to Basket</button>
        
        </div>
    )
}

export default Product
