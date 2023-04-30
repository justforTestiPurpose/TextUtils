import React, { useState } from "react";

function TextForm() {
  const [text, setText] = useState("");
  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleOnUpClick(event) {
    let newText = text.toUpperCase();
    setText(newText);
  }
  function handleOnLoClick(event) {
    let newText = text.toLowerCase();
    setText(newText);
  }

  return (
    <>
      <div className="container my-3">
        <h3>Enter the text to analyze </h3>
        <div className="mb-3 my-2">
          <textarea
            value={text}
            className="form-control"
            id="myTextArea"
            rows="9"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnLoClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            setText("");
          }}
        >
          Clear
        </button>
      </div>
      <div className="container">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
      </div>
    </>
  );
}

export default TextForm;
