import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    } ,[])
    
    return (
        <div className='shop-container'>
            <div className="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            
            {
                products.map(product=><Product product = {product} key ={product.id}></Product>)
            }
            </div>

            <div className="cart-container">
                <p>order summary</p>
            </div>
        
        </div>
    );
};

export default Shop;