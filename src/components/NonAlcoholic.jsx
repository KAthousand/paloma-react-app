import React from "react";
import "./NonAlcoholic.css";

function NonAlcoholic(props) {
  const { ageToggle } = props;
  return (
    <div className={ageToggle ? "na-container na-open" : "na-container"}>
      <div className="na-content-container">
        <h1>Drink Water!</h1>
        <p>Hydrate or Diedrate</p>
      </div>
    </div>
  );
}

export default NonAlcoholic;
