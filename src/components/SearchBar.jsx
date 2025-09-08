import { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import { BASE_URL } from "../api/spoonacular";
import { API_KEY } from "../api/spoonacular";
import { useContext } from "react";
import { ListRecipeContext } from "../stores/ListRecipeContext";
import { useLocation } from "react-router-dom";
import BasicSpinner from "./BasicSpinner";

export const SearchBar = ({ titleSearchBar, placeholderSearchBar }) => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const { setRecipes, isLoading, setLoading } = useContext(ListRecipeContext);

  const handleclickSearch = () => {
    setLoading(true);
    const byIngredient = location.pathname.includes("/byIngredient");

    axios
      .get(`${BASE_URL}/complexSearch`, {
        params: {
          ...(byIngredient
            ? { includeIngredients: inputValue }
            : { query: inputValue }),
          apiKey: API_KEY,
          fillIngredients: true,
          instructionsRequired: true,
          tags: "vegetarian",
          addRecipeInformation: true,
        },
      })
      .then((answer) => {
        setRecipes(answer.data.results);
        setLoading(false);
        console.log(answer.data.results);
      })
      .catch((error) => {
        console.log("errore nella richiesta:", error);
      });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="content">
        <h1 className="title-search"> {titleSearchBar}</h1>
        <div className="section-input">
          <input
            className="input-search"
            type="text"
            placeholder={placeholderSearchBar}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleclickSearch();
              }
            }}
          />
          <button onClick={handleclickSearch} className="btn-send">
            Send
          </button>
        </div>

        {isLoading && (
          <div className="loader">
            <BasicSpinner />
            <p>Loading recipes</p>
          </div>
        )}
      </div>
    </>
  );
};
