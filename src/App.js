import React, { Component } from "react";
import Analyzer from "./components/analyzer";
import Intro from "./components/intro";
import Navbar from "./components/navbar";


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Intro />
          <Analyzer />
       
        </div>
      </>
    );
  }
}

export default App;
