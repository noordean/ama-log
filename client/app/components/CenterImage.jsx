import React from "react";

export default class CenterImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center-img">
        <img src="http://cdn.shopify.com/s/files/1/0017/9496/5570/products/jpg_bb8744db-0c6b-4fd2-b3c2-c7e992458de3_1200x1200.jpg?v=1533674991" />
      </div>
    );
  }
}
