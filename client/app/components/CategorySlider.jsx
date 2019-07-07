import React from "react";
import { red } from "ansi-colors";

export default class CategorySlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category-slider">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                      <div className="span4 category-slider-items">
                          <span className="slider-img-wrapper"><img src="https://s3.us-west-2.amazonaws.com/ama-log/category-slider/couch.png" className="category-icon"  /> <p>CHAIRS</p></span>
                          <span className="slider-img-wrapper"><img src="https://s3.us-west-2.amazonaws.com/ama-log/category-slider/wardrobe.png" className="category-icon"  /> <p>WARDROBE</p></span>
                          <span className="slider-img-wrapper"><img src="https://s3.us-west-2.amazonaws.com/ama-log/category-slider/dining.png" className="category-icon" /> <p>DINING</p></span>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <div className="span4 category-slider-items">
                          <span className="slider-img-wrapper"><img src="https://s3.us-west-2.amazonaws.com/ama-log/category-slider/table.png" className="category-icon" /> <p>TABLES</p></span>
                          <span className="slider-img-wrapper"><img src="https://s3.us-west-2.amazonaws.com/ama-log/category-slider/bed.png" className="category-icon" /> <p>BEDROOM</p></span>
                          <span className="slider-img-wrapper"><img src="https://s3.us-west-2.amazonaws.com/ama-log/category-slider/working.png" className="category-icon" /> <p>OFFICE</p></span>
                      </div>
                  </div>
              </div>
              <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
      </div>
    );
  }
}
