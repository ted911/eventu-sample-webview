import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const handleOnClick = () => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ type: "react-webview", data: "Hello RN!" }),
    );
  };
  const [cookie, setCookie] = useState("");
  const [isNativeApp, setIsNativeApp] = useState(false);
  useEffect(() => {
    const cookie = document.cookie;
    if (cookie === "") {
      setCookie("cookie is empty");
    } else {
      setCookie(cookie);
    }
    if (window.isNativeApp) {
      setIsNativeApp(true);
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>isNativeApp: {isNativeApp ? "앱입니다." : "웹입니다."}</p>
        <p>cookie : {cookie}</p>
        {/* <p>injectObjectJson: {injectObjectJson}</p> */}
        <button onClick={() => handleOnClick()}>RN postMessage</button>
      </header>
    </div>
  );
}

export default App;
