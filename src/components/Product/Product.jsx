import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'
const Product = (props) => {
    console.log(props)
    const {id, name, img, price, seller, ratings } = props.product;
    const addToCart = props.addToCart

    
    
    return (
        <div className='product relative'>
            <div className=" card w-96 bg-base-100 shadow-xl text-left	 ">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title ">{name}</h2>
                    <p cla>Price : ${price}</p>
                    <p>Manufacturer : {seller}</p>
                    <p className='mb-5'>Rating : {ratings} star</p>
                    
                </div>
                <button className=" absolute bottom-0 btn bg-warning border-none w-96" onClick={()=>addToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
            </div>
          
            
                   
        </div>
    );
};
export default Product;