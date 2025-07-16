
import type { ProductDisplayProps } from "../../types";


const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://shop.zebronics.com/cdn/shop/files/Zeb-Thunderpro-blue-pic-1.jpg?v=1709202990&width=700',
  inStock: true
};

function ProductDisplay({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}: ProductDisplayProps) {
  return (
    <div className="border rounded-lg p-4 max-w-sm">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</p>
      
      {showDescription && (
        <p className="text-gray-600 my-2">{product.description}</p>
      )}
      
      {showStockStatus && (
        <p className={product.inStock ? "text-green-500" : "text-red-500"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}
      
      <button 
        onClick={() => onAddToCart(product.id)}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
      
      {children}
    </div>
  );
}

export default ProductDisplay;
