import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer ui grid">
        <div className="eight wide column">
          <div className="contact-info">
            <b>Address:</b> 22 Itire Lagos
          </div>
          <div className="contact-info">
            <b>Email:</b> Emailama-mart@gmail.com
          </div>
          <div className="contact-info">
            <b>Phone:</b> +2347031863004
          </div>
        </div>
        <div className="eight wide column right aligned">
          <div>
            <b>Follow us:</b>{" "}
            <a href="#">
              <i className="twitter icon"></i>
            </a>{" "}
            <a href="#">
              <i className="instagram icon"></i>
            </a>{" "}
          </div>
          <div>
            <a href="/login">Admin?</a>
          </div>
        </div>
      </div>
    );
  }
}
