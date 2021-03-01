import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const addedPlayer = props.addPlayer;
    const team = addedPlayer.reduce((total, player) => total + ', ' + player.name, []);
    const totalSalary = addedPlayer.reduce((total, player) => total + player.salary, 0)
    return (
        <div className="cart">
            <h3>Players added:{addedPlayer.length} </h3>
            <h3>Your team:{team}</h3>
            <h3>Total Coast: {totalSalary} </h3>
        </div>
    );
};

export default Cart;