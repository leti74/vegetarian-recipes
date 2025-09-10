import { SearchBar } from "../components/SearchBar";
import { Navigationbar } from "../components/Navigationbar";
import { ListRecipes } from "../components/ListRecipes";
import { Footer } from "../components/Footer";
import { Helmet } from "react-helmet-async";

const RecipesByIngredient = () => {
  return (
    <>
      <Helmet>
        <title>Ricette per Ingrediente | EasyVeg</title>
        <meta
          name="description"
          content="Trova ricette vegetariane in base ai suoi ingredienti."
        />
      </Helmet>
      <Navigationbar></Navigationbar>

      <SearchBar
        titleSearchBar={"By Ingredient"}
        placeholderSearchBar={"Enter Ingredient"}
      ></SearchBar>

      <div className="list">
        <div>
          <ListRecipes></ListRecipes>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default RecipesByIngredient;
