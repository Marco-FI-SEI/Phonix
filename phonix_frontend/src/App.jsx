import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./config/Routes";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="h-screen">
        <Router>
          <Header />
          <main className="h-90%">
            <Routes />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
