

function RecipeItem({ recipe }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
       {/* <p>{recipe.description}</p> */}
      <img src={recipe.image} />
    </div>
  );
}

export default RecipeItem;