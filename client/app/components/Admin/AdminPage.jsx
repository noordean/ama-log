import React from "react";
import Modal from "../Reusable/Modal";
import ProductUploadForm from "./ProductUploadForm";

export default class AdminPage extends React.Component {
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
    this.productUploadForm.productSelect.selectInput.selectize.clearOptions();
    this.productUploadForm.productSelect.selectInput.selectize.addOption(
      productOptions
    );
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
          <ProductUploadForm
            ref={productUploadForm =>
              (this.productUploadForm = productUploadForm)
            }
            categoryOptions={categoryOptions}
            handleCategoryOnChange={this.handleCategoryOnChange}
            subCategoryOnChange={this.subCategoryOnChange}
            setFormInputs={this.setFormInputs}
          />
        </Modal>
      </div>
    );
  }
}
