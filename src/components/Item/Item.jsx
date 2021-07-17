import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

function Item({title, stock, price, pictureURL}) {
    return (
        <div className="Item">
            <img src={pictureURL} alt={title} />
            <p>{title}</p>
            <p>{price}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
    )
}

export default Item
