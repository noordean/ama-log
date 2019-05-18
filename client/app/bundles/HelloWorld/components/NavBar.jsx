import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div>AMA Logistics</div>
        <div><i className="fa fa-search"></i></div>
      </div>
    );
  }
}
