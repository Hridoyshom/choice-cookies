import React from 'react';
import "./Card.css";
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
const card = () => {
    const [cookies, setCookies] = useState([]);
    console.log(cookies);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then(data => setCookies(data))
    }, [])

    return (


        <div className='card-container' >
            <div className="product" >
                {
                    cookies.map(cookie => <Product key={cookie.id} ></Product>)
                }
            </div>

            <div className='order' >
                <h1>order summery</h1>
            </div>





        </div>

    );
};

export default card;