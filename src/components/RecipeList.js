import React from "react";
import Recipe from "./Recipe";

export default function RecipeList() {
  return (
    <>
      <div className="recipe-list">
        <div>
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
        <button>Add recipe</button>
      </div>
    </>
  );
}
