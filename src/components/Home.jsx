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
          <div className="home-card">
            <h3 className="random-recipe">
              Random <br /> Recipe
            </h3>
            {recipes[randomNum] && (
              <h4 className="random-name">{randomRecipe.fields.name}</h4>
            )}
            <div className="random-content-container">
              <div className="random-ingredients">
                {recipes[randomNum] && (
                  <h5 className="random-header">Ingredients</h5>
                )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.amount1}
                    {"  "}
                    {randomRecipe.fields.ingredients1}
                  </h5>
                )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.amount2}
                    {"  "}
                    {randomRecipe.fields.ingredients2}
                  </h5>
                )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.amount3}
                    {"  "}
                    {randomRecipe.fields.ingredients3}
                  </h5>
                )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.amount4}
                    {"  "}
                    {randomRecipe.fields.ingredients4}
                  </h5>
                )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.amount5}
                    {"  "}
                    {randomRecipe.fields.ingredients5}
                  </h5>
                )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.amount6}
                    {"  "}
                    {randomRecipe.fields.ingredients6}
                  </h5>
                )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.amount7}
                    {"  "}
                    {randomRecipe.fields.ingredients7}
                  </h5>
                )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.amount8}
                    {"  "}
                    {randomRecipe.fields.ingredients8}
                  </h5>
                )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.amount9}
                    {"  "}
                    {randomRecipe.fields.ingredients9}
                  </h5>
                )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.amount10}
                    {"  "}
                    {randomRecipe.fields.ingredients10}
                  </h5>
                )}
              </div>
              <div className="random-garnish">
                {recipes[randomNum] &&
                  randomRecipe.fields.garnish !== undefined && (
                    <h5 className="random-header">Garnish</h5>
                  )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.garnish}
                  </h5>
                )}
              </div>
              <div className="random-instructions">
                {recipes[randomNum] &&
                  randomRecipe.fields.instructions !== undefined && (
                    <h5 className="random-header">Instructions</h5>
                  )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.instructions}
                  </h5>
                )}
              </div>
              <div className="random-glassware">
                {recipes[randomNum] &&
                  randomRecipe.fields.instructions !== undefined && (
                    <h5 className="random-header">Glassware</h5>
                  )}
                {recipes[randomNum] && (
                  <h5 className="random-content">
                    {randomRecipe.fields.glassware}
                  </h5>
                )}
              </div>
            </div>
            <div>
              {/* {recipes[randomNum] && (
                <h5 className="random-content">
                  {randomRecipe.fields.garnish}
                </h5>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
