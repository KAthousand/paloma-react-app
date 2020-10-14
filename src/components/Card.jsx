import React, { useState } from "react";
import axios from "axios";
import UpdateRecipe from "./UpdateRecipe";
import "./Card.css";

function Card(props) {
  const [deleted, setDeleted] = useState(false);

  const { edit, setEdit } = useState(false);
  const { selection } = props;
  const { cardToggle, setCardToggle } = props;
  const { fetchRecipe, setFetchRecipe } = props;
  // selection && console.log(selection.fields);

  const handleDelete = async () => {
    setDeleted(true);
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cocktails/${selection.id}`;
    await axios.delete(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    setFetchRecipe(!fetchRecipe);
    setDeleted(false);
  };

  return (
    <div
      className={
        selection && cardToggle ? "card-container card-open" : "card-container"
      }
    >
      {selection && <h3>{selection.fields.name}</h3>}
      <h3>Ingredients</h3>
      {selection && (
        <h5>
          {selection.fields.amount1} {selection.fields.ingredients1}
        </h5>
      )}
      <h3>Garnish</h3>
      {selection && <h5>{selection.fields.garnish}</h5>}
      <h3>Instructions</h3>
      {selection && <p>{selection.fields.instructions}</p>}
      <button onClick={() => setEdit(!edit)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <div
        className={edit ? "update-container update-open" : "update-container"}
      >
        {edit && (
          <UpdateRecipe
            edit={edit}
            recipe={selection}
            setEdit={setEdit}
            fetchRecipe={fetchRecipe}
            setFetchRecipe={setFetchRecipe}
          />
        )}
      </div>
      <button onClick={() => setCardToggle(!cardToggle)}>Back</button>
    </div>
  );
}

export default Card;
