import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

function UserContextProvider({ children }){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate fetching user data
        const fetchUser = async () => {
            const response = await fetch("https://dummyjson.com/users/1"); // Replace with your API endpoint
            const data = await response.json();
            setUser(data);
        };
        fetchUser();
    }, []);

    const login = async () => {
        // Simulate a login action
        try{
       const response = await fetch("https://dummyjson.com/auth/login");
       const data = await response.json();
       setUser(data);   
         navigate("/profile"); // Redirect to profile after login
    } catch (error) {
        console.error("Login failed:", error);
    }
    }

    const logout = () => {
        setUser(null);  
        navigate("/"); // Redirect to home after logout
    }
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
} 
export default UserContextProvider;
// export { UserContext, UserProvider};
