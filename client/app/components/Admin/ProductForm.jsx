import React from "react";
import Select from "../Reusable/Select";

export default class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      productName: "",
      variantName: "",
      variantValue: "",
      price: "",
      image: null,
      responseMessage: "",
      responseStatus: "",
      uploadingProduct: false
    };
  }

  handleCategoryOnChange = value => {
    // fakeId handles when the input is cleared
    this.loadCategoryProducts(value || "fakeId");
    this.setState({ categoryName: value });
  };

  handleProductOnChange = value => {
    this.setState({ productName: value });
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

  setFormInputs = event => {
    const elementName = event.target.name;
    if (elementName === "image") {
      this.state[elementName] = event.target.files[0];
    } else {
      this.state[elementName] = event.target.value;
    }
  };

  submitForm = async () => {
    let fileData = new FormData();
    Object.keys(this.state).forEach(data => {
      fileData.append(data, this.state[data]);
    });
    this.setState({
      uploadingProduct: true
    });
    const response = await fetch("/add_product", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        Accept: "application/json",
        "X-CSRF-Token": ReactOnRails.authenticityToken()
      },
      body: fileData
    });

    if (!response.ok) {
      this.setState({
        responseMessage: "Sorry, an error occurred!",
        responseStatus: "failure",
        uploadingProduct: false
      });
      return;
    }

    this.setState({
      responseMessage: "Product added successfully",
      responseStatus: "success",
      uploadingProduct: false
    });
  };

  render() {
    const { categories } = this.props;

    const categoryOptions = categories.map(category => {
      return { value: category.id, text: category.name };
    });

    return (
      <form className="ui form product-form">
        <div
          className={`add-product-res-msg ${this.state.responseStatus}-response`}
        >
          {this.state.uploadingProduct ? (
            <div className="ama-loader"></div>
          ) : (
            this.state.responseMessage.length > 0 && this.state.responseMessage
          )}
        </div>
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
                onChange={this.handleProductOnChange}
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
                name="variantName"
                placeholder="E.g Mouka Flora"
                onChange={this.setFormInputs}
              />
            </div>
            <div className="eight wide field">
              <label>Variant Value</label>
              <input
                type="text"
                name="variantValue"
                placeholder="E.g 6x3.5x8"
                onChange={this.setFormInputs}
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
                name="price"
                placeholder="Enter price"
                onChange={this.setFormInputs}
              />
            </div>
            <div className="eight wide field">
              <label>Image</label>
              <input
                className="product-img-input"
                type="file"
                name="image"
                placeholder="Select an image"
                onChange={this.setFormInputs}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <div
                className={`ui button ${this.state.uploadingProduct &&
                  "disabled"}`}
                onClick={this.submitForm}
              >
                Submit
              </div>
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
