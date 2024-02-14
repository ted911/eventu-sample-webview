import logo from "./logo.svg";
import "./App.css";

function App() {
  // const [injectObjectJson, setInjectObjectJson] = useState("");
  const handleOnClick = () => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ type: "react-webview", data: "Hello RN!" }),
    );
  };
  // useEffect(() => {
  //   const json = window.ReactNativeWebView.injectObjectJson();
  //   if (json) {
  //     setInjectObjectJson(json ?? "none");
  //   }
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>cookie : {document.cookie}</p>
        {/* <p>injectObjectJson: {injectObjectJson}</p> */}
        <button onClick={() => handleOnClick()}>RN 통신</button>
      </header>
    </div>
  );
}

export default App;
