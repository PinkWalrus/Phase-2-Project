import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API_KEY from "../API_KEY";
import SearchBar from "./SearchBar";
import Category from "./Category";
import Pagination from "./Pagination";
import logoText from "../assets/recipe-cards-small.svg";

function DishType() {
  const [dishType, setDishType] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  let params = useParams();

  const getDishType = (name) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&type=${name}&number=88`
    )
      .then((r) => r.json())
      .then((data) => {
        setDishType(data.results);
        console.log(data.results);
      });
  };

  useEffect(() => {
    getDishType(params.type);
  }, [params.type]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dishType.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="logoText-small" src={logoText} />
        </Link>
        <SearchBar />
      </div>
      <Category setCurrentPage={setCurrentPage} />
      <div className="grid-container">
        {currentPosts.map((item) => {
          return (
            <div key={item.id} className="recipe-grid">
              <div className="card">
                <Link to={`/recipe/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="page-numbers">
        <Pagination
          totalPosts={dishType.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default DishType;
