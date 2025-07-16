import {Link, NavLink, Route, Routes} from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'
import HomePage from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ProductDetailPage from './pages/ProductDetailsPage'
import UserProfilePage from './pages/UserProfilePage'
import UserContextProvider from './context/UserContext'
import './App.css'
import NavBar from './components/NavBar'


export const ThemeContext = createContext("light");

function App() {

    const [theme, setTheme] = useState("light");

     const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <UserContextProvider>
      <NavBar />
    

    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/About' element={<About />} />
      <Route path='/Product' element={< Product/>} />
      <Route path='*' element={<NotFound />} />
      
    </Routes>
</UserContextProvider>
</ThemeContext.Provider>
  )
}

export default App
