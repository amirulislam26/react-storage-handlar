import React from 'react';
import { addToDb, removeFromDb } from '../../utilitile/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, balance, id } = props.cosmetic;

    const addToCard = (id) => {
        addToDb(id);
    }

    const removeFromCart = id => {
        removeFromDb(id);
    }
    return (
        <div className='product'>
            <h2>Buy Naw:{name}</h2>
            <p>Only for: {balance}</p>
            <p><small>It has id: {id}</small></p>
            <button className='button' onClick={() => addToCard(id)}>Add to Card</button>
            <button className='remove-btn' onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;