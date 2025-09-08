import { RecipeID } from "./RecipeID";
import "./ListRecipes.css";
import { useEffect } from "react";
import { useContext } from "react";
import { ListRecipeContext } from "../stores/ListRecipeContext";
import { BASE_URL } from "../api/spoonacular";
import { API_KEY } from "../api/spoonacular";
import axios from "axios";
import { Link } from "react-router-dom";

export const ListRecipes = () => {
  const { recipes, setRecipes } = useContext(ListRecipeContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/random`, {
        params: {
          tags: "vegetarian",
          addRecipeInformation: true,
          apiKey: API_KEY,
          number: 8,
        },
      })
      .then((casualRecipes) => {
        const answer = casualRecipes.data.recipes;
        console.log(answer);
        setRecipes(answer);
      })
      .catch((error) => {
        console.log("error during API call", error);
        return [];
      });
  }, []);

  return (
    <div className="list-recipes">
      {!recipes || recipes.length === 0 ? (
        <p className="message-no-recipe">No recipes found 🍽️</p>
      ) : (
        recipes?.map((recipe) => (
          <Link to={`/${recipe.id}`} key={recipe.id} className="link-recipe">
            <RecipeID
              recipeIMG={recipe.image}
              name={recipe.title}
              dish={recipe.dishTypes?.[0] || "Dish"}
              mainIngredient={
                Array.isArray(recipe.extendedIngredients) &&
                recipe.extendedIngredients.length > 0
                  ? recipe.extendedIngredients[0].name
                  : "Ingredient not available"
              }
            />
          </Link>
        ))
      )}
    </div>
  );
};
