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
    const [cart , setCart] = useState([])
    const addToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop-container mx-6'>
            <div className="products-container">
            
            {
                products.map(product=><Product product = {product} 
                    key ={product.id}
                    addToCart = {addToCart}></Product>)
            }
            </div>

            <div className="cart-container">
                <h3>order summary</h3>
                <p>selected item:{cart.length} </p>
            </div>
        
        </div>
    );
};

export default Shop;