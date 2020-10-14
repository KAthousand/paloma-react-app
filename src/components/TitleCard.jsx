import React from "react";
import { Link } from "react-router-dom";
import "./TitleCard.css";

function TitleCard(props) {
  const { titleCard, setTitleCard } = props;
  const { homeToggle, setHomeToggle } = props;
  const { ageToggle, setAgeToggle } = props;

  const oldEnough = () => {
    setTitleCard(!titleCard);
    setHomeToggle(!homeToggle);
  };

  const tooYoung = () => {
    setTitleCard(!titleCard);
    setAgeToggle(!ageToggle);
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
      <Link to={"/non-alcoholic"}>
        <button onClick={tooYoung}>no</button>
      </Link>
    </div>
  );
}

export default TitleCard;
