import React from "react";
import "./Header.css";

function Header(props) {
  const { nav, setNav } = props;
  const { recipeToggle, setRecipeToggle } = props;
  const { createToggle, setCreateToggle } = props;
  const { cardToggle, setCardToggle } = props;
  const { edit, setEdit } = props;

  const toggleRecipes = () => {
    setNav(!nav);
    !recipeToggle && setRecipeToggle(!recipeToggle);
    createToggle && setCreateToggle(!createToggle);
    cardToggle && setCardToggle(!cardToggle);
    edit && setEdit(!edit);
  };

  const toggleCreate = () => {
    setNav(!nav);
    !createToggle && setCreateToggle(!createToggle);
    recipeToggle && setRecipeToggle(!recipeToggle);
    cardToggle && setCardToggle(!cardToggle);
    edit && setEdit(!edit);
  };

  const toggleHome = () => {
    setNav(!nav);
    createToggle && setCreateToggle(!createToggle);
    recipeToggle && setRecipeToggle(!recipeToggle);
    cardToggle && setCardToggle(!cardToggle);
    edit && setEdit(!edit);
  };

  // const toggleAll = () => {
  //   setNav(!nav);
  //   recipeToggle && setRecipeToggle(!recipeToggle);
  // };

  return (
    <div className="header-container">
      <nav className="nav-bar-container">
        <button>Logo</button>
        <button onClick={() => setNav(!nav)}>Icon</button>
      </nav>
      <div
        className={
          nav ? "nav-menu-container nav-is-open" : "nav-menu-container"
        }
      >
        <button onClick={toggleHome}>Home</button>
        <button onClick={toggleCreate}>Create Recipe</button>
        <button onClick={toggleRecipes}>Recipes</button>
      </div>
    </div>
  );
}

export default Header;
