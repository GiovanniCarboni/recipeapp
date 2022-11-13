import React, { useContext } from "react";
import Recipe from "./Recipe";
import addImg from "../icons/add.svg";
import { RecipeContext } from "./App";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      <div className="add-btn--container">
        <button onClick={() => handleRecipeAdd()}>
          <span>Add</span>
          <img src={addImg} alt="icon" />
        </button>
      </div>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
}
