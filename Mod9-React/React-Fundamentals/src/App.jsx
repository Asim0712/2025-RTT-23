 // import './App.css'
import UserProfile from "./components/UserProfile";
import Product from "./components/product";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import Userlist from  "./components/UserProfileCard/UserList";

function App() {
  const handleClick = () => console.log("searching....");

  function formatUserName(user) {
    return user.firstName + " " + user.lastName;
  }
  const user = { firstName: "Bob", lastName: "Smith" };
  const isLoggedIn = true;

  const navStyles = {
    margin: "20px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  return (
    <div className="container">
      {/* Navbar  */}
      <nav style={navStyles}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      {/* Search  */}
      <div>
        <label htmlFor="search">Search:</label>
        <input type="text" name="search" id="search" placeholder="Search" />
        <button onClick={handleClick}>Search</button>
      </div>

      {/* Main Section  */}
      <main>
        <h1>React Fundamentals App</h1>
        <h2>Welcome {formatUserName(user)}</h2>
        <p>User is {isLoggedIn ? "currently" : "not"} logged in.</p>

        <h3>
          {user.firstName} {user.lastName} undefined age:{user.age}
        </h3>

        {/* Section 1  */}
        <section>
          <h2>Latest Products</h2>

          <p>Checkout our new products</p>
        </section>

        {/* Section 2  */}
        <section>
          <h2>Register for a discount</h2>
          <a href="#">Click here</a>"
        </section>
      </main>
      
      {/* Footer  */}
      <footer>
        <h3>Find us on Facebook</h3>
      </footer>
      <UserProfile/>

<UserProfileCard 
      user={{name: 'alex', email: "alex@gmail.com"}}
      />
      <Userlist/>

      <Product />
    </div>
  );
}

export default App;
      