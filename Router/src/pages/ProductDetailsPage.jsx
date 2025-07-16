import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetailPage() {
  const [currentProduct, setCurrentProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      console.log(data);

      setCurrentProduct(data);
    };
    fetchProductData();
  }, [productId]);

  return (
    <>
      {currentProduct && (
        <div>
          <h1>{currentProduct.title}</h1>
          <img
            src={currentProduct.images[0]}
            alt={currentProduct.title}
            width={500}
          />
          <p>{currentProduct.description}</p>
        </div>
      )}
    </>
  );
}

export default ProductDetailPage;