import React, { useContext } from "react";
import { RecipeContext } from "./App";

export default function ResultsList({ searchedRecipes }) {
  const { isSearching, findRecipe } = useContext(RecipeContext);
  return (
    <div className={`results--container ${isSearching() && "display"}`}>
      {isSearching() &&
        searchedRecipes.map((recipe) => {
          return (
            <button
              key={recipe.id}
              className="result"
              onMouseDown={() => findRecipe(recipe.id)}
            >
              {recipe.name}
            </button>
          );
        })}
    </div>
  );
}
