import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './Product.css'


const Product = (props) => {
    const { img, name, price } = props.cookie;

    return (
        <div className='product' >
            <img src={img} alt="" />
            <div className='product-info' >
                <p className='product-name' >{name}</p>
                <p>Price:{price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.cookie)} className='button-cart' ><p className='btn-text' >Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;