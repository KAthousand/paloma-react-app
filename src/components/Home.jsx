import React from "react";
import "./Home.css";

function Home(props) {
  const { recipes } = props;
  const { homeToggle } = props;
  const randomNum = Math.floor(Math.random() * (recipes.length - 1));
  const randomRecipe = recipes[randomNum];
  // recipes[randomNum] && console.log(randomRecipe.fields);
  // setCardToggle(!cardToggle);

  return (
    <div>
      <div className="home-background">
        <div
          className={homeToggle ? "home-container home-open" : "home-container"}
        >
          <h3>Random Recipe</h3>
          {recipes[randomNum] && <h4>{randomRecipe.fields.name}</h4>}
        </div>
      </div>
    </div>
  );
}

export default Home;
