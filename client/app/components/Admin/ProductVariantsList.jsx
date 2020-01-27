import React from "react";

export default class ProductVariantsList extends React.Component {
  render() {
    const { variants } = this.props;

    return (
      <div className="ui middle aligned divided list">
        {variants.length ? (
          variants.map(variant => (
            <div className="item" key={variant.id}>
              <div className="right floated content">
                <div className="ui button">Delete</div>
              </div>
              <div className="content">{variant.name}</div>
            </div>
          ))
        ) : (
          <h3 className="no-products-text">No variants to display</h3>
        )}
      </div>
    );
  }
}
