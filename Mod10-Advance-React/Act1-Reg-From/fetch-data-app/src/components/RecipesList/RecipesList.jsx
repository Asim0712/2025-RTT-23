function RecipeList({ recipes }) {
  console.log("RECIPE LIST: ", recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <div>
        {recipes &&
          recipes.map((recipe) => (
            <div>
              <h3>{recipe.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecipeList;