import React from 'react';
import ReactDOM from 'react-dom';

import './item-add-from.css'

const ItemAddForm = ({ onAdd }) => {
    return (
        <div className="item-add-from">
            <button onClick={() => onAdd('Some text')} className="btn btn-outline-success">Add Item</button>
        </div>
    )
};

export default ItemAddForm;
