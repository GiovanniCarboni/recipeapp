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
          <h1>Potato Salad</h1>
          <div>
            <button>
              <img src={editImg} alt="icon" width="20" />
            </button>
            <button>
              <img src={deleteImg} alt="icon" width="20" />
            </button>
          </div>
        </header>
        <div>
          <span>Cooktime</span>
          <div>
            <span>1:30</span>
            <img src={clock} alt="icon" width="20" />
          </div>
        </div>
        <div>
          <span>Servings</span>
          <div>
            <span>2</span>
            <img src={servingsImg} alt="icon" width="20" />
          </div>
        </div>
        <div>
          <span>Instructions</span>
          <p>
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
          <span>Ingredients</span>
          <IngredientList />
        </div>
      </div>
      <hr />
    </>
  );
}
