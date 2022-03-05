import React, { Component } from "react";

import Footer from "components/Footer/Footer.index";
import Box from "./components/Box/Box.index";

import "./App.css";
import GlobalStyles from "./styles/Global.styles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <Box />
        <Footer />
      </div>
    );
  }
}

export default App;
