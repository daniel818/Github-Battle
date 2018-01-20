/**
 * Created by Daniel on 18/01/2018.
 */
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Popular from "./Popular";
import Home from "./Home";
import Battle from "./Battle";
import Results from "./Results";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Nav />
              <Route exact path="/" component={Home} />
              <Route exact path="/battle" component={Battle} />
              <Route  path="/battle/results" component={Results} />
              <Route  path="/popular" component={Popular} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
