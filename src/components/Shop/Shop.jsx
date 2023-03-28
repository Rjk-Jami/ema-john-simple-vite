import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)

    }
    return (
        <div className='shop-container mx-6'>
            <div className="products-container">

                {
                    products.map(product => <Product product={product}
                        key={product.id}
                        addToCart={addToCart}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}
                

                />
            </div>

        </div>
    );
};

export default Shop;