import React from "react";
import Select from "../Reusable/Select";

export default class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCategoryOnChange = value => {
    // fakeId handles when the input is cleared
    this.loadCategoryProducts(value || "fakeId");
  };

  loadCategoryProducts = async selectedCategory => {
    const response = await fetch(`/category/${selectedCategory}/products`, {
      credentials: "same-origin",
      method: "GET",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      })
    });

    const responseObj = await response.json();
    this.updateProductOptions(responseObj.products);
  };

  updateProductOptions = products => {
    const productOptions = products.map(product => {
      return { value: product.id, text: product.name };
    });
    this.productSelect.selectInput.selectize.clearOptions();
    this.productSelect.selectInput.selectize.addOption(productOptions);
  };

  render() {
    const { categories } = this.props;

    const categoryOptions = categories.map(category => {
      return { value: category.id, text: category.name };
    });

    return (
      <form className="ui form product-form">
        <h4 className="ui dividing header product-info">Product Information</h4>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <label>Product Category</label>
              <Select
                options={categoryOptions}
                placeholder={"Select a category or add a new one"}
                onChange={this.handleCategoryOnChange}
              />
            </div>
            <div className="eight wide field">
              <label>Product Name</label>
              <Select
                ref={productSelect => (this.productSelect = productSelect)}
                options={[]}
                placeholder={"Select a name or add a new one"}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <label>Variant Name</label>
              <input
                type="text"
                name="shipping[address]"
                placeholder="E.g Mouka Flora"
              />
            </div>
            <div className="eight wide field">
              <label>Variant Value</label>
              <input
                type="text"
                name="shipping[address]"
                placeholder="E.g 6x3.5x8"
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <label>Price</label>
              <input
                type="number"
                name="shipping[address]"
                placeholder="Enter price"
              />
            </div>
            <div className="eight wide field">
              <label>Image</label>
              <input
                className="product-img-input"
                type="file"
                name="shipping[address]"
                placeholder="Select an image"
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <div className="ui button">Submit</div>
            </div>
            <div className="eight wide field logout-link">
              <a href="/logout">Log Out</a>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
