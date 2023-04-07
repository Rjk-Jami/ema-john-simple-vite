import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log('check laptop git push')
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart =[]
        // get id
        for (const id in storedCart) {
            //get the product using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
               // add quantity
                const quantity = storedCart[id]
            addedProduct.quantity = quantity
            //add the added product to shaved cart
            savedCart.push(addedProduct)
            
            }
            console.log(addedProduct)
        }
       // set the cart
        setCart(savedCart)
    }, [products])

    const addToCart = (product) => {
        // const newCart = [...cart, product]
        let newCart =[]
        // if product doesn't exist in the cart , set quantity =1 ;
        //if product doesn't exits in the cart, then set quantity = 1;  
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining  = cart.filter(pd => pd.id !== product.id);
            newCart =[...remaining, exists]
        }
        
        setCart(newCart);
        addToDb(product.id)

    }
    const handleClearCart = ()=>{
        setCart([])
        deleteShoppingCart()
        console.log(cart)
    }
    return (
        <div className='shop-container mx-6 grid grid-cols-4'>
            <div className="products-container col-span-3 grid grid-cols-2 ">

                {
                    products.map(product => <Product product={product}
                        key={product.id}
                        addToCart={addToCart}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}
                

                />
            </div>

        </div>
    );
    
};

export default Shop;