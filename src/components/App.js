import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = React.useState("");
  return (
    <div id="main">
      // Do not alter the main div
      <button
        id="click"
        onClick={() => {
          setText(
            "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          );
        }}
      >
       
      </button>
      <p id="para">{text}</p>
    </div>
  );
}

export default App;
