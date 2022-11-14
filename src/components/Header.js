import { RecipeContext } from "./App";
import React, { useContext } from "react";
import ResultsList from "./ResultsList";

export default function Header({ searchedRecipes }) {
  const { handleSearch } = useContext(RecipeContext);

  return (
    <header className="bar">
      <input
        type="text"
        placeholder="ex. Risotto alla milanese"
        onChange={(e) => handleSearch(e.target.value)}
        onBlur={(e) => {
          // setTimeout(() => {
          e.target.value = "";
          handleSearch(e.target.value);
          // }, 500);
        }}
      />
      <ResultsList searchedRecipes={searchedRecipes} />
    </header>
  );
}
