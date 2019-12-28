import { observable, action } from "mobx";
import ReactOnRails from "react-on-rails";

export default class ProductStore {
  @observable products = [];
  @observable selectedItem = null;

  constructor(selectedItem) {
    this.setSelectedItem(selectedItem);
  }

  @action
  async fetchProducts(productId) {
    const response = await fetch(`/product/${productId}/product_variants`, {
      credentials: "same-origin",
      method: "GET",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      })
    });

    const responseObj = await response.json();
    this.products = responseObj.products;
  }

  @action
  setSelectedItem(productId) {
    this.selectedItem = productId;
  }
}