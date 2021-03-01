import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css'

const Players = (props) => {
    const { name, salary, age, image } = props.player;
    // console.log(props.player);
    // const playersStyle = {border: "1px solid red", margin: "10px", padding: "10px"};
    return (
        <div className="players-card">
            <img src={image} alt="" />
            <p>Name: <b>{name}</b></p>
            <p>Age: {age}</p>
            <p>Price: <b>{salary}</b></p>
            <button className= "btn btn-success" onClick={() => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} /> Add Player</button>
        </div>
    );
};

export default Players;