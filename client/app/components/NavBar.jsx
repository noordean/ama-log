import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar" style={{height: "100px", zIndex: 1}}>
        <div className="ama-logo">AMA Logistics</div>
        <div className="search-icon"><i className="fa fa-search"></i></div>
      </div>
    );
  }
}
