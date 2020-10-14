import React, { useState } from "react";
import Card from "./Card";
import "./Recipes.css";

function Recipes(props) {
  const { fetchRecipe, setFetchRecipe } = props;
  const { cardToggle, setCardToggle } = props;
  const { response } = props;
  const { recipes } = props;
  const { edit, setEdit } = props;
  const { clearSearch, setClearSearch } = props;
  const [selection, setSelection] = useState("");

  function handleSelect(recipe) {
    setSelection(recipe);
    console.log(selection);
    setCardToggle(!cardToggle);
  }

  return (
    <div>
      <div className="recipe-cards-container">
        {clearSearch
          ? response.map((response) => (
              <button
                onClick={() => handleSelect(response)}
                className="recipe-cards"
                key={response.id}
              >
                {response.fields.name}
              </button>
            ))
          : recipes.map((recipe) => (
              <button
                onClick={() => handleSelect(recipe)}
                className={clearSearch ? "hide" : "recipe-cards"}
                key={recipe.id}
              >
                {recipe.fields.name}
              </button>
            ))}
      </div>
      <div>
        <Card
          selection={selection}
          recipes={recipes}
          cardToggle={cardToggle}
          setCardToggle={setCardToggle}
          fetchRecipe={fetchRecipe}
          setFetchRecipe={setFetchRecipe}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
      <div className={response.length < 1 ? "no-result" : "hide"}>
        <h5>No results found</h5>
      </div>
      <button onClick={() => setClearSearch(!clearSearch)}>
        {response.length < 1 ? "Show All Recipes" : "Clear Search"}
      </button>
    </div>
  );
}

export default Recipes;
