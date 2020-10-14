import React from "react";
import "./Header.css";

function Header(props) {
  const { nav, setNav } = props;
  const { recipeToggle, setRecipeToggle } = props;

  const toggleRecipes = () => {
    setNav(!nav);
    {
      !recipeToggle && setRecipeToggle(!recipeToggle);
    }
  };

  const toggleAll = () => {
    setNav(!nav);
    recipeToggle && setRecipeToggle(!recipeToggle);
  };

  return (
    <div className="header-container">
      <nav className="nav-bar-container">
        <button>Logo</button>
        <button onClick={toggleAll}>Icon</button>
      </nav>
      <div
        className={
          nav ? "nav-menu-container nav-is-open" : "nav-menu-container"
        }
      >
        <button>Create Recipe</button>
        <button onClick={toggleRecipes}>Recipes</button>
      </div>
    </div>
  );
}

export default Header;
