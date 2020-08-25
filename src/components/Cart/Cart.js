import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    return (
        <div>
            <p>Cart: {cart.length} </p>
        </div>
    );
};

export default Cart;