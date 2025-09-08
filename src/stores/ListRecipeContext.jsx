import { createContext, useEffect } from "react";
import { useState } from "react";

export const ListRecipeContext = createContext({});

export const ListRecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <ListRecipeContext.Provider
      value={{ recipes, setRecipes, isLoading, setLoading }}
    >
      {children}
    </ListRecipeContext.Provider>
  );
};
