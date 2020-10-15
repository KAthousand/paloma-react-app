import React from "react";
import "./Header.css";

function Header(props) {
  const { nav, setNav } = props;
  const { recipeToggle, setRecipeToggle } = props;
  const { createToggle, setCreateToggle } = props;
  const { cardToggle, setCardToggle } = props;
  const { homeToggle, setHomeToggle } = props;
  const { edit, setEdit } = props;

  const toggleRecipes = () => {
    setNav(!nav);
    !recipeToggle && setRecipeToggle(!recipeToggle);
    createToggle && setCreateToggle(!createToggle);
    cardToggle && setCardToggle(!cardToggle);
    homeToggle && setHomeToggle(!homeToggle);
    edit && setEdit(!edit);
  };

  const toggleCreate = () => {
    setNav(!nav);
    !createToggle && setCreateToggle(!createToggle);
    recipeToggle && setRecipeToggle(!recipeToggle);
    cardToggle && setCardToggle(!cardToggle);
    homeToggle && setHomeToggle(!homeToggle);
    edit && setEdit(!edit);
  };

  const toggleHome = () => {
    setNav(!nav);
    !homeToggle && setHomeToggle(!homeToggle);
    createToggle && setCreateToggle(!createToggle);
    recipeToggle && setRecipeToggle(!recipeToggle);
    cardToggle && setCardToggle(!cardToggle);
    edit && setEdit(!edit);
  };

  return (
    <div className="header-container">
      <nav className="nav-bar-container">
        <h2 className="nav-logo">PALOMA</h2>
        <button className="nav-icon" onClick={() => setNav(!nav)}>
          &#9776;
        </button>
      </nav>
      <div
        className={
          nav ? "nav-menu-container nav-is-open" : "nav-menu-container"
        }
      >
        <div className="nav-button-container">
          <button className="nav-button" onClick={toggleHome}>
            Home
          </button>
          <button className="nav-button" onClick={toggleCreate}>
            Create Recipe
          </button>
          <button className="nav-button" onClick={toggleRecipes}>
            Recipes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
