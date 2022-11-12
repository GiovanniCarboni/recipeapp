import React, { useEffect } from "react";
import RecipeList from "./RecipeList";
import { useState, createContext } from "react";
import "../scss/App.scss";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = createContext();
const storage = localStorage.getItem("recipes");

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    if (storage) {
      setRecipes(JSON.parse(storage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      cooktime: "",
      servings: 1,
      instructions: "",
      ingredients: [],
    };
    console.log(newRecipe);
    setRecipes([newRecipe, ...recipes]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList
        handleRecipeDelete={handleRecipeDelete}
        handleRecipeAdd={handleRecipeAdd}
        recipes={recipes}
      ></RecipeList>
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Potato Salad",
    cooktime: "2 hours",
    servings: 2,
    instructions:
      "We use white potatoes, or Yukon Golds, in our family’s recipe. Because they have a thinner skin, they’re easy to peel after boiling and taste creamier, a little sweeter, and hold their shape well after cooking. Avoid using starchier potatoes like russets that too easily turn to mush in salads like this.",
    ingredients: [
      {
        id: 1,
        quantity: "3 cup",
        name: "potato",
      },
      {
        id: 2,
        quantity: "1 cup",
        name: "onion",
      },
      {
        id: 3,
        quantity: "1 tbs",
        name: "Salt",
      },
      {
        id: 4,
        quantity: "1",
        name: "avocado",
      },
    ],
  },
  {
    id: 2,
    name: "Beouf Salad",
    cooktime: "Half hour",
    servings: 4,
    instructions:
      "We use white potatoes, or Yukon Golds, in our family’s recipe. Because they have a thinner skin, they’re easy to peel after boiling and taste creamier, a little sweeter, and hold their shape well after cooking. Avoid using starchier potatoes like russets that too easily turn to mush in salads like this.",
    ingredients: [
      {
        id: 1,
        quantity: "3 cup",
        name: "potato",
      },
      {
        id: 2,
        quantity: "1 cup",
        name: "onion",
      },
      {
        id: 3,
        quantity: "1 tbs",
        name: "Salt",
      },
      {
        id: 4,
        quantity: "1",
        name: "avocado",
      },
    ],
  },
];

export default App;
