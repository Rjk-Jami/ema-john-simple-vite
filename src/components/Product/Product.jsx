import React from 'react';
import './Products.css'
const Product = (props) => {
    console.log(props)
    const { name, img, price, seller, ratings } = props.product
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
                    <p>Rating : {ratings} star</p>
                    
                </div>
                
            </div>
          
            <button className=" absolute bottom-0 btn bg-warning border-none">Add to Cart</button>
                   
        </div>
    );
};
export default Product;