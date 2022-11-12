import React from "react";
import deleteImg from "../icons/delete.svg";

export default function EditIngredient({
  handleIngredientChange,
  handleDeleteIngredient,
  ingredient,
}) {
  function handleChange(change) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...change });
  }

  return (
    <>
      <input
        type="text"
        value={ingredient.name}
        onChange={(e) =>
          handleChange({
            name: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={ingredient.quantity}
        onChange={(e) => handleChange({ quantity: e.target.value })}
      />
      <button
        className="delete-btn"
        onClick={() => handleDeleteIngredient(ingredient.id)}
      >
        <img src={deleteImg} alt="icon" width="25" />
      </button>
    </>
  );
}
