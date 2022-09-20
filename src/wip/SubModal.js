import React from "react";
import { useState, useEffect } from "react";

function SubModal({ handleClose }) {
  const [subs, setSubs] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/subscribers")
      .then((r) => r.json())
      .then((subs) => setSubs(subs));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const subData = {
      name: name,
      email: email,
    };
    fetch("http://localhost:4000/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subData),
    })
      .then((r) => r.json())
      .then((newSub) => setSubs(newSub));
  }

  function handleAddSub(newSub) {
    setSubs([...subs, newSub]);
  }

  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Want to receive weekly recipes?</h2>
        <p>Join our newsletter!</p>
        <form
          handleAddSub={handleAddSub}
          onSubmit={handleSubmit}
          className="submit-form"
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="NAME"
            required
          ></input>
          <input
            type="email"
            email="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL"
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  );
}

export default SubModal;
