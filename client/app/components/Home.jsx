import React from "react";

import Main from "./Main";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CenterImage from "./CenterImage";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="home-page ui container">
        <Navbar productCategories={categories} />
        <CenterImage />
        <Main />
        <Footer />
      </div>
    );
  }
}
