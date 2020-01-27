import { observable, action } from "mobx";
import ReactOnRails from "react-on-rails";

export default class ProductStore {
  @observable productVariants = [];
  @observable selectedItem = null;

  constructor(selectedItem) {
    this.setSelectedItem(selectedItem);
  }

  @action
  async fetchProductVariants(productId) {
    const response = await fetch(`/products/${productId}/product_variants`, {
      credentials: "same-origin",
      method: "GET",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      })
    });

    const responseObj = await response.json();
    this.productVariants = responseObj.variants;
  }

  @action
  setSelectedItem(productId) {
    this.selectedItem = productId;
  }
}
