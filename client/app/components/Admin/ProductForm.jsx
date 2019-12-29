import React from "react";
import Select from "../Reusable/Select";
import Modal from "../Reusable/Modal";

export default class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      subCategoryName: "",
      productName: "",
      image: null
    };
  }

  handleCategoryOnChange = value => {
    // fakeId handles when the input is cleared
    this.loadCategoryProducts(value || "fakeId");
    this.setState({ categoryName: value });
  };

  subCategoryOnChange = value => {
    this.setState({ subCategoryName: value });
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
      toastr.error("An error occured. Please try again");
      return;
    }
    toastr.success("Product uploaded successfully");
    $(".product-upload-modal").modal("hide");
  };

  render() {
    const { categories } = this.props;

    const categoryOptions = categories.map(category => {
      return { value: category.id, text: category.name };
    });

    return (
      <div className="admin-page">
        <Modal
          title={"Product Upload"}
          onSubmit={this.submitForm}
          modalName={"product-upload-modal"}
        >
          <form className="ui form product-form">
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
                  <label>Product Sub-Category</label>
                  <Select
                    ref={productSelect => (this.productSelect = productSelect)}
                    options={[]}
                    placeholder={"Select a sub-category or add a new one"}
                    onChange={this.subCategoryOnChange}
                  />
                </div>
              </div>
            </div>

            <div className="field">
              <div className="fields">
                <div className="eight wide field">
                  <label>Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    placeholder="E.g Mouka Flora"
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
          </form>
        </Modal>
      </div>
    );
  }
}
