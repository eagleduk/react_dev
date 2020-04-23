import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Covidlist from "./Covid/CovidList";
import LottoMain from "./lotto/LottoMain";
import CRUDMain from "./crud/curdmain.component";
import FirebaseApp from "./firebase/Main";

const appKey = "6e5131062fmshb255f6136f41bfap170c64jsndbd750522f9a";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div style={{ width: "10%", float: "left" }}>
            <nav>
              <div>
                <ul>
                  <li>
                    <Link to={"/Covid"}>Covid</Link>
                  </li>
                  <li>
                    <Link to={"/LottoMain"}>Lotto</Link>
                  </li>
                  <li>
                    <Link to={"/CRUDMain"}>CRUD</Link>
                  </li>
                  <li>
                    <Link to={"/FirebaseApp"}>Firebase</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div style={{ width: "80%", float: "left" }}>
            <Switch>
              <Route
                path="/Covid"
                render={() => <Covidlist appKey={appKey} />}
              />
              <Route path="/LottoMain" component={LottoMain} />
              <Route path="/CRUDMain" component={CRUDMain} />
              <Route path="/FirebaseApp" component={FirebaseApp} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
