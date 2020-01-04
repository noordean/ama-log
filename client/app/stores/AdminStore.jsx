import { observable, action } from "mobx";

export default class AdminStore {
  @observable currentProductId = null;
  @observable currentProductName = "";
  @observable currentProductImage = "";

  @action
  setProductBeingEdited(id, name, image) {
    this.currentProductId = id;
    this.currentProductName = name;
    this.currentProductImage = image;
  }

  @action
  updateCurrentProductName(name) {
    this.currentProductName = name;
  }
}
