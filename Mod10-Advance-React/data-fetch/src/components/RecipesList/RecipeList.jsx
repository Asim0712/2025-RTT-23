import RecipeItem from "../RecipesItem/RecipeItem";

function RecipeList({ recipes }) {
  console.log("RECIPE LIST: ", recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <div>
        {recipes &&
          recipes.map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </div>
  );
}

export default RecipeList;