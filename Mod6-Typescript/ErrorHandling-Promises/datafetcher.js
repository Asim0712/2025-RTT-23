function fetchUserData () {
    return new Promise((resolve, reject) => {
        const product = {name: "TV", price: 300};
        
        setTimeout(() => {
            resolve(product)
        }, 500);
    })
}
//Throw new Error ('Order history cannot be fetched')

function fetchOrderHistory () {
    return new Promise((resolve, reject) => {
        const reviews = [{content: "This tv is awesome!"}]

        setTimeout(() => {
            resolve(reviews)
        }, 500)
    })
}


function fetchOrderDetails () {
    return new Promise((resolve, reject) => {
        const relatedProducts = [{name: 'ps5', price: 500}];

        setTimeout(() => {
            resolve(relatedProducts);
        }, 500)
    })
}



fetchUserData()
.then(product => {
    console.log(product);
    return fetchOrderHistory();
})
.catch(e => console.log(error))
.then(reviews => {
    console.log(reviews);
    return fetchOrderDetails();
})
.then(relatedProducts => {
    console.log(relatedProducts);
})
.catch((error) => console.error("Error:", error))