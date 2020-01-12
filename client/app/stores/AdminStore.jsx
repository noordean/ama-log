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
}