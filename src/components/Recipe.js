import React from "react";
import editImg from "../icons/edit.svg";
import deleteImg from "../icons/delete.svg";
import clock from "../icons/alarm-outline.svg";
import servingsImg from "../icons/servings.svg";
import IngredientList from "./IngredientList";

export default function Recipe() {
  return (
    <>
      <div className="recipe">
        <header>
          <h1 className="recipe-title">Potato Salad</h1>
          <div>
            <button className="edit-btn">
              <img src={editImg} alt="icon" width="20" />
            </button>
            <button className="delete-btn">
              <img src={deleteImg} alt="icon" width="20" />
            </button>
          </div>
        </header>
        <div className="cooktime-container">
          <span className="cooktime-container--title">Cooktime</span>
          <div className="cooktime-container--data">
            <span>1:30</span>
            <img src={clock} alt="icon" width="15" />
          </div>
        </div>
        <div className="servings-container">
          <span className="servings-container--title">Servings</span>
          <div className="servings-container--data">
            <span>2</span>
            <img src={servingsImg} alt="icon" width="15" />
          </div>
        </div>
        <div className="instructions-container">
          <span className="instructions-container--title">Instructions</span>
          <p className="instructions-container--text">
            lets restructure our files. we will put all our components in a
            folder called componenets, leaving only the index.js outside. then
            we create a css folder, and a fonts folder. Inside css we gonna have
            app.css and import that file fromlets restructure our files. we will
            put all our components in a folder called componenets, leaving only
            the index.js outside. then we create a css folder, and a fonts
            folder. Inside css we gonna have app.css and import that file from
          </p>
        </div>
        <div>
          <span className="ingredients-container--title">Ingredients</span>
          <IngredientList />
        </div>
      </div>
      <hr />
    </>
  );
}
