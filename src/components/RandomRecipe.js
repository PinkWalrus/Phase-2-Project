import React, { useEffect, useState } from "react";
import API_KEY from "../API_KEY";
import Accordion from "./Accordion";
import { GoPerson } from "react-icons/go";

function RandomRecipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1`
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
          <div key={recipe.id} className="recipe">
            <div className="recipe-left">
              <img src={recipe.image} alt={recipe.title} />
              <h1>{recipe.title}</h1>
            </div>
            <div className="recipe-right">
              <div className="recipe-about">
                <h2>ABOUT THIS RECIPE</h2>
                <h3>
                  <span>
                    <GoPerson />
                    <span> {recipe.servings} servings</span>
                  </span>
                </h3>
              </div>
              <hr />
              {recipe.summary === null ? null : (
                <Accordion title="Summary" content={recipe.summary} />
              )}

              {recipe.instructions === null ? null : (
                <Accordion
                  title="Instructions"
                  content={`<li>${recipe.instructions}</li>`}
                />
              )}

              <Accordion
                title="Ingredients"
                content={recipe.extendedIngredients
                  ?.map(
                    (ingredient) =>
                      `<li key=${ingredient.id}><input type="checkbox">&#160;
                      ${ingredient.original}</input></li>`
                  )
                  .join("")}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RandomRecipe;
