import React from 'react'
import './Product.css'


const Product = (props) => {
    const { img, name, id, price } = props.cookie;
    return (
        <div className='product' >
            <img src={img} alt="" />
            <p className='product-name' >{name}</p>
        </div>
    );
};

export default Product;