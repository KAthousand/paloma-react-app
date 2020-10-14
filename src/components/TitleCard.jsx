import React from "react";
import "./TitleCard.css";

function TitleCard(props) {
  const { titleCard, setTitleCard } = props;
  const { homeToggle, setHomeToggle } = props;

  const oldEnough = () => {
    setTitleCard(!titleCard);
    setHomeToggle(!homeToggle);
  };

  return (
    <div
      className={
        titleCard ? "title-card-container" : "title-card-container title-open"
      }
    >
      <h1>paloma</h1>
      <p> are you old?</p>
      <button onClick={oldEnough}>yes</button>
      <button>no</button>
    </div>
  );
}

export default TitleCard;
