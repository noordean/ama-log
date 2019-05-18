import React from "react";

import NavBar from "./NavBar";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <NavBar />
      </div>
    );
  }
}
