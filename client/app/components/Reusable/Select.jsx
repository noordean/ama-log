import React from "react";

export default class Select extends React.Component {
  componentDidMount() {
    const { placeholder, options, onChange } = this.props;
    $(this.selectInput).selectize({
      create: true,
      sortField: "text",
      mode: "single",
      placeholder,
      options,
      onChange
    });
  }

  render() {
    return (
      <input
        ref={selectInput => (this.selectInput = selectInput)}
        type="text"
        name="tags"
      />
    );
  }
}
