import React from "react";
import { observer } from "mobx-react";
import { autorun } from "mobx";

@observer
export default class ProductEditForm extends React.Component {
  componentDidMount() {
    autorun(() => {
      this.productName.value = this.props.currentProductName;
    });
  }

  render() {
    const { onChangeCurrentProductName } = this.props;

    return (
      <form className="ui form product-form">
        <div className="field">
          <div className="fields">
            <div className="sixteen wide field">
              <input
                ref={element => (this.productName = element)}
                type="text"
                name="productName"
                placeholder="E.g Mouka Flora"
                onChange={event => {
                  onChangeCurrentProductName(event);
                }}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
