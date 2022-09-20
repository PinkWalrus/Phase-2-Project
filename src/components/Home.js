import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Subscribe from "./Subscribe";
import videoBg from "../assets/test-video.mp4";
import logoText from "../assets/recipe-cards.svg";
import "../App.css";

function Home() {
  const [showSubBar, setShowSubBar] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleClose = () => {
    setShowSubBar(false);
    setShowButton(false);
  };

  const handleOpen = () => {
    setShowSubBar(true);
    setShowButton(true);
  };

  return (
    <div className="bgVideo">
      <div className="overlay" />
      <video src={videoBg} autoPlay loop muted />
      <div className="home-content">
        <img className="logoText" alt="logo" src={logoText} />
        <SearchBar />
        <Link to="/recipe">
          <button className="randomRecipe">RANDOM RECIPE</button>
        </Link>
        {showButton ? null : (
          <button className="subscriptions" onClick={handleOpen}>
            SUBSCRIBE?
          </button>
        )}
        {showSubBar && <Subscribe handleClose={handleClose} />}
      </div>
    </div>
  );
}

export default Home;
