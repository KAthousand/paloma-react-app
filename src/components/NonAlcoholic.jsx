import React from "react";
import "./NonAlcoholic.css";

function NonAlcoholic(props) {
  const { ageToggle } = props;
  return (
    <div className={ageToggle ? "na-container-open" : "hide"}>
      <h1>Hello World</h1>
    </div>
  );
}

export default NonAlcoholic;
