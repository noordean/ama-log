import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div className="products-pricelist ui link cards">
        {products.map(product => (
          <div className="card" key={product.id}>
            <div className="image">
              <img src={product.imageUrl} className="product-img" />
            </div>
            <div className="content">
              <a className="header">{product.name}</a>
              <div className="meta">
                <span className="date">{product.value}</span>
              </div>
              <div className="description">Some description here</div>
            </div>
            <div className="extra content">
              <a>{`#${product.price}`}</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
