import { observable, action } from "mobx";

export default class AdminStore {
  @observable currentProductId = null;
  @observable currentProductName = "";
  @observable products = [];

  @action
  setCurrentProduct(id, name) {
    this.currentProductId = id;
    this.currentProductName = name;
  }

  @action
  updateCurrentProductName(name) {
    this.currentProductName = name;
  }

  @action
  updateProducts(products) {
    this.products = products;
  }

  @action
  updateProductonEdit() {
    const productIndex = this.products.findIndex(
      p => p.id === this.currentProductId
    );
    this.products[productIndex].name = this.currentProductName;
  }

  @action
  updateProductsOnDelete(productId) {
    const filteredProducts = this.products.filter(
      product => product.id !== productId
    );
    this.products = filteredProducts;
  }

  async submitAddProductForm(name, value, price) {
    const response = await fetch(
      `/products/${this.currentProductId}/add_variant`,
      {
        credentials: "same-origin",
        method: "POST",
        headers: ReactOnRails.authenticityHeaders({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ name, value, price })
      }
    );

    if (!response.ok) {
      toastr.error("An error occured. Please try again");
      return;
    }
    toastr.success("Variant added successfully");
    $(".add-new-product-modal").modal("hide");
  }

  async deleteProduct(productId) {
    const response = await fetch(`/products/${productId}`, {
      credentials: "same-origin",
      method: "DELETE",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      })
    });

    if (!response.ok) {
      toastr.error("An error occured. Please try again");
      return;
    }
    this.updateProductsOnDelete(productId);
    toastr.success("Product successfully deleted");
  }

  async reFetchProducts() {
    const response = await fetch("/admin.json", {
      credentials: "same-origin",
      method: "GET",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      })
    });

    if (!response.ok) {
      toastr.error("An error occured. Please try again");
      return;
    }
    const products = await response.json();
    this.updateProducts(products);
  }
}
