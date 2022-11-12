import React, { useContext } from "react";
import EditIngredient from "./EditIngredient";
import { RecipeContext } from "./App";
import addImg from "../icons/add.svg";
import { v4 as uuidv4 } from "uuid";

export default function RecipeEdit({ selectedRecipe }) {
  const { id, name, cooktime, servings, instructions, ingredients } =
    selectedRecipe;
  const { handleRecipeChange, handleDeselectRecipe } =
    useContext(RecipeContext);

  function handleChange(change) {
    handleRecipeChange(id, { ...selectedRecipe, ...change });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...ingredients];
    const index = newIngredients.findIndex(
      (ingredient) => ingredient.id === id
    );
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  function handleDeleteIngredient(id) {
    const newIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
    handleChange({ ingredients: newIngredients });
  }

  function handleAddIngredient() {
    const newIngredients = [...ingredients];
    newIngredients.push({
      id: uuidv4(),
      name: "",
      quantity: "",
    });
    handleChange({ ingredients: newIngredients });
  }

  return (
    <div className="recipe-edit--container">
      <div className="recipe-edit--container__close-btn--container">
        <button onClick={() => handleDeselectRecipe()}>&times;</button>
      </div>
      <form>
        <div className="form-grid">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => handleChange({ name: e.target.value })}
          />
          <label htmlFor="cooktime">Cooktime</label>
          <input
            id="cooktime"
            type="text"
            value={cooktime}
            onChange={(e) => handleChange({ cooktime: e.target.value })}
          />
          <label htmlFor="servings">Servings</label>
          <input
            id="servings"
            type="number"
            value={servings}
            onChange={(e) => handleChange({ servings: e.target.value })}
          />
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            type="text"
            height="200"
            value={instructions}
            onChange={(e) => handleChange({ instructions: e.target.value })}
          />
        </div>
      </form>
      <div className="recipe-edit--container__ingredients--container">
        <span>Ingredients</span>
        <div className="edit-ingredients--grid">
          <span>Name</span>
          <span>amount</span>
          <span></span>
          {ingredients.map((ingredient) => (
            <EditIngredient
              key={ingredient.id}
              handleIngredientChange={handleIngredientChange}
              handleDeleteIngredient={handleDeleteIngredient}
              ingredient={ingredient}
            />
          ))}
        </div>
        <div className="add-btn--container">
          <button onClick={() => handleAddIngredient()}>
            <span>Add</span>
            <img src={addImg} width="25" alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
