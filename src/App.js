import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import CreateRecipe from "./components/CreateRecipe";
import TitleCard from "./components/TitleCard";
import NonAlcoholic from "./components/NonAlcoholic";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [fetchRecipe, setFetchRecipe] = useState(false);
  const [nav, setNav] = useState(false);
  const [recipeToggle, setRecipeToggle] = useState(false);
  const [createToggle, setCreateToggle] = useState(false);
  const [cardToggle, setCardToggle] = useState(false);
  const [edit, setEdit] = useState(false);
  const [clearSearch, setClearSearch] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [titleCard, setTitleCard] = useState(false);
  const [ageToggle, setAgeToggle] = useState(false);

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
      <TitleCard
        titleCard={titleCard}
        setTitleCard={setTitleCard}
        homeToggle={homeToggle}
        setHomeToggle={setHomeToggle}
        ageToggle={ageToggle}
        setAgeToggle={setAgeToggle}
      />
      <Route exact path="/non-alcoholic">
        <NonAlcoholic ageToggle={ageToggle} setAgeToggle={setAgeToggle} />
      </Route>
      <Header
        nav={nav}
        setNav={setNav}
        recipeToggle={recipeToggle}
        setRecipeToggle={setRecipeToggle}
        createToggle={createToggle}
        setCreateToggle={setCreateToggle}
        cardToggle={cardToggle}
        setCardToggle={setCardToggle}
        homeToggle={homeToggle}
        setHomeToggle={setHomeToggle}
        edit={edit}
        setEdit={setEdit}
      />
      <div className="content-container">
        <Home recipes={recipes} homeToggle={homeToggle} />
        <CreateRecipe
          createToggle={createToggle}
          setCreateToggle={setCreateToggle}
          fetchRecipe={fetchRecipe}
          setFetchRecipe={setFetchRecipe}
        />
      </div>
      <SearchBar
        nav={nav}
        recipes={recipes}
        recipeToggle={recipeToggle}
        setRecipeToggle={setRecipeToggle}
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
  );
}

export default App;
