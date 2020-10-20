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

    setResponse([]);
    // setSearch(search.toLowerCase());
    recipes &&
      recipes.map((recipe) => {
        let words = Object.values(recipe.fields);
        words.map((word) => {
          // if (word.toLowerCase().includes(search))
          if (word.includes(search)) {
            !response.includes(recipe) &&
              setResponse((oldArray) => [...oldArray, recipe]);
            return true;
          } else {
          }
          return true;
        });
        return true;
      });

    !recipeToggle && setRecipeToggle(!recipeToggle);
    !clearSearch && setClearSearch(!clearSearch);
    cardToggle && setCardToggle(!cardToggle);
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
            className="searchbar-input"
            name="input"
            type="text"
            placeholder="Find A Recipe"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="submit-search-button" type="Submit">
            <i className="fa fa-search"></i>
            {/* https://www.w3schools.com/howto/howto_css_search_button.asp */}
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
