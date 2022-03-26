import React from 'react';
import "./Card.css";
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';




const Card = () => {
    const [cookies, setCookies] = useState([]);
    const [cart, setCart] = useState([]);
    const [getNumber, setGetnumber] = useState([]);






    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then(data => setCookies(data))
    }, [])

    const handleAddToCart = (cookie) => {
        console.log(cookie);
        const newCart = [...cart, cookie];
        setCart(newCart);
    }
    const removeCart = () => {

        setCart([]);
    }
    const randomCart = () => {
        const generateNum = Math.floor(Math.random() * cart.length);
        const getNumber = cart[generateNum]
        setGetnumber(getNumber);
    }

    return (


        <div className='card-container' >
            <div className="products-container" >
                {
                    cookies.map(cookie => <Product key={cookie.id} cookie={cookie} handleAddToCart={handleAddToCart} ></Product>)
                }
            </div>

            <div className='order' >
                <Cart cart={cart} getNumber={getNumber} removeCart={removeCart} randomCart={randomCart}  ></Cart>

            </div>

            <div>
                <h1>
                    how react works
                </h1>
                <p>
                    <h4>React generally create a tree of elements.These are liker plain javascripts objects.The tree of eements kept in the virtual DOM. Then react sync the virtual DOm to the real DOM. For changing the state of elements it uses useState. Use Effect helps to fetch the enternal or external data.</h4>

                </p>
                <h1>
                    Difference between props and state
                </h1>
                <p>
                    <h4>
                        propos is kind argument to a function. To render the component from react we pass the props to get the component. We only can read props.
                    </h4>
                    <h4>
                        State is on the other hand is something inside of a component. We can change the state through using useState but props only can initialize the component. Like we can increase or decrease number through state that can not be done by props.
                    </h4>


                </p>

            </div>





        </div>

    );
};

export default Card;