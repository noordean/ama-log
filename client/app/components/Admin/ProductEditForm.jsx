import React from "react";
import { observer } from "mobx-react";
import { autorun } from "mobx";

@observer
export default class ProductEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImageInput: false
    };
  }

  componentDidMount() {
    autorun(() => {
      this.productName.value = this.props.currentProductName;
      this.setState({ showImageInput: false });
    });
  }

  removeImage = () => {
    this.setState({ showImageInput: true });
  };

  render() {
    const {
      setFormInputs,
      currentProductImage,
      onChangeCurrentProductName
    } = this.props;
    return (
      <form className="ui form product-form">
        <div className="field">
          <div className="fields">
            <div className="eight wide field">
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
            <div className="eight wide field">
              {!this.state.showImageInput ? (
                <div className="product-image-wrapper">
                  <img className="product-image" src={currentProductImage} />
                  <span className="close-img-btn" onClick={this.removeImage}>
                    &times;
                  </span>
                </div>
              ) : (
                <input
                  className="product-img-input"
                  type="file"
                  name="image"
                  placeholder="Select an image"
                  onChange={setFormInputs}
                />
              )}
            </div>
          </div>
        </div>
      </form>
    );
  }
}
