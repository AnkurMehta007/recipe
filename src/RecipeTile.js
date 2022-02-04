import React from "react";
import "./RecipeTile.css";

function RecipeTile({ recipe }) {
  return (
    <div>
      <img src={recipe["recipe"]["image"]}></img>
      <p className="recipe-name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default RecipeTile;
