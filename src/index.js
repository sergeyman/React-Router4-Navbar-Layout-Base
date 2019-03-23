import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import About from "./components/About";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";

/*
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
*/

<BrowserRouter>
  <div className="container">
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
  </div>
</BrowserRouter>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
