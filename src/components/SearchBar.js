import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/search/" + input);
    setInput("");
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        placeholder="Search..."
      />
      <button type="submit" className="submit_button2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/61/61088.png"
          alt="search icon"
        />
      </button>
    </form>
  );
}

export default SearchBar;
