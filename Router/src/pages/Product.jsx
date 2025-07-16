import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Product() {

      const [productsData, setProductsData  ] = useState([])
    
      useEffect(() => {
        const fetchProducts = async () => {
          const res = await fetch('https://dummyjson.com/products')
          const data = await res.json()
          console.log(data)
          setProductsData(data.products)
        }
        fetchProducts()
      }, [])
  return (
    <div>
      <h1>Product Page</h1>

      <div>
        {productsData.map(product => <Link key = {product.id} to= {`/product/${product.id}`} >
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
        <p>Price: ${product.price}</p>
        </Link>)}
      </div>
    </div>
  );
}   

export default  Product ;