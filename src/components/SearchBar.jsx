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
    // setSearch(search.toLowerCase());
    //when recipes is being passed as a prop...
    recipes &&
      // map recipes to look at each recipe
      recipes.map((recipe) => {
        let words = Object.values(recipe.fields);
        words.map((word) => {
          // if (word.toLowerCase().includes(search))
          if (word.includes(search)) {
            !response.includes(recipe) &&
              setResponse((oldArray) => [...oldArray, recipe]);
          } else {
          }
        });
      });

    !recipeToggle && setRecipeToggle(!recipeToggle);
    !clearSearch && setClearSearch(!clearSearch);
    cardToggle && setCardToggle(!cardToggle);
    setSearch("");
  };

  useEffect(() => {
    console.log(response);
  }, [response]);

  // console.log(typeof search === "string");
  return (
    <div>
      <div className="search-container">
        <form className="form-container" onSubmit={handleSearch}>
          <label htmlFor="search"></label>
          <input
            className="searchbar-input"
            name="input"
            type="text"
            placeholder="Find A Recipe"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="submit-search-button" type="Submit">
            <i className="fa fa-search"></i>
          </button>
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
