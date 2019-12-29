import React from "react";

export default class Modal extends React.Component {
  render() {
    const { title, children, onSubmit, modalName } = this.props;
    return (
      <div className={`ui modal ${modalName}`}>
        <i className="close icon"></i>
        <div className="header">{title}</div>
        <div className="">{children}</div>
        <div className="actions">
          <div className="ui button" onClick={onSubmit}>
            Submit
          </div>
        </div>
      </div>
    );
  }
}
