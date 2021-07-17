import React, { useState } from 'react';
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function ItemCount({stock, initial}) {
    
    const [quantity, setQuantity] = useState(initial)

    function addToCart(){
        alert("Agregaste " + quantity)
    }

    function add(){
        if(quantity < stock){
            let x = quantity
            x++
            setQuantity(x)
        }
    }

    function substract(){
        if(quantity > 1){
            let x = quantity
            x = x - 1
            setQuantity(x)
        }
    }

    return (
        <div className="ItemCountContainer" >
            <div stock="5" >
                <button onClick={add} ><FontAwesomeIcon icon={faPlus}/></button>
                <div>{quantity}</div>
                <button onClick={substract} ><FontAwesomeIcon icon={faMinus} /></button>
            </div>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default ItemCount
