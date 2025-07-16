import { useState, useEffect, use } from 'react'
import RecipeList from './components/RecipesList'


function App() {
   const [recipes, setRecipes] = useState([]);

useEffect(()=> {
  //console.log('useEffect called')
});
useEffect(() => {

  fetch('https://dummyjson.com/recipes')
  .then(res => res.json())
  //.then(data => console.log(data))
  .then(data => setRecipes(data.recipes))

},[])

  return (
    <>
 <h1> Fetch Data App</h1>
 <RecipeList recipes={recipes} />


    </>
  )
}

export default App
