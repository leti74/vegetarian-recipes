import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { RecipesByIngredient } from "./pages/RecipesByIngredient.jsx";
import { RecipePage } from "./pages/RecipePage.jsx";
import { ListRecipeProvider } from "./stores/ListRecipeContext.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import { SearchRecipe } from "./pages/SearchRecipe.jsx";
import { WhyPage } from "./pages/WhyPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ListRecipeProvider>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/byIngredient" element={<RecipesByIngredient />} />
          <Route path="/search" element={<SearchRecipe />} />
          <Route path="/:recipeID" element={<RecipePage />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </ListRecipeProvider>
);
