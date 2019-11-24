import React from "react";

import Main from "./Main";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CenterImage from "./CenterImage";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedItem: this.props.categories[0].products[0].id
    };
  }

  componentDidMount() {
    if (this.props.categories.length) {
      this.fetchProducts(this.props.categories[0].products[0].id);
    }
  }

  fetchProducts = async productId => {
    const response = await fetch(`/product/${productId}/product_variants`, {
      credentials: "same-origin",
      method: "GET",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      })
    });

    const responseObj = await response.json();
    this.setState({ products: responseObj.products });
  };

  onProductClick = productId => {
    this.fetchProducts(productId);
    this.setState({ selectedItem: productId });
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
          selectedId={this.state.selectedItem}
        />
        <CenterImage />
        <Main
          products={this.state.products}
          ref={mainSection => (this.mainSection = mainSection)}
        />
        <Footer />
      </div>
    );
  }
}
