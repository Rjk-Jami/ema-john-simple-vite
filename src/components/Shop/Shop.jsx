import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    useEffect(()=>{
        const storedCart = getShoppingCart()
        console.log(storedCart)
    },[])

    const addToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
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
                <Cart cart = {cart}

                  />
            </div>
        
        </div>
    );
};

export default Shop;