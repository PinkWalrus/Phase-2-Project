import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../API_KEY";
import Accordion from "./Accordion";
import { GoPerson } from "react-icons/go";

function Recipe() {
  const [details, setDetails] = useState({});
  let params = useParams();

  const fetchDetails = () => {
    fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`
    )
      .then((r) => r.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchDetails(params.id);
  }, [params.id]);

  return (
    <div>
      <div key={details.id} className="recipe">
        <div className="recipe-left">
          {details.image ? (
            <img src={details.image} alt={details.title} />
          ) : (
            <img
              src={`https://spoonacular.com/recipeImages/${details.id}-556x370.jpg`}
            />
          )}

          <h1>{details.title}</h1>
        </div>
        <div className="recipe-right">
          <div className="recipe-about">
            <h2>ABOUT THIS RECIPE</h2>
            <h3>
              <span>
                <GoPerson />
                <span> {details.servings} servings</span>
              </span>
            </h3>
          </div>
          <hr />
          {details.summary === null ? null : (
            <Accordion title="Summary" content={details.summary} />
          )}

          {details.instructions === null ? null : (
            <Accordion title="Instructions" content={details.instructions} />
          )}

          <Accordion
            title="Ingredients"
            content={details.extendedIngredients
              ?.map(
                (ingredient) =>
                  `<li key=${ingredient.id}><input type="checkbox">&#160;
                  ${ingredient.original}</input></li>`
              )
              .join("")}
          />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
