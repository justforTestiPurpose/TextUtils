import React, { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [myalert, setMyAlert] = useState(null);

  function showAlert(message, type) {
    setMyAlert({
      message,
      type,
    });
    setTimeout(() => {
      setMyAlert(null);
    }, 1500);
  }

  function toggleMode() {
    // mode === "dark" ? setMode("light") : setMode("dark");
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enables", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode enables", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={myalert} />
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm controlleAlert={showAlert} />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
