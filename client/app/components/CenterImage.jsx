import React from "react";

export default class CenterImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center-img">
        <img src="https://ama-log.s3-us-west-2.amazonaws.com/center_image.jpg" />
      </div>
    );
  }
}
