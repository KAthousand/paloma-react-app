import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [fetchRecipe, setFetchRecipe] = useState(false);
  const [nav, setNav] = useState(false);
  const [recipeToggle, setRecipeToggle] = useState(false);

  useEffect(() => {
    const makeApiCall = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cocktails`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      // console.log(response.data.records);
      setRecipes(response.data.records);
    };
    makeApiCall();
  }, [fetchRecipe]);

  return (
    <div className="App">
      <Header
        nav={nav}
        setNav={setNav}
        recipeToggle={recipeToggle}
        setRecipeToggle={setRecipeToggle}
      />
      <div>
        <Home />
      </div>
      <SearchBar
        nav={nav}
        recipes={recipes}
        recipeToggle={recipeToggle}
        setRecipeToggle={setRecipeToggle}
      />
    </div>
  );
}

export default App;
