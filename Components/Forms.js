import React from "react";
import ReactDOM from "react-dom";
const Forms = props => (
  <form onSubmit={props.getRecipe}>
    <input type="text" name="recipeName" />
    <button>Search</button>
  </form>
);
export default Forms;
