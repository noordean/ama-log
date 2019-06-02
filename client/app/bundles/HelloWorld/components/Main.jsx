import React from "react";

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
              <img src="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Quality</h1>
                <p>You get Quality for all you purchase from  us.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://t1.uc.ltmcdn.com/en/images/5/4/8/what_is_the_main_function_of_flowers_9845_600.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Reliable</h1>
                <p>Enjoy double reliability - Product and Delivery.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="d-block w-100" alt="..." />
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
