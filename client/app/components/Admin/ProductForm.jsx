import React from "react";
import Select from "../Reusable/Select";

export default class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnChange = () => {
    console.log("huuuu");
  };

  render() {
    const options = [
      { value: "R", text: "Red" },
      { value: "G", text: "Green" },
      { value: "B", text: "Blue" }
    ];

    return (
      <form className="ui form product-form">
        <h4 className="ui dividing header product-info">Product Information</h4>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <label>Product Category</label>
              <Select
                options={options}
                placeholder={"Select a category or add a new one"}
              />
            </div>
            <div className="eight wide field">
              <label>Product Name</label>
              <Select
                options={options}
                placeholder={"Select a name or add a new one"}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <label>Variant Name</label>
              <input
                type="text"
                name="shipping[address]"
                placeholder="E.g Mouka Flora"
              />
            </div>
            <div className="eight wide field">
              <label>Variant Value</label>
              <input
                type="text"
                name="shipping[address]"
                placeholder="E.g 6x3.5x8"
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <label>Price</label>
              <input
                type="number"
                name="shipping[address]"
                placeholder="Enter price"
              />
            </div>
            <div className="eight wide field">
              <label>Image</label>
              <input
                className="product-img-input"
                type="file"
                name="shipping[address]"
                placeholder="Select an image"
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <div className="ui button">Submit</div>
            </div>
            <div className="eight wide field logout-link">
              <a href="/logout">Log Out</a>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
