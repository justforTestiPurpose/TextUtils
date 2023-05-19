import React, { useState } from "react";

function TextForm(props) {
  const { controlleAlert } = props;
  const [text, setText] = useState("");
  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleOnUpClick(event) {
    let newText = text.toUpperCase();
    setText(newText);
    controlleAlert("converted to upper case", "success");
  }
  function handleOnLoClick(event) {
    let newText = text.toLowerCase();
    setText(newText);
    controlleAlert("converted to lower case", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    controlleAlert("Extra spaces removed!", "success");
  };

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
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={handleOnUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleOnLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={() => {
            setText("");
            controlleAlert("text is clear", "success");
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
