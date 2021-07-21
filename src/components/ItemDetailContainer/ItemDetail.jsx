import React from 'react'

function ItemDetail({name, price, pictureURL}) {
    return (
        <div>
            <img src={pictureURL} />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </div>
    )
}

export default ItemDetail
