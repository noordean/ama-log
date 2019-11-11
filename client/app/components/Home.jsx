import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page ui container">
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}
