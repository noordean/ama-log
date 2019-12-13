import React from "react";
import { observer } from "mobx-react";
import { autorun } from "mobx";

import UserStore from "../../stores/UserStore";

@observer
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.userStore = new UserStore();
  }

  login = event => {
    event.preventDefault();
    this.userStore.login();
    autorun(() => {
      if (this.userStore.isLoggedIn) {
        window.location = "/admin";
      }
    });
  };

  setLoginInput = event => {
    this.userStore.setUserValue(event.target.name, event.target.value);
  };

  render() {
    return (
      <div className="login-form">
        <div className="login-error-msg">
          {" "}
          {this.userStore.loggedInMessage.length > 0 &&
            this.userStore.loggedInMessage}{" "}
        </div>
        <form className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.setLoginInput}
              required
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.setLoginInput}
              required
            />
          </div>

          <div className="field">
            <div className="fields">
              <div className="eight wide field">
                <button
                  className="ui button"
                  type="submit"
                  onClick={this.login}
                >
                  Submit
                </button>
              </div>
              <div className="eight wide field go-back-link">
                <a href="/">Go Back</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
