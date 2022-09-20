import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import API_KEY from "../API_KEY";

function List() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`
    )
      .then((r) => r.json())
      .then((data) => {
        setRecipes(data.recipes);
        console.log(data.recipes);
      });
  }, []);

  return (
    <>
      <SearchBar />
      <Category />
      <div className="grid-container">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="recipe-grid">
              <Link to={"/recipe/" + recipe.id}>
                <div className="card">
                  <img src={recipe.image} alt={recipe.title} />
                  <p>{recipe.title}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
