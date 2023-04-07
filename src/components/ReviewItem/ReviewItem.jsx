import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({product, handleRemoveFromCart}) => {

    const{name,quantity,price,shipping,stock,ratings,img,id,category} = product
    return (
        <div className='review-item'>
            <div className="review-item-left">
                <img src={img} alt="" />
                <div className="review-item-left-content mt-2">
                    <h2 className='product-title'>{name}</h2>
                    <p>Price:<span className='orange-text text-orange-400 	 '>${price}</span></p>
                    <p>Order Quantity:<span className='orange-text text-orange-400'>${quantity}</span></p>

                    

                </div>
            </div>
            <div className="review-item-right">
        <button  onClick={()=>handleRemoveFromCart(id)} className='btn btn-error mx-3  flex justify-center items-center   rounded-full'><FontAwesomeIcon className='text-white ' icon={faTrashAlt} /></button>

            </div>
        </div>
    );
};

export default ReviewItem;