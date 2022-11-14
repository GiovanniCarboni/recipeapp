import React, { useContext } from "react";
import editImg from "../icons/edit.svg";
import deleteImg from "../icons/delete.svg";
import clock from "../icons/alarm-outline.svg";
import servingsImg from "../icons/servings.svg";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

export default function Recipe(props) {
  const { id, name, cooktime, servings, instructions, ingredients } = props;
  const { handleRecipeDelete, handleRecipeEdit, isSelected } =
    useContext(RecipeContext);

  function handleEdit() {
    handleRecipeEdit(id);
  }
  return (
    <>
      <hr />
      <div id={id} className={isSelected(id) ? "recipe selected" : "recipe"}>
        <header>
          <h1 className="recipe-title">{name}</h1>
          <div>
            <button
              className="edit-btn"
              onClick={() => {
                handleEdit();
              }}
            >
              <img src={editImg} alt="icon" width="30" />
            </button>
            <button
              className="delete-btn"
              onClick={() => handleRecipeDelete(id)}
            >
              <img src={deleteImg} alt="icon" width="30" />
            </button>
          </div>
        </header>
        <div className="cooktime-container">
          <span className="cooktime-container--title">Cooktime</span>
          <div className="cooktime-container--data">
            <span>{cooktime}</span>
            <img src={clock} alt="icon" width="15" />
          </div>
        </div>
        <div className="servings-container">
          <span className="servings-container--title">Servings</span>
          <div className="servings-container--data">
            <span>{servings}</span>
            <img src={servingsImg} alt="icon" width="15" />
          </div>
        </div>
        <div className="instructions-container">
          <span className="instructions-container--title">Instructions</span>
          <p className="instructions-container--text">{instructions}</p>
        </div>
        <div>
          <span className="ingredients-container--title">Ingredients</span>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </>
  );
}
