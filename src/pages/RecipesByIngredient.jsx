import { SearchBar } from "../components/SearchBar";
import { Navigationbar } from "../components/Navigationbar";
import { ListRecipes } from "../components/ListRecipes";
import { Footer } from "../components/Footer";
import { useRef } from "react";

export const RecipesByIngredient = () => {
  const listRef = useRef(null);
  return (
    <>
      <Navigationbar></Navigationbar>

      <SearchBar
        scrollToRef={listRef}
        titleSearchBar={"By Ingredient"}
        placeholderSearchBar={"Enter Ingredient"}
      ></SearchBar>

      <div className="list">
        <div ref={listRef}>
          <ListRecipes></ListRecipes>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
