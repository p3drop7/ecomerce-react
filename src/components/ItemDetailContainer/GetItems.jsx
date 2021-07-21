const watch = {
    name: "Swatch watch",
    price: 1000,
    pictureURL: "https://content.rolex.com/dam/rolex-sav/buying-a-rolex/buying-an-authentic-rolex/2021/roller/buy-a-rolex_roller_rfederer_16ad_8428_r2_portrait.jpg?imwidth=400"
}

const promise = new Promise( (resolve, reject) => {
    let status = 200

    if(status === 200){
        resolve(watch)
    } else {
        reject("Wrong status")
    }
})

export const getItems = () => {
    return promise
}