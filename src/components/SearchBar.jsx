import React, { useState } from "react";
import Recipes from "./Recipes";
import "./SearchBar.css";

function SearchBar(props) {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState([]);
  const { fetchRecipe, setFetchRecipe } = props;
  const { recipeToggle, setRecipeToggle } = props;
  const { cardToggle, setCardToggle } = props;
  const { recipes } = props;
  const { edit, setEdit } = props;

  const handleSearch = (e) => {
    e.preventDefault();
    recipes.length >= 1 &&
      recipes.map((recipe) => {
        let fields = Object.values(recipe.fields);
        fields.includes(search)
          ? setResponse((oldArray) => [...oldArray, recipe])
          : console.log(`wrong item`);
      });
    console.log(response);
    !recipeToggle && setRecipeToggle(!recipeToggle);
  };
  return (
    <div>
      <div className="search-container">
        <form className="form-container" onSubmit={handleSearch}>
          <label htmlFor="search"></label>
          <input
            name="input"
            type="text"
            placeholder="Find A Recipe"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="Submit">Submit</button>
        </form>
        <div
          className={
            recipeToggle
              ? "recipes-container recipes-open"
              : "recipes-container"
          }
        >
          <Recipes
            recipes={recipes}
            cardToggle={cardToggle}
            setCardToggle={setCardToggle}
            fetchRecipe={fetchRecipe}
            setFetchRecipe={setFetchRecipe}
            edit={edit}
            setEdit={setEdit}
          />
          <button>hello</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
