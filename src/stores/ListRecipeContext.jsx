import { createContext, useEffect } from "react";
import { useState } from "react";

export const ListRecipeContext = createContext({});

export const ListRecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem("ricette");
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ricette", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <ListRecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </ListRecipeContext.Provider>
  );
};
