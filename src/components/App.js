import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom"; // import the react-router-dom components
import { Home, Page1, Page2, Page3 } from "../pages"; // import our pages

import "../styles.css";

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>THis is App Component</h2>
      </div>
    );
  }
}
*/

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/1" component={Page1} />
      <Route exact path="/2" component={Page2} />
      <Route exact path="/3" component={Page3} />
    </Switch>
  </main>
);

const Header = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/1">Page1</Link>
      </li>
      <li>
        <Link to="/2">Page2</Link>
      </li>
      <li>
        <Link to="/3">Page3</Link>
      </li>
    </ul>
  </div>
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default App;
