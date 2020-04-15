import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const user = cart[i];
        total = total + user.salary;
    }
    return (
        <div className="cart">
            <h3>Added friend</h3>
            <h4>Total friend: {cart.length}</h4>
            <h4>Total salary: ${total}</h4>
        </div>
    );
};

export default Cart;