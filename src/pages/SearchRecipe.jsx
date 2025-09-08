import "./SearchRecipe.css";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";
import { Navigationbar } from "../components/Navigationbar";
import { DropdownFilter } from "../components/DropdownFilter";
import { ListRecipes } from "../components/ListRecipes";

export const SearchRecipe = () => {
  return (
    <>
      <Navigationbar />

      <DropdownFilter classeDropdown="filter-recipes" />

      <SearchBar
        titleSearchBar={"Recipe"}
        placeholderSearchBar={"Search among the recipes"}
      />

      <div className="list">
        <div>
          <ListRecipes></ListRecipes>
        </div>
      </div>

      <Footer />
    </>
  );
};
