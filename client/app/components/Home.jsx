import React from "react";

import Main from "./Main";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CenterImage from "./CenterImage";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const response = await fetch(`/product/fakeId/product_variants`, {
      credentials: "same-origin",
      method: "GET",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      })
    });

    const responseObj = await response.json();
    this.setState({ products: responseObj.products });
  };

  render() {
    const { categories } = this.props;

    return (
      <div className="home-page ui container">
        <Navbar productCategories={categories} />
        <CenterImage />
        <Main products={this.state.products} />
        <Footer />
      </div>
    );
  }
}
