import React, { useEffect } from "react";
import RecipeList from "./RecipeList";
import { useState, createContext } from "react";
import "../scss/App.scss";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./RecipeEdit";
import bookImg from "../icons/book.svg";
import Header from "./Header";

export const RecipeContext = createContext();
const storage = localStorage.getItem("recipes");

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [searchedRecipes, setSearchedRecipes] = useState();

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

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
    handleRecipeEdit,
    handleRecipeChange,
    handleDeselectRecipe,
    isSelected,
    handleSearch,
    isSearching,
    findRecipe,
  };

  function findRecipe(id) {
    document.getElementById(id).scrollIntoView();
    setSelectedRecipeId(id);
  }
  function isSearching() {
    return searchedRecipes?.length > 0;
  }

  function handleSearch(text) {
    if (text.length < 2) {
      setSearchedRecipes([]);
      return;
    }
    const search = new RegExp(text, "i");
    const matchedRecipes = recipes.filter((recipe) =>
      recipe.name.match(search)
    );
    setSearchedRecipes(matchedRecipes);
  }

  function isSelected(id) {
    return id === selectedRecipeId;
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((recipe) => recipe.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeEdit(id) {
    setSelectedRecipeId(id);
  }

  function handleDeselectRecipe() {
    setSelectedRecipeId("");
  }

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
    setSelectedRecipeId(newRecipe.id);
  }

  function handleRecipeDelete(id) {
    setSelectedRecipeId("");
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <Header searchedRecipes={searchedRecipes} />
      <main>
        <RecipeList recipes={recipes}></RecipeList>
        {selectedRecipeId ? (
          <RecipeEdit selectedRecipe={selectedRecipe} />
        ) : (
          <div className="edit">
            <img src={bookImg} alt="icon" width="45" />
            <span>Add or edit a recipe</span>
          </div>
        )}
      </main>
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
    name: "Risotto alla Milanese",
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
    id: 3,
    name: "Culurgiones",
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
    id: 4,
    name: "Spicy Watermelon",
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
    id: 5,
    name: "Banana Cupcake",
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
    id: 6,
    name: "Onion Rings",
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
    id: 7,
    name: "Jollo fries",
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
    id: 8,
    name: "Creme Brule",
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
  {
    id: 9,
    name: "Christmas Meatloaf",
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
  {
    id: 10,
    name: "Amatriciana Pasta",
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
  {
    id: 11,
    name: "Escargot",
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
