import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { getItems } from './GetItems'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [item, setItem] = useState(false)

    useEffect(() => {
        setTimeout(()=>{
            getItems()
                .then(resp => setItem(resp))
                .catch(err => console.log(err))
                .finally(console.log("Watch Details loaded"))
        }, 2000)
        
    }, [])

    return (
        <div className="ItemDetailContainer">
            {   item && (
                    <ItemDetail 
                    name={item.name} 
                    price={item.price} 
                    pictureURL={item.pictureURL} 
                    />
                ) 
            }
        </div>
    )
}

export default ItemDetailContainer