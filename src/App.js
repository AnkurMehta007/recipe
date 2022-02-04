import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [value, setValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegetarian");

  let url = `https://api.edamam.com/search?q=${value}&app_id=602c0e67&app_key=
1304e57f6bd65e2ff90cf8c9de618748&calories=591-722&health=${healthLabel}`;

  async function getRecipe() {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  }

  function onSubmit(e) {
    e.preventDefault();
    getRecipe();
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="heading">Food Recipes</h1>
        <form className="form-search" onSubmit={onSubmit}>
          <input
            className="input1"
            type="text"
            placeholder=" Write Ingrident "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <input className="input2" type="submit" value="search"></input>
          <select
            onChange={(e) => {
              setHealthLabel(e.target.value);
            }}
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="alcohol-free">Alcohol-free</option>
          </select>
        </form>
      </div>
      <div className="recipeTile-container">
        {recipes.map((recipe, index) => {
          return <RecipeTile key={index} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
