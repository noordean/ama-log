import React from "react";
import Select from "../Reusable/Select";

export default class ProductUploadForm extends React.Component {
  render() {
    const {
      categoryOptions,
      handleCategoryOnChange,
      subCategoryOnChange,
      setFormInputs
    } = this.props;
    return (
      <form className="ui form product-form">
        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <label>Product Category</label>
              <Select
                options={categoryOptions}
                placeholder={"Select a category or add a new one"}
                onChange={handleCategoryOnChange}
              />
            </div>
            <div className="eight wide field">
              <label>Product Sub-Category</label>
              <Select
                ref={productSelect => (this.productSelect = productSelect)}
                options={[]}
                placeholder={"Select a sub-category or add a new one"}
                onChange={subCategoryOnChange}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <label>Product Name</label>
              <input
                type="text"
                name="productName"
                placeholder="E.g Mouka Flora"
                onChange={setFormInputs}
              />
            </div>
            <div className="eight wide field">
              <label>Image</label>
              <input
                className="product-img-input"
                type="file"
                name="image"
                placeholder="Select an image"
                onChange={setFormInputs}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
