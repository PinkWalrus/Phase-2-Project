import React, { useState, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";

function Subscribe({ handleClose }) {
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
    setName("");
    setEmail("");
  }

  function handleAddSub(newSub) {
    setSubs([...subs, newSub]);
  }

  return (
    <div className="subscribe">
      <form handleAddSub={handleAddSub} onSubmit={handleSubmit}>
        <p>Subscribe to receive weekly emails of our hottest recipes!</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        ></input>
        <input
          type="email"
          email="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        ></input>
        <button className="subscribe-submit" type="submit">
          SUBSCRIBE
        </button>
      </form>
      <button className="subscribe-exit" onClick={handleClose}>
        <RiCloseFill />
      </button>
    </div>
  );
}

export default Subscribe;
