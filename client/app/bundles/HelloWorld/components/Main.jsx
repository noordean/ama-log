import React from "react";
// import greyChair from "../../../images/grey_chair.jpeg";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bd-example" style={{marginTop: "-100px"}}>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="http://cdn.shopify.com/s/files/1/0017/9496/5570/products/jpg_bb8744db-0c6b-4fd2-b3c2-c7e992458de3_1200x1200.jpg?v=1533674991" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Quality</h1>
                <p>You get Quality for all you purchase from  us.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="http://amazingfurniturehouston.com/wp-content/uploads/2017/10/paradise-black_orig.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Reliable</h1>
                <p>Enjoy double reliability - Product and Delivery.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="http://www.stmarysmunicipalairport.com/b/2017/01/dark-brown-bookcase-room-dividers-for-modern-home-furniture-ideas-ikea-bookcase-room-divider-thin-room-divider-shelf-wall-divider-book-shelf-divider-open-bookshelves-room-dividers-bookcase-as-room-div.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Organized</h1>
                <p>We load and offload your items in a well organized manner.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
