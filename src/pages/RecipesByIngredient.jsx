import { SearchBar } from "../components/SearchBar";
import { Navigationbar } from "../components/Navigationbar";
import { ListRecipes } from "../components/ListRecipes";
import { Footer } from "../components/Footer";

export const RecipesByIngredient = () => {
  return (
    <>
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
