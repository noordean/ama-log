import React from "react";

export default class ProductEditForm extends React.Component {
  render() {
    const { setFormInputs } = this.props;
    return (
      <form className="ui form product-form">
        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <input
                type="text"
                name="productName"
                placeholder="E.g Mouka Flora"
                onChange={setFormInputs}
              />
            </div>
            <div className="eight wide field">
              <input
                className="product-img-input"
                type="file"
                name="image"
                placeholder="Select an image"
                onChange={setFormInputs}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
