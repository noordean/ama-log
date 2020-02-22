import { observable, action } from "mobx";
import ReactOnRails from "react-on-rails";

export default class ProductStore {
  @observable productVariants = [];
  @observable products = [];
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
  async fetchProducts(subCategoryId) {
    const response = await fetch(
      `/products_sub_categories/${subCategoryId}/products`,
      {
        credentials: "same-origin",
        method: "GET",
        headers: ReactOnRails.authenticityHeaders({
          "Content-Type": "application/json"
        })
      }
    );

    const responseObj = await response.json();
    this.products = responseObj.products;
  }

  @action
  setSelectedItem(productId) {
    this.selectedItem = productId;
  }

  @action
  updateProductVariantsOnDelete(variantId) {
    const filteredVariants = this.productVariants.filter(
      variant => variant.id !== variantId
    );
    this.productVariants = filteredVariants;
  }

  async deleteVariant(variantId) {
    const response = await fetch(`/product_variants/${variantId}`, {
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
    this.updateProductVariantsOnDelete(variantId);
    toastr.success("Variant successfully deleted");
  }
}
