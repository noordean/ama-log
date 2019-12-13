import React from "react";
import { observer } from "mobx-react";

import Main from "./Main";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CenterImage from "./CenterImage";
import ProductStore from "../stores/ProductStore";

@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.productStore = new ProductStore(
      this.props.categories[0] && this.props.categories[0].products[0].id
    );
  }

  componentDidMount() {
    if (this.props.categories.length) {
      this.productStore.fetchProducts(this.props.categories[0].products[0].id);
    }
  }

  onProductClick = productId => {
    this.productStore.fetchProducts(productId);
    this.productStore.setSelectedItem(productId);
    $("a.browse.item").popup("hide");
    window.scrollTo(0, this.mainSection.productsList.offsetTop);
  };

  render() {
    const { categories } = this.props;

    return (
      <div className="home-page ui container">
        <Navbar
          productCategories={categories}
          onProductClick={this.onProductClick}
          selectedId={this.productStore.selectedItem}
        />
        <CenterImage />
        <Main
          products={this.productStore.products}
          ref={mainSection => (this.mainSection = mainSection)}
        />
        <Footer />
      </div>
    );
  }
}
