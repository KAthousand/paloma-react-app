import React, { useState } from "react";
import axios from "axios";
import UpdateRecipe from "./UpdateRecipe";
import "./Card.css";

function Card(props) {
  const [deleted, setDeleted] = useState(false);

  const { edit, setEdit } = props;
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
      <div className="card-content">
        <div className="card-info">
          {selection && <h3 className="card-name">{selection.fields.name}</h3>}
          <div className="card-ingredients">
            <h4 className="card-header">Ingredients</h4>
            {selection && (
              <p>
                {selection.fields.amount1}
                {"  "}
                {selection.fields.ingredients1}
              </p>
            )}
            {selection && (
              <p>
                {selection.fields.amount2}
                {"  "}
                {selection.fields.ingredients2}
              </p>
            )}
            {selection && (
              <p>
                {selection.fields.amount3}
                {"  "}
                {selection.fields.ingredients3}
              </p>
            )}
            {selection && (
              <p>
                {selection.fields.amount4}
                {"  "}
                {selection.fields.ingredients4}
              </p>
            )}
            {selection && (
              <p>
                {selection.fields.amount5}
                {"  "}
                {selection.fields.ingredients5}
              </p>
            )}
            {selection && (
              <p>
                {selection.fields.amount6}
                {"  "}
                {selection.fields.ingredients6}
              </p>
            )}
            {selection && (
              <p>
                {selection.fields.amount7}
                {"  "}
                {selection.fields.ingredients7}
              </p>
            )}
            {selection && (
              <p>
                {selection.fields.amount8}
                {"  "}
                {selection.fields.ingredients8}
              </p>
            )}
            {selection && (
              <p>
                {selection.fields.amount9}
                {"  "}
                {selection.fields.ingredients9}
              </p>
            )}
            {selection && (
              <p>
                {selection.fields.amount10}
                {"  "}
                {selection.fields.ingredients10}
              </p>
            )}
            {selection && selection.fields.garnish !== undefined && (
              <h4 className="card-header">Garnish</h4>
            )}
            {selection && <p>{selection.fields.garnish}</p>}
            {selection && selection.fields.glassware !== undefined && (
              <h4 className="card-header">Glassware</h4>
            )}
            {selection && <p>{selection.fields.glassware}</p>}
          </div>
          <div className="card-instructions">
            <h4 className="card-header">Instructions</h4>
            {selection && <p>{selection.fields.instructions}</p>}
          </div>
          <div className="card-history">
            {selection && selection.fields.history !== undefined && (
              <h4 className="card-header">History</h4>
            )}
            {selection && <p>{selection.fields.history}</p>}
          </div>
          <div className="card-category-flavors">
            <div className="card-category">
              {selection && selection.fields.category !== undefined && (
                <h4 className="card-header">Category</h4>
              )}
              {selection && <p>{selection.fields.category}</p>}
            </div>
            <div className="card-flavors">
              {selection && selection.fields.flavorProfile !== undefined && (
                <h4 className="card-header">Flavors</h4>
              )}
              {selection && <p>{selection.fields.flavorProfile}</p>}
            </div>
          </div>
          <div className="card-button-container">
            <button onClick={() => setEdit(!edit)}>Edit</button>
            <button onClick={handleDelete}>
              {deleted ? "Deleted" : "Delete"}
            </button>
            <button onClick={() => setCardToggle(!cardToggle)}>Back</button>
          </div>
          <div
            className={
              edit ? "update-container update-open" : "update-container"
            }
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
        </div>
      </div>
    </div>
  );
}

export default Card;
