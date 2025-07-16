// import './App.css'
import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import { useState } from "react";

const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740'
};

// Add the missing product data
const product = {
  id: 'prod-123',
  name: 'Wireless Headphones',
  price: 99.99,
  description: 'High-quality wireless headphones with noise cancellation',
  imageUrl: 'https://example.com/headphones.jpg',
  stock: 5
};

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <>
      <h1 className="text-6xl mb-10 text-center">Components Library</h1>

      {/* ALERT BOX */}
      <section>
        <h2 className="text-3xl mb-10 text-center">Alert Box</h2>
        <AlertBox type="success" message="Hello World" />
        <AlertBox type="error" message="Hello World" />
        <AlertBox type="info" message="Hello World" />
        <AlertBox type="warning" message="Hello World" />
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      </section>

      {/* USER PROFILE CARD  */}
      <section className="mt-10 flex flex-col items-center">
        <h2 className="text-3xl mb-10 text-center">User Profile Card</h2>
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">
            Last login: 2 hours ago
          </div>
        </UserProfileCard>
      </section>

      {/* PRODUCT DISPLAY */}
      <section className="mt-10 flex flex-col items-center">
        <h2 className="text-3xl mb-10 text-center">Product Display</h2>
        <div className="p-4">
          {showAlert && (
            <AlertBox
              type="success"
              message="Product added to cart!"
              onClose={() => setShowAlert(true)}
            />
          )}

          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>
    </>
  );
}

export default App;