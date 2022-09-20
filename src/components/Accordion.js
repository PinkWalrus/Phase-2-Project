import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className="accordion-section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion-title">{props.title}</p>
        <FaChevronDown />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-content"
      >
        <div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
