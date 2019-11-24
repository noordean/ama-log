import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productCategories, onProductClick, selectedId } = this.props;

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
                {productCategories.map(prodCat => (
                  <div className="column" key={prodCat.category.id}>
                    <h4 className="ui header">{prodCat.category.name}</h4>
                    <div className="ui link list">
                      {prodCat.products.map(prod => (
                        <a
                          className="item"
                          key={prod.id}
                          onClick={() => onProductClick(prod.id)}
                          style={{
                            color: prod.id === selectedId ? "#4183c4" : ""
                          }}
                        >
                          {prod.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
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
