import React, { useState } from "react";
import axios from "axios";
import "./CreateRecipe.css";

function CreateRecipe(props) {
  const [name, setName] = useState("");
  const [amount1, setAmount1] = useState("");
  const [ingredients1, setIngredients1] = useState("");
  const [amount2, setAmount2] = useState("");
  const [ingredients2, setIngredients2] = useState("");
  const [amount3, setAmount3] = useState("");
  const [ingredients3, setIngredients3] = useState("");
  const [amount4, setAmount4] = useState("");
  const [ingredients4, setIngredients4] = useState("");
  const [amount5, setAmount5] = useState("");
  const [ingredients5, setIngredients5] = useState("");
  const [amount6, setAmount6] = useState("");
  const [ingredients6, setIngredients6] = useState("");
  const [amount7, setAmount7] = useState("");
  const [ingredients7, setIngredients7] = useState("");
  const [amount8, setAmount8] = useState("");
  const [ingredients8, setIngredients8] = useState("");
  const [amount9, setAmount9] = useState("");
  const [ingredients9, setIngredients9] = useState("");
  const [amount10, setAmount10] = useState("");
  const [ingredients10, setIngredients10] = useState("");
  const [garnish, setGarnish] = useState("");
  const [instructions, setInstructions] = useState("");
  const [glassware, setGlassware] = useState("");
  const [history, setHistory] = useState("");
  const [category, setCategory] = useState("");
  const [flavorProfile, setFlavorProfile] = useState("");

  const { createToggle } = props;
  const { fetchRecipe, setFetchRecipe } = props;

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

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cocktails`;
    await axios.post(
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
  };

  return (
    <div
      className={
        createToggle
          ? "create-recipe-container create-open"
          : "create-recipe-container"
      }
    >
      <div className="create-content">
        <h3 className="create-title">Create Recipe</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input
            name="name"
            type="text"
            placeholder="Cocktail Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="amount1"></label>
          <input
            className="amount"
            name="amount1"
            type="text"
            placeholder="Amount"
            value={amount1}
            onChange={(e) => setAmount1(e.target.value)}
          />
          <label htmlFor="ingredients1"></label>
          <input
            name="ingredients1"
            type="text"
            placeholder="First Ingredient"
            value={ingredients1}
            onChange={(e) => setIngredients1(e.target.value)}
          />
          <label htmlFor="amount2"></label>
          {amount1 !== "" && (
            <input
              className="amount"
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
              className="amount"
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
              className="amount"
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
              className="amount"
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
              className="amount"
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
              className="amount"
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
              className="amount"
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
              className="ingredients"
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
              className="amount"
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
              className="amount"
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
          <br />
          <label htmlFor="garnish"></label>
          <input
            name="garnish"
            type="text"
            placeholder="Garnish"
            value={garnish}
            onChange={(e) => setGarnish(e.target.value)}
          />
          <br />
          <label htmlFor="instructions"></label>
          <input
            name="instructions"
            type="text"
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <br />

          <label htmlFor="glassware"></label>
          <input
            name="glassware"
            type="text"
            placeholder="Glassware"
            value={glassware}
            onChange={(e) => setGlassware(e.target.value)}
          />
          <br />
          <label htmlFor="history"></label>
          <input
            name="history"
            type="text"
            placeholder="History"
            value={history}
            onChange={(e) => setHistory(e.target.value)}
          />
          <br />
          <label htmlFor="category"></label>
          <input
            name="category"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="flavorProfile"></label>
          <input
            name="flavorProfile"
            type="text"
            placeholder="Flavor Profile"
            value={flavorProfile}
            onChange={(e) => setFlavorProfile(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;
