function fetchProductCatalog(){
    return new Promise((resolve, reject) => {
            const product = {id : "1" , name: "Laptop" , price: "$300"}
            
            setTimeout(() => {
            if (Math.random() < 0.8) {
             resolve(product)}
             else {
             reject("Failed to fetch product catalog"); }
                 }, 1000)
    })
}

function fetchProductReviews(){
    return new Promise((resolve, reject) => {
            const Review = {id: "1"}
            
            setTimeout(() => {
            if (Math.random() < 0.8) {
             resolve(product)}
             else {
             reject("Failed to fetch product catalog"); }
                 }, 1000)
    })
}