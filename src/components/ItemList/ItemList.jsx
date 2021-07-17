import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

function ItemList() {

    const data = [
        {id: 1, title: "Shirt", stock: 5, price: 20, pictureURL: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbb%2F5c%2Fbb5cf906e328e59e19f9485709ca28309eb9fd6b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_longsleeved%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"},
        {id: 2, title: "Pants", stock: 5, price: 30, pictureURL: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2f%2F56%2F2f5623e0f34e3b59b397775efa7f7640ff157aed.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_dressed%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]" },
        {id: 3, title: "Shoes", stock: 5, price: 25, pictureURL: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff2%2Fd9%2Ff2d931daaf4b267e387f24973b61addf6ab64504.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_dressed%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"}
    ]

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(true)
        }, 2000)
    })

    promise.then(res => {console.log("Loaded " + res)})
        .catch(err => {console.log("Error " + err)})
        .finally(()=> {console.log("Finish")})


    return (
        <div className="ItemList">{
            data.map(item => <Item 
                                key={item.id}
                                title={item.title} 
                                stock={item.stock}
                                price={item.price}
                                pictureURL={item.pictureURL} /> )
            }
        </div>
    )
}

export default ItemList
