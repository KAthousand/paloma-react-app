import React from "react";
import "./Home.css";

function Home(props) {
  const { recipes } = props;

  const randomNum = Math.floor(Math.random() * (recipes.length - 1));
  const randomRecipe = recipes[randomNum];
  // recipes[randomNum] && console.log(randomRecipe.fields);

  return (
    <div>
      <h3>Random Recipe</h3>
      <div>{recipes[randomNum] && <h4>{randomRecipe.fields.name}</h4>}</div>
    </div>
  );
}

export default Home;
