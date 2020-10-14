import React, { useState } from "react";
import Card from "./Card";
import "./Home.css";

function Home(props) {
  const { recipes } = props;
  const { homeToggle, setHomeToggle } = props;
  const randomNum = Math.floor(Math.random() * (recipes.length - 1));
  const randomRecipe = recipes[randomNum];
  // recipes[randomNum] && console.log(randomRecipe.fields);
  // setCardToggle(!cardToggle);
  return (
    <div className="home-background">
      <div
        classname={homeToggle ? "home-container home-open" : "home-container"}
      >
        {/* {recipes[randomNum] && <h4>{randomRecipe.fields.name}</h4>} */}
      </div>
    </div>
  );
}

export default Home;
