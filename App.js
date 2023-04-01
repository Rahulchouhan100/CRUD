import ReactDOM from "react-dom/client";
import Main from "./src/component/Main";
import React from "react";
const App = () => {
  return (
    <>
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
