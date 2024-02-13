import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleOnClick = () => {
    window.ReactNativeWebView.postMessage("Message from React");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => handleOnClick()}>RN 통신</button>
      </header>
    </div>
  );
}

export default App;
