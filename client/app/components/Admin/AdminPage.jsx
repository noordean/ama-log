import React from "react";
import { observer } from "mobx-react";
import Modal from "../Reusable/Modal";
import ProductUploadForm from "./ProductUploadForm";
import ProductEditForm from "./ProductEditForm";
import AddProductForm from "./AddProductForm";
import ProductVariantsList from "./ProductVariantsList";
import AdminStore from "../../stores/AdminStore";
import ProductStore from "../../stores/ProductStore";

@observer
export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      subCategoryName: "",
      productName: "",
      image: null,
      variantName: "",
      variantValue: "",
      variantPrice: ""
    };
    this.adminStore = new AdminStore();
    this.productStore = new ProductStore();
  }

  componentDidMount() {
    this.adminStore.updateProducts(this.props.products);
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
    const response = await fetch(
      `/product_categories/${selectedCategory}/products`,
      {
        credentials: "same-origin",
        method: "GET",
        headers: ReactOnRails.authenticityHeaders({
          "Content-Type": "application/json"
        })
      }
    );

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
    const response = await fetch("/admin/add_product", {
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
    this.adminStore.reFetchProducts();
  };

  onProductDelete = (event, productId) => {
    event.stopPropagation();
    if (confirm("Are you sure you want to delete this product?")) {
      this.adminStore.deleteProduct(productId);
    }
  };

  onVariantDelete = (event, variantId) => {
    event.stopPropagation();
    if (confirm("Are you sure you want to delete this variant?")) {
      this.productStore.deleteVariant(variantId);
    }
  };

  openProductAddModal = (event, productId, productName) => {
    event.stopPropagation();
    this.adminStore.setCurrentProduct(productId, productName);
    Ama.ModalHandler.open(".add-new-product-modal");
  };

  openProductEditModal = (event, productId, productName) => {
    event.stopPropagation();
    this.adminStore.setCurrentProduct(productId, productName);
    Ama.ModalHandler.open(".product-edit-modal");
  };

  openVariantsListModal = (productId, productName) => {
    this.productStore.fetchProductVariants(productId);
    this.adminStore.setCurrentProduct(productId, productName);
    Ama.ModalHandler.open(".product-variants-list-modal");
  };

  onChangeCurrentProductName = event => {
    this.adminStore.updateCurrentProductName(event.target.value);
  };

  submitEditForm = async () => {
    const name = this.adminStore.currentProductName;
    const response = await fetch(
      `/products/${this.adminStore.currentProductId}`,
      {
        credentials: "same-origin",
        method: "PUT",
        headers: ReactOnRails.authenticityHeaders({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ name })
      }
    );

    if (!response.ok) {
      toastr.error("An error occured. Please try again");
      return;
    }
    toastr.success("Product name has been updated");
    this.adminStore.updateProductonEdit();
    $(".product-edit-modal").modal("hide");
  };

  submitAddProductForm = () => {
    const { variantName, variantValue, variantPrice } = this.state;
    this.adminStore.submitAddProductForm(
      variantName,
      variantValue,
      variantPrice
    );
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

        <Modal
          title={"Edit Product"}
          onSubmit={this.submitEditForm}
          modalName={"product-edit-modal"}
        >
          <ProductEditForm
            currentProductName={this.adminStore.currentProductName}
            currentProductImage={this.adminStore.currentProductImage}
            onChangeCurrentProductName={this.onChangeCurrentProductName}
          />
        </Modal>

        <Modal
          title={`Add a new variant to ${this.adminStore.currentProductName}`}
          onSubmit={this.submitAddProductForm}
          modalName={"add-new-product-modal"}
        >
          <AddProductForm setFormInputs={this.setFormInputs} />
        </Modal>

        <Modal
          title={`Variants list for ${this.adminStore.currentProductName}`}
          modalName={"product-variants-list-modal"}
        >
          <ProductVariantsList
            variants={this.productStore.productVariants}
            onVariantDelete={this.onVariantDelete}
          />
        </Modal>
        {this.adminStore.products.length ? (
          <div className="admin-products-list ui container link cards">
            {this.adminStore.products.map(product => (
              <div
                className="card"
                key={product.id}
                onClick={() =>
                  this.openVariantsListModal(product.id, product.name)
                }
              >
                <div className="image">
                  <img src={product.imageUrl} className="product-img" />
                </div>
                <div className="content">
                  <div className="header">{product.name}</div>
                  <div className="meta">
                    <span className="date">{product.value}</span>
                  </div>
                </div>
                <div className="extra content ui grid">
                  <div className="eight wide column">
                    <a
                      onClick={event =>
                        this.openProductEditModal(
                          event,
                          product.id,
                          product.name
                        )
                      }
                    >
                      <i className="edit icon"></i>
                    </a>
                    <a
                      onClick={event => this.onProductDelete(event, product.id)}
                    >
                      <i className="delete icon"></i>
                    </a>
                  </div>
                  <div className="eight wide column right aligned">
                    <a
                      onClick={event =>
                        this.openProductAddModal(
                          event,
                          product.id,
                          product.name
                        )
                      }
                    >
                      <i className="add icon"></i>
                    </a>
                  </div>
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
