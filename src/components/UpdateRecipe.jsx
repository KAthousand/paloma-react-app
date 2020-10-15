import React, { useState } from "react";
import axios from "axios";
import "./UpdateRecipe.css";

function UpdateRecipe(props) {
  const { edit, setEdit } = props;
  const { recipe } = props;
  const { fetchRecipe, setFetchRecipe } = props;

  const [name, setName] = useState(
    recipe.fields.name ? recipe.fields.name : ""
  );
  const [amount1, setAmount1] = useState(recipe.fields.amount1);
  const [ingredients1, setIngredients1] = useState(recipe.fields.ingredients1);
  const [amount2, setAmount2] = useState(
    recipe.fields.amount2 ? recipe.fields.amount2 : ""
  );
  const [ingredients2, setIngredients2] = useState(
    recipe.fields.ingredients2 ? recipe.fields.ingredients2 : ""
  );
  const [amount3, setAmount3] = useState(
    recipe.fields.amount3 ? recipe.fields.amount3 : ""
  );
  const [ingredients3, setIngredients3] = useState(
    recipe.fields.ingredients3 ? recipe.fields.ingredients3 : ""
  );
  const [amount4, setAmount4] = useState(
    recipe.fields.amount4 ? recipe.fields.amount4 : ""
  );
  const [ingredients4, setIngredients4] = useState(
    recipe.fields.ingredients4 ? recipe.fields.ingredients4 : ""
  );
  const [amount5, setAmount5] = useState(
    recipe.fields.amount5 ? recipe.fields.amount5 : ""
  );
  const [ingredients5, setIngredients5] = useState(
    recipe.fields.ingredients5 ? recipe.fields.ingredients5 : ""
  );
  const [amount6, setAmount6] = useState(
    recipe.fields.amount6 ? recipe.fields.amount6 : ""
  );
  const [ingredients6, setIngredients6] = useState(
    recipe.fields.ingredients6 ? recipe.fields.ingredients6 : ""
  );
  const [amount7, setAmount7] = useState(
    recipe.fields.amount7 ? recipe.fields.amount7 : ""
  );
  const [ingredients7, setIngredients7] = useState(
    recipe.fields.ingredients7 ? recipe.fields.ingredients7 : ""
  );
  const [amount8, setAmount8] = useState(
    recipe.fields.amount8 ? recipe.fields.amount8 : ""
  );
  const [ingredients8, setIngredients8] = useState(
    recipe.fields.ingredients8 ? recipe.fields.ingredients8 : ""
  );
  const [amount9, setAmount9] = useState(
    recipe.fields.amount9 ? recipe.fields.amount9 : ""
  );
  const [ingredients9, setIngredients9] = useState(
    recipe.fields.ingredients9 ? recipe.fields.ingredients9 : ""
  );
  const [amount10, setAmount10] = useState(
    recipe.fields.amount10 ? recipe.fields.amount10 : ""
  );
  const [ingredients10, setIngredients10] = useState(
    recipe.fields.ingredients10 ? recipe.fields.ingredients10 : ""
  );
  const [garnish, setGarnish] = useState(recipe.fields.garnish);
  const [instructions, setInstructions] = useState(recipe.fields.instructions);
  const [glassware, setGlassware] = useState(recipe.fields.glassware);
  const [history, setHistory] = useState(recipe.fields.history);
  const [category, setCategory] = useState(recipe.fields.category);
  const [flavorProfile, setFlavorProfile] = useState(
    recipe.fields.flavorProfile
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      amount1,
      ingredients1,
      amount2,
      ingredients2,
      amount3,
      ingredients3,
      amount4,
      ingredients4,
      amount5,
      ingredients5,
      amount6,
      ingredients6,
      amount7,
      ingredients7,
      amount8,
      ingredients8,
      amount9,
      ingredients9,
      amount10,
      ingredients10,
      garnish,
      instructions,
      glassware,
      history,
      category,
      flavorProfile,
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cocktails/${recipe.id}`;
    await axios.put(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setFetchRecipe(!fetchRecipe);

    setName("");
    setAmount1("");
    setIngredients1("");
    setAmount2("");
    setIngredients2("");
    setAmount3("");
    setIngredients3("");
    setAmount4("");
    setIngredients4("");
    setAmount5("");
    setIngredients5("");
    setAmount6("");
    setIngredients6("");
    setAmount7("");
    setIngredients7("");
    setAmount8("");
    setIngredients8("");
    setAmount9("");
    setIngredients9("");
    setAmount10("");
    setIngredients10("");
    setGarnish("");
    setInstructions("");
    setGlassware("");
    setHistory("");
    setCategory("");
    setFlavorProfile("");

    setEdit(!edit);
  };
  // console.log(recipe.id);
  return (
    <div className="update-content">
      <div className="update-title-container">
        <h3 className="update-title">Update Recipe</h3>
      </div>
      <form className="update-form" onSubmit={handleSubmit}>
        <div className="update-ingredients-container">
          <label htmlFor="name"></label>
          <input
            className="update-name"
            name="name"
            type="text"
            placeholder="Cocktail Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="amount1"></label>
          <input
            className="update-amount"
            name="amount1"
            type="text"
            placeholder="Amount"
            value={amount1}
            onChange={(e) => setAmount1(e.target.value)}
          />
          <label htmlFor="ingredients1"></label>
          <input
            className="update-ingredients"
            name="ingredients1"
            type="text"
            placeholder="First Ingredient"
            value={ingredients1}
            onChange={(e) => setIngredients1(e.target.value)}
          />
          <label htmlFor="amount2"></label>
          {amount1 !== "" && (
            <input
              className="update-amount"
              name="amount2"
              type="text"
              placeholder="Amount"
              value={amount2}
              onChange={(e) => setAmount2(e.target.value)}
            />
          )}
          <label htmlFor="ingredients2"></label>
          {ingredients1 !== "" && (
            <input
              className="update-ingredients"
              name="ingredients2"
              type="text"
              placeholder="Second Ingredient"
              value={ingredients2}
              onChange={(e) => setIngredients2(e.target.value)}
            />
          )}
          <label htmlFor="amount3"></label>
          {amount2 !== "" && (
            <input
              className="update-amount"
              name="amount3"
              type="text"
              placeholder="Amount"
              value={amount3}
              onChange={(e) => setAmount3(e.target.value)}
            />
          )}
          <label htmlFor="ingredients3"></label>
          {ingredients2 !== "" && (
            <input
              className="update-ingredients"
              name="ingredients3"
              type="text"
              placeholder="Third Ingredient"
              value={ingredients3}
              onChange={(e) => setIngredients3(e.target.value)}
            />
          )}
          <label htmlFor="amount4"></label>
          {amount3 !== "" && (
            <input
              className="update-amount"
              name="amount4"
              type="text"
              placeholder="Amount"
              value={amount4}
              onChange={(e) => setAmount4(e.target.value)}
            />
          )}
          <label htmlFor="ingredients4"></label>
          {ingredients3 !== "" && (
            <input
              className="update-ingredients"
              name="ingredients4"
              type="text"
              placeholder="Fourth Ingredient"
              value={ingredients4}
              onChange={(e) => setIngredients4(e.target.value)}
            />
          )}
          <label htmlFor="amount5"></label>
          {amount4 !== "" && (
            <input
              className="update-amount"
              name="amount5"
              type="text"
              placeholder="Amount"
              value={amount5}
              onChange={(e) => setAmount5(e.target.value)}
            />
          )}
          <label htmlFor="ingredients5"></label>
          {ingredients4 !== "" && (
            <input
              className="update-ingredients"
              name="ingredients5"
              type="text"
              placeholder="Fifth Ingredient"
              value={ingredients5}
              onChange={(e) => setIngredients5(e.target.value)}
            />
          )}
          <label htmlFor="amount6"></label>
          {amount5 !== "" && (
            <input
              className="update-amount"
              name="amount6"
              type="text"
              placeholder="Amount"
              value={amount6}
              onChange={(e) => setAmount6(e.target.value)}
            />
          )}
          <label htmlFor="ingredients6"></label>
          {ingredients5 !== "" && (
            <input
              className="update-ingredients"
              name="ingredients6"
              type="text"
              placeholder="Sixth Ingredient"
              value={ingredients6}
              onChange={(e) => setIngredients6(e.target.value)}
            />
          )}
          <label htmlFor="amount7"></label>
          {amount6 !== "" && (
            <input
              className="update-amount"
              name="amount7"
              type="text"
              placeholder="Amount"
              value={amount7}
              onChange={(e) => setAmount7(e.target.value)}
            />
          )}
          <label htmlFor="ingredients7"></label>
          {ingredients6 !== "" && (
            <input
              className="update-ingredients"
              name="ingredients7"
              type="text"
              placeholder="Seventh Ingredient"
              value={ingredients7}
              onChange={(e) => setIngredients7(e.target.value)}
            />
          )}
          <label htmlFor="amount8"></label>
          {amount7 !== "" && (
            <input
              className="update-amount"
              name="amount8"
              type="text"
              placeholder="Amount"
              value={amount8}
              onChange={(e) => setAmount8(e.target.value)}
            />
          )}
          <label htmlFor="ingredients8"></label>
          {ingredients7 !== "" && (
            <input
              className="update-ingredients"
              name="ingredients8"
              type="text"
              placeholder="Eigth Ingredient"
              value={ingredients8}
              onChange={(e) => setIngredients8(e.target.value)}
            />
          )}
          <label htmlFor="amount9"></label>
          {amount8 !== "" && (
            <input
              className="update-amount"
              name="amount9"
              type="text"
              placeholder="Amount"
              value={amount9}
              onChange={(e) => setAmount9(e.target.value)}
            />
          )}
          <label htmlFor="ingredients9"></label>
          {ingredients8 !== "" && (
            <input
              className="update-ingredients"
              name="ingredients9"
              type="text"
              placeholder="Ninth Ingredient"
              value={ingredients9}
              onChange={(e) => setIngredients9(e.target.value)}
            />
          )}
          <label htmlFor="amount10"></label>
          {amount9 !== "" && (
            <input
              className="update-amount"
              name="amount10"
              type="text"
              placeholder="Amount"
              value={amount10}
              onChange={(e) => setAmount10(e.target.value)}
            />
          )}
          <label htmlFor="ingredients10"></label>
          {ingredients9 !== "" && (
            <input
              className="update-ingredients"
              name="ingredients10"
              type="text"
              placeholder="Tenth Ingredient"
              value={ingredients10}
              onChange={(e) => setIngredients10(e.target.value)}
            />
          )}
          {(amount10 !== "" || ingredients10 !== "") && (
            <p>10 Ingredient Maximum</p>
          )}
        </div>
        <label htmlFor="garnish"></label>
        <input
          className="update-garnish"
          name="garnish"
          type="text"
          placeholder="Garnish"
          value={garnish}
          onChange={(e) => setGarnish(e.target.value)}
        />
        <br />
        <label htmlFor="instructions"></label>
        <input
          className="update-instructions"
          name="instructions"
          type="text"
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <br />

        <label htmlFor="glassware"></label>
        <input
          className="update-glassware"
          name="glassware"
          type="text"
          placeholder="Glassware"
          value={glassware}
          onChange={(e) => setGlassware(e.target.value)}
        />
        <br />
        <label htmlFor="history"></label>
        <input
          className="update-history"
          name="history"
          type="text"
          placeholder="History"
          value={history}
          onChange={(e) => setHistory(e.target.value)}
        />
        <br />
        <label htmlFor="category"></label>
        <input
          className="update-category"
          name="category"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <label htmlFor="flavorProfile"></label>
        <input
          className="update-flavors"
          name="flavorProfile"
          type="text"
          placeholder="Flavor Profile"
          value={flavorProfile}
          onChange={(e) => setFlavorProfile(e.target.value)}
        />
        <br />
        <button className="update-submit" type="submit">
          Submit
        </button>
        <button onClick={() => setEdit(!edit)}>Back</button>
      </form>
    </div>
  );
}

export default UpdateRecipe;
