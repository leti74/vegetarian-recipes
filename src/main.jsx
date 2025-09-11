import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ListRecipeProvider } from "./stores/ListRecipeContext.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import BasicSpinner from "./components/BasicSpinner";
import "./components/RecipeID.css";

const App = lazy(() => import("./pages/App.jsx"));
const RecipesByIngredient = lazy(() =>
  import("./pages/RecipesByIngredient.jsx")
);
const RecipePage = lazy(() => import("./pages/RecipePage.jsx"));
const SearchRecipe = lazy(() => import("./pages/SearchRecipe.jsx"));
const WhyPage = lazy(() => import("./pages/WhyPage.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <ListRecipeProvider>
    <HelmetProvider>
      <React.StrictMode>
        <HashRouter>
          <Suspense fallback={<BasicSpinner />}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/why" element={<WhyPage />} />
              <Route path="/byIngredient" element={<RecipesByIngredient />} />
              <Route path="/search" element={<SearchRecipe />} />
              <Route path="/:recipeID" element={<RecipePage />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </React.StrictMode>
    </HelmetProvider>
  </ListRecipeProvider>
);
