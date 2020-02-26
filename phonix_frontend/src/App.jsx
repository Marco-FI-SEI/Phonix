import React, { Component } from "react";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
