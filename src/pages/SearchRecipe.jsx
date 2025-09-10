import "./SearchRecipe.css";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";
import { Navigationbar } from "../components/Navigationbar";
import { DropdownFilter } from "../components/DropdownFilter";
import { ListRecipes } from "../components/ListRecipes";
import { Helmet } from "react-helmet-async";

const SearchRecipe = () => {
  return (
    <>
      <Helmet>
        <title>Ricette Vegetariane | EasyVeg</title>
        <meta
          name="description"
          content="Cerca ricette vegetariane in base al nome."
        />
      </Helmet>
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

export default SearchRecipe;
