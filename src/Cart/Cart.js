import React from 'react';


const Cart = ({ cart, removeCart, randomCart, getNumber }) => {
    return (
        <div>
            <h2>order summary</h2>
            <p>selected items: {cart.map((item) => (
                <h1 className='items' key={item.id}> {item.name} </h1>
            ))}</p>

            <div>
                <button onClick={removeCart} >Clear Cart</button>
            </div>
            <div>
                <button onClick={randomCart} >Choose</button>
            </div>
            <div>
                <h1>{getNumber.name}</h1>
            </div>

        </div>
    );
};

export default Cart;