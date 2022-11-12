import React from "react";

export default function Ingredient({ quantity, name }) {
  return (
    <div className="ingredient-container">
      <span className="ingredient-quantity">{quantity}</span>
      <span className="ingredient-name">{name}</span>
    </div>
  );
}
