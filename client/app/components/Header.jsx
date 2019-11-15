import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="ui grid">
          <div className="eight wide column">
            <h2 className="ui header">
              <i className="bed icon"></i>
              <div className="content">
                AMA Mattress &amp; Furniture
                <div className="sub header">
                  Enjoy double reliability - Product and Delivery.
                </div>
              </div>
            </h2>
          </div>
          <div className="eight wide column right aligned">
            Address: 22 Itire Lagos
          </div>
        </div>
      </div>
    );
  }
}
