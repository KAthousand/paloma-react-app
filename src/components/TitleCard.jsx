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
      <div className="title-content">
        <h1>PALOMA</h1>
        <p> Are you at least 21 years old?</p>
        <div className="title-buttons">
          <button onClick={oldEnough} className="title-button">
            yes
          </button>
          <Link to={"/non-alcoholic"}>
            <button onClick={tooYoung} className="title-button">
              no
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TitleCard;
