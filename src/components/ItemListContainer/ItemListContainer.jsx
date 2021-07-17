import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

function ItemListContainer(props) {
    return (
        <div >
            <ItemCount stock={5} initial={1}/>
        </div>
    )
}

export default ItemListContainer
