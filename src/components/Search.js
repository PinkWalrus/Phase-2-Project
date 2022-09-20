import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_KEY from "../API_KEY";
import SearchBar from "./SearchBar";
import Category from "./Category";
import Pagination from "./Pagination";
import logoText from "../assets/recipe-cards-small.svg";

function Search() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  let params = useParams();

  const getSearched = (name) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&number=88`
    )
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setSearchedRecipes(data.results);
      });
  };

  useEffect(() => {
    getSearched(params.search);
    setCurrentPage(1);
  }, [params.search]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = searchedRecipes.slice(firstPostIndex, lastPostIndex);

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
                  <p className="card-text">{item.title}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="page-numbers">
        <Pagination
          totalPosts={searchedRecipes.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default Search;
