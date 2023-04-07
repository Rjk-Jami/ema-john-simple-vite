import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import "./Order.css"
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart]= useState(savedCart)
    
    const handleRemoveFromCart = (id)=>{
       const remaining =cart.filter(product => product.id !== id);
       setCart(remaining);
       removeFromDb(id)
    }
    const handleClearCart = ()=>{
        setCart([])
        deleteShoppingCart()
        console.log(cart)
    }
    // console.log(savedCart)
    return (
        <div className='md:flex flex-row '>
            <div className="review-container">
            {
                cart.map(product => <ReviewItem key = {product.id} product = {product}
                    handleRemoveFromCart= {handleRemoveFromCart}/>)
            }
            </div>
            <div className="cart-container ">
                <Cart handleClearCart={handleClearCart} cart={cart}
                > </Cart>
            </div>
        </div>
    );
};

export default Orders;