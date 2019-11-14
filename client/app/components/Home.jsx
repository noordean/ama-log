import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CenterImage from "./CenterImage";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page ui container">
        <Navbar />
        <CenterImage />
        <Main />
        <Footer />
      </div>
    );
  }
}
