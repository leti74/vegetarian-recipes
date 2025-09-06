import "./DropdownFilter.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { API_KEY, BASE_URL } from "../api/spoonacular";
import axios from "axios";
import { useContext } from "react";
import { ListRecipeContext } from "../stores/ListRecipeContext";

export const DropdownFilter = ({ classeDropdown, scrollToRef }) => {
  const { setRecipes } = useContext(ListRecipeContext);

  const handleclickFilter = (category) => {
    axios
      .get(`${BASE_URL}/complexSearch`, {
        params: {
          apiKey: API_KEY,
          type: category,
          addRecipeInformation: true,
        },
      })
      .then((res) => {
        setRecipes(res.data.results);
        console.log(res.data.results);
        if (scrollToRef?.current) {
          scrollToRef.current.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((err) => console.error("Error in the filter:", err));
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Filter"
      className={`filter-dropdown ${classeDropdown}`}
    >
      <Dropdown.Item
        href="#/action-1"
        className="selectedItem"
        onClick={() => {
          handleclickFilter("breakfast");
        }}
      >
        Breakfast
      </Dropdown.Item>
      <Dropdown.Item
        className="selectedItem"
        onClick={() => {
          handleclickFilter("snack");
        }}
      >
        Snack
      </Dropdown.Item>
      <Dropdown.Item
        className="selectedItem"
        onClick={() => {
          handleclickFilter("main course");
        }}
      >
        Main Course
      </Dropdown.Item>
      <Dropdown.Item
        className="selectedItem"
        onClick={() => {
          handleclickFilter("side dish");
        }}
      >
        Side Dish
      </Dropdown.Item>
      <Dropdown.Item
        className="selectedItem"
        onClick={() => {
          handleclickFilter("dessert");
        }}
      >
        Dessert
      </Dropdown.Item>
    </DropdownButton>
  );
};
