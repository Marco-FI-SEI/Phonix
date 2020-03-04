import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Routes } from "./config/Routes";
import history from "./history";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div
        className="h-screen mx-auto min-w-0 max-w-screen-xl"
        style={{ overflowY: `hidden` }}
      >
        <Router history={history}>
          <Header />
          <main className="h-90% border border-solid">
            <Routes />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
