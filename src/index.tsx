import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
      injectObjectJson: () => string;
    };
    isNativeApp: boolean;
  }
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
