import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand" href="true">Sentiment Analyzer</span>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
