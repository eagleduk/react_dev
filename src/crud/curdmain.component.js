import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Create from "./create.component";
import Edit from "./edit.component";
import Index from "./Index.component";

import "bootstrap/dist/css/bootstrap.min.css";

class CRUDMain extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              React CRUD Example
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    Index
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <h2>Welcom to React CRUD Tutorial</h2> <br />
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/index" component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default CRUDMain;
