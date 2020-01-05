import { observable, action } from "mobx";

export default class AdminStore {
  @observable currentProductId = null;
  @observable currentProductName = "";
  @observable products = [];

  @action
  setProductBeingEdited(id, name) {
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
}
