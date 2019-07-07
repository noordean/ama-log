import React from "react";

import NavBar from "./NavBar";
import Main from "./Main";
import CategorySlider from "./CategorySlider";
import { relative } from "path";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home" style={{position: "relative"}}>
        <NavBar />
        <Main />
        <CategorySlider />
      </div>
    );
  }
}
