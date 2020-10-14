import React, { useState } from "react";
import Card from "./Card";
import "./Recipes.css";

function Recipes(props) {
  const { fetchRecipe, setFetchRecipe } = props;
  const { cardToggle, setCardToggle } = props;
  const { recipes } = props;
  const { edit, setEdit } = props;
  const [selection, setSelection] = useState("");

  function handleSelect(recipe) {
    setSelection(recipe);
    console.log(selection);
    setCardToggle(!cardToggle);
  }

  return (
    <div>
      <div className="recipe-cards-container">
        {/* <h4 className="recipe-title">Recipe page.</h4> */}
        {recipes.map((recipe) => (
          <button
            onClick={() => handleSelect(recipe)}
            className="recipe-cards"
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
    </div>
  );
}

export default Recipes;
