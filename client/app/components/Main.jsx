import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div ref={productsList => (this.productsList = productsList)}>
        {products.length ? (
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
                </div>
                <div className="extra content">
                  <a>{`#${product.price}`}</a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3 className="no-products-text">No products to display</h3>
        )}
      </div>
    );
  }
}
