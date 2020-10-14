import React, { useState, useEffect } from "react";
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
  const { clearSearch, setClearSearch } = props;

  const handleSearch = (e) => {
    e.preventDefault();
    //make sure response is empty before search to clear old searches
    setResponse([]);

    //when recipes is being passed as a prop...
    recipes &&
      // map recipes to look at each recipe
      recipes.map((recipe) => {
        // console.log(`${search}`);
        // console.log(Object.values(recipe.fields));
        // create container for object values
        let words = Object.values(recipe.fields);
        // if object values includes search
        words.includes(search) &&
          setResponse((oldArray) => [...oldArray, recipe]);
      });

    // console.log(response);
    !recipeToggle && setRecipeToggle(!recipeToggle);
    !clearSearch && setClearSearch(!clearSearch);
    setSearch("");
  };

  useEffect(() => {
    console.log(response);
  }, [response]);

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
            response={response}
            recipes={recipes}
            cardToggle={cardToggle}
            setCardToggle={setCardToggle}
            fetchRecipe={fetchRecipe}
            setFetchRecipe={setFetchRecipe}
            edit={edit}
            setEdit={setEdit}
            clearSearch={clearSearch}
            setClearSearch={setClearSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
