import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="ui grid">
          <div className="fourteen wide column">
            <div className="ui text menu">
              <a className="browse item">
                Browse Products
                <i className="dropdown icon"></i>
              </a>
            </div>
            <div className="ui flowing basic admission popup">
              <div className="ui three column relaxed divided grid">
                <div className="column">
                  <h4 className="ui header">Mattress Brand</h4>
                  <div className="ui link list">
                    <a className="item">Design &amp; Urban Ecologies</a>
                    <a className="item">Fashion Design</a>
                    <a className="item">Fine Art</a>
                    <a className="item">Strategic Design</a>
                  </div>
                </div>
                <div className="column">
                  <h4 className="ui header">Pillow Brands</h4>
                  <div className="ui link list">
                    <a className="item">Anthropology</a>
                    <a className="item">Economics</a>
                    <a className="item">Media Studies</a>
                    <a className="item">Philosophy</a>
                  </div>
                </div>
                <div className="column">
                  <h4 className="ui header">Matress Prhggdj</h4>
                  <div className="ui link list">
                    <a className="item">Food Studies</a>
                    <a className="item">Journalism</a>
                    <a className="item">Non Profit Management</a>
                  </div>
                </div>
                <div className="column">
                  <h4 className="ui header">Bedsheets</h4>
                  <div className="ui link list">
                    <a className="item">Food Studies</a>
                    <a className="item">Journalism</a>
                    <a className="item">Non Profit Management</a>
                  </div>
                </div>
                <div className="column">
                  <h4 className="ui header">Duvet</h4>
                  <div className="ui link list">
                    <a className="item">Food Studies</a>
                    <a className="item">Journalism</a>
                    <a className="item">Non Profit Management</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="two wide column right aligned">
            <a href="#">Fill our service form</a>
          </div>
        </div>
      </div>
    );
  }
}
