import React from "react";
import { NavLink } from "react-router-dom";

function Category({ setCurrentPage }) {
  return (
    <div className="category">
      <h2>What's new to our table</h2>
      <div className="categories">
        <NavLink exact to={"/dishType/"} onClick={() => setCurrentPage(1)}>
          <h4>All</h4>
        </NavLink>
        <NavLink to={"/dishType/soup"} onClick={() => setCurrentPage(1)}>
          <h4>Soups</h4>
        </NavLink>
        <NavLink to={"/dishType/salad"} onClick={() => setCurrentPage(1)}>
          <h4>Salads</h4>
        </NavLink>
        <NavLink to={"/dishType/main course"} onClick={() => setCurrentPage(1)}>
          <h4>Main Courses</h4>
        </NavLink>
        <NavLink to={"/dishType/dessert"} onClick={() => setCurrentPage(1)}>
          <h4>Desserts</h4>
        </NavLink>
      </div>
    </div>
  );
}

export default Category;
