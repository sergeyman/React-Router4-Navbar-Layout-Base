import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom"; // import the react-router-dom components
import { Home, Page1, Page2, Page3 } from "../pages"; // import our pages
import About from "./About";
import Stuff from "./Stuff";

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
      <Route exact path="/stuff" component={Stuff} />
      <Route exact path="/about" component={About} />
    </Switch>
  </main>
);

const HeaderBootstrap = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light  bg-primary fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/1">
              Page1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/2">
              Page2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/3">
              Page3
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stuff">
              Stuff
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
);

const HeaderNavLink = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light  bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <ul className="navbar-nav">
        <NavLink path="/1" text="Page 1" />
        <NavLink path="/2" text="Page 2" />
        <NavLink path="/3" text="Page 3" />
      </ul>
    </nav>
  </div>
);

class NavLink extends Component {
  render() {
    return (
      <li className={"nav-item" + (this.props.isActive ? "active" : "")}>
        <Link className="nav-link" to={this.props.path}>
          {this.props.text}
        </Link>
      </li>
    );
  }
}

class HeaderStateHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      __links: [
        { path: "/1", text: "Page 1", isActive: false },
        { path: "/2", text: "Page 2", isActive: false },
        { path: "/3", text: "Page 3", isActive: false }
      ]
    };
  }

  handleClick(i) {
    const links = this.state.__links.slice();
    for (const j in links) {
      links[j].isActive = i = j;
    }
    this.setState({ __links: links });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <ul className="navbar-nav">
            {this.state.__links.map((link, i) => (
              <NavLink
                path={link.path}
                text={link.text}
                isActive={link.isActive}
                key={link.path}
                onCllick={() => this.handleClick(i)}
              />
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

const App = () => (
  <div>
    <HeaderBootstrap />
    <HeaderNavLink />
    <HeaderStateHandle />
    <Main />
  </div>
);

export default App;
