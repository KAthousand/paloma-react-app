import React, { useEffect } from "react";
import "./Home.css";

function Home(props) {
  const { recipes } = props;
  const { homeToggle } = props;
  let randomNum = Math.floor(Math.random() * (recipes.length - 1));
  let randomRecipe = recipes[randomNum];
  // recipes[randomNum] && console.log(randomRecipe.fields);
  // setCardToggle(!cardToggle);

  // useEffect(() => {
  //   randomNum = Math.floor(Math.random() * (recipes.length - 1));
  //   randomRecipe = recipes[randomNum];
  // }, []);

  return (
    <div>
      <div className="home-background">
        <div
          className={homeToggle ? "home-container home-open" : "home-container"}
        >
          {recipes[randomNum] && (
            <div className="home-card">
              <h3 className="random-recipe">
                Random <br /> Recipe
              </h3>

              <h4 className="random-name">{randomRecipe.fields.name}</h4>

              <div className="random-content-container">
                <div className="random-card-top-container">
                  <div className="random-ingredients">
                    <h5 className="random-header">Ingredients</h5>

                    <h5 className="random-content">
                      {randomRecipe.fields.amount1}
                      {"  "}
                      {randomRecipe.fields.ingredients1}
                    </h5>

                    <h5 className="random-content">
                      {randomRecipe.fields.amount2}
                      {"  "}
                      {randomRecipe.fields.ingredients2}
                    </h5>

                    <h5 className="random-content">
                      {randomRecipe.fields.amount3}
                      {"  "}
                      {randomRecipe.fields.ingredients3}
                    </h5>

                    <h5 className="random-content">
                      {randomRecipe.fields.amount4}
                      {"  "}
                      {randomRecipe.fields.ingredients4}
                    </h5>

                    <h5 className="random-content">
                      {randomRecipe.fields.amount5}
                      {"  "}
                      {randomRecipe.fields.ingredients5}
                    </h5>

                    <h5 className="random-content">
                      {randomRecipe.fields.amount6}
                      {"  "}
                      {randomRecipe.fields.ingredients6}
                    </h5>

                    <h5 className="random-content">
                      {randomRecipe.fields.amount7}
                      {"  "}
                      {randomRecipe.fields.ingredients7}
                    </h5>

                    <h5 className="random-content">
                      {randomRecipe.fields.amount8}
                      {"  "}
                      {randomRecipe.fields.ingredients8}
                    </h5>

                    <h5 className="random-content">
                      {randomRecipe.fields.amount9}
                      {"  "}
                      {randomRecipe.fields.ingredients9}
                    </h5>

                    <h5 className="random-content">
                      {randomRecipe.fields.amount10}
                      {"  "}
                      {randomRecipe.fields.ingredients10}
                    </h5>
                  </div>
                  <div className="random-garnish-glassware">
                    <div className="random-garnish">
                      {randomRecipe.fields.garnish !== undefined && (
                        <h5 className="random-header">Garnish</h5>
                      )}

                      <h5 className="random-content">
                        {randomRecipe.fields.garnish}
                      </h5>
                    </div>
                    <div className="random-glassware">
                      {randomRecipe.fields.glassware !== undefined && (
                        <h5 className="random-header">Glassware</h5>
                      )}
                      <h5 className="random-content">
                        {randomRecipe.fields.glassware}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="random-instructions">
                  {randomRecipe.fields.instructions !== undefined && (
                    <h5 className="random-header">Instructions</h5>
                  )}

                  <h5 className="random-content">
                    {randomRecipe.fields.instructions}
                  </h5>
                </div>
                <div className="random-history">
                  {randomRecipe.fields.history !== undefined && (
                    <h5 className="random-header">History</h5>
                  )}

                  <h5 className="random-content">
                    {randomRecipe.fields.history}
                  </h5>
                </div>
                <div className="random-category-flavors">
                  <div className="random-category">
                    {randomRecipe.fields.category !== undefined && (
                      <h5 className="random-header">Category</h5>
                    )}

                    <h5 className="random-content">
                      {randomRecipe.fields.category}
                    </h5>
                  </div>
                  <div className="random-flavors">
                    {randomRecipe.fields.flavorProfile !== undefined && (
                      <h5 className="random-header">Flavors</h5>
                    )}

                    <h5 className="random-content">
                      {randomRecipe.fields.flavorProfile}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
