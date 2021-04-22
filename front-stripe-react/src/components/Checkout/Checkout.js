import React, {useState} from 'react';
import {Button} from "antd";

import {useStripe} from "@stripe/react-stripe-js";

import Tshirt from "../../media/images/react-t-shirt.jpeg"

const Checkout = () => {
    //Hacemos una instancia de stripe
    const stripe = useStripe();
    const [product, setProduct] = useState({
        name : "T-shirt Reactjs",
        description : "The awesome t-shirt of best language ",
        amount : 30,
        currency : 'mxn',
        quantity: 0

    })
    const addQuantity = e =>{
        setProduct({
            ...product,
            quantity: Math.max(0, product.quantity + e)
        })
    }
    const handleClick = e =>{

    }
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={Tshirt} alt="t-shirt react"/>
            <p>Description : {product.description}</p>
            <p>${product.amount}</p>
            <Button onClick={ () => addQuantity(1)}>+</Button>
             <p>{product.quantity}</p>
            <Button onClick={()=>addQuantity(-1)}>-</Button>

            <Button
                onClick={ handleClick}
                disabled={product.quantity<1}

            >
                Start checkout
            </Button>
        </div>
    );
}

export default Checkout;