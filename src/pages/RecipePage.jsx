import "./RecipePage.css";
import { useContext } from "react";
import { ListRecipeContext } from "../stores/ListRecipeContext";
import { useParams } from "react-router-dom";
import { Navigationbar } from "../components/Navigationbar";
import { Footer } from "../components/Footer";
import { Helmet } from "react-helmet-async";

const RecipePage = () => {
  const { recipes } = useContext(ListRecipeContext);
  const { recipeID } = useParams();
  console.log(recipeID);

  const recipe = recipes?.find((r) => r.id == recipeID.toString());

  console.log(recipe);

  function stripHTML(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || "";
  }

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <>
      <Helmet>
        <title>{recipe.title} | EasyVeg</title>
        <meta
          name="description"
          content={stripHTML(recipe.summary).slice(0, 160) + "..."}
        />
      </Helmet>
      <Navigationbar />
      <div className="selected-recipe">
        <div className="img-title">
          <img
            className="selected-recipe-img"
            src={recipe.image}
            alt="img recipes"
          />
          <h1 className="title-recipe">{recipe.title}</h1>
        </div>

        <div className="details">
          <button className="bt-category">
            {recipe.dishTypes?.[0] || "Recipe"}
          </button>
          <p>Main ingredient: {recipe.extendedIngredients?.[0]?.name}</p>
          <p>Time: {recipe.readyInMinutes} MIN.</p>
          <p>Portions: {recipe.servings}</p>
        </div>

        <div className="selected-recipe-ingredients">
          <div className="ingredients-recipe">
            <h2>Ingredients</h2>
            {Array.isArray(recipe.extendedIngredients) &&
              recipe.extendedIngredients.map((ingredient, i) => (
                <div key={i + ingredient.id} className="ingredient-container">
                  <input type="checkbox" className="checkbox-ingredients" />
                  <p className="ingredient">
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                  </p>
                </div>
              ))}
          </div>
          <div className="selected-recipe-description">
            <p>{stripHTML(recipe.summary)}</p>
          </div>
        </div>

        <div className="selected-recipe-procedure">
          <h2>Procedure</h2>
          <ol>
            {recipe.analyzedInstructions?.[0]?.steps?.map((s, i) => (
              <li key={i}>{s.step}</li>
            )) || "No procedure "}
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default RecipePage;
