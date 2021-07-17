import React from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer(props) {
    return (
        <div className="ItemListContainer" >
            <ItemList />
        </div>
    )
}

export default ItemListContainer