import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = React.useState([]);
  const addText = () => {
    setText(
      text.concat(
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )
    );
  };
  return (
    <div id="main">
      <button id="click" onClick={addText}></button>
      {text}
    </div>
  );
}

export default App;
