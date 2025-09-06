import "./SearchRecipe.css";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";
import { Navigationbar } from "../components/Navigationbar";
import { DropdownFilter } from "../components/DropdownFilter";
import { ListRecipes } from "../components/ListRecipes";
import { useRef } from "react";

export const SearchRecipe = () => {
  const listRef = useRef(null);
  return (
    <>
      <Navigationbar />

      <DropdownFilter scrollToRef={listRef} classeDropdown="filter-recipes" />

      <SearchBar
        titleSearchBar={"Recipe"}
        placeholderSearchBar={"Search among the recipes"}
        scrollToRef={listRef}
      />

      <div className="list">
        <div ref={listRef}>
          <ListRecipes></ListRecipes>
        </div>
      </div>

      <Footer />
    </>
  );
};
