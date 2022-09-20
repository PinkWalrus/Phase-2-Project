import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewSearch() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/recipe/" + input);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </form>
  );
}

export default NewSearch;
