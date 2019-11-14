import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-form">
        <form className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="user-name" placeholder="Username" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="text" name="password" placeholder="Password" />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
