import React from "react";
import { observer } from "mobx-react";

@observer
export default class AddProductForm extends React.Component {
  render() {
    const { setFormInputs } = this.props;

    return (
      <form className="ui form product-form">
        <div className="field">
          <div className="fields">
            <div className="sixteen wide field">
              <label>Variant Name</label>
              <input
                type="text"
                name="variantName"
                placeholder="E.g L-Shape Sofa"
                onChange={setFormInputs}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="fields">
            <div className="eight wide field">
              <label>Variant Value</label>
              <input
                type="text"
                name="variantValue"
                placeholder="E.g 6 x 6 x 3"
                onChange={setFormInputs}
              />
            </div>
            <div className="eight wide field">
              <label>Variant Price</label>
              <input
                type="number"
                name="variantPrice"
                placeholder="Price in Naira"
                onChange={setFormInputs}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
