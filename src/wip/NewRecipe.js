import React from "react";
import { useEffect, useState } from "react";
import API_KEY from "../API_KEY";

function NewRecipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    )
      .then((r) => r.json())
      .then((data) => {
        setRecipes(data.recipes);
        console.log(data.recipes);
      });
  }, []);

  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
            <p>{id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NewRecipe;
