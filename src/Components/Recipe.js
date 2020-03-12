import React from "react";
import style from "./Recipe-module.css";

const Recipe = props => {
  return (
    <div className="recipes">
      <center>
        <h1>
          <center>{props.title}</center>
        </h1>

        <ol>
          {props.ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>

        <p>
          <b>Calories:</b>
          {props.calories}
        </p>

        <img src={props.image} alt="" className="image" />
      </center>
    </div>
  );
};
export default Recipe;
