import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart = props.cart
    // const {cart} = props
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity= 0;
    for(const product of cart){
        // console.log(product)
        // product.quantity = product.quantity || 1
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
        quantity = quantity + product.quantity
    }
    const tax = total * 7 / 100;
    const grandTotal  = total + shipping + tax


    return (
        <div className='cart flex flex-col gap-3 sticky top-0'>
            <h3 className='text-2xl mb-3'>order summary</h3>
                <p className=''>selected item:{quantity} </p>
                <p>total:{'$'+total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h3 className='text-2xl'>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;