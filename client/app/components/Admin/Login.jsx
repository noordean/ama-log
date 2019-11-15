import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    }

    this.login = this.login.bind(this);
  }

  async login(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const response = await fetch("/sessions", {
      credentials: "same-origin",
      method: "POST",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        username,
        password
      })
    });

    if (!response.ok) {
      const responseObj = await response.json();
      this.setState({
        errorMessage: responseObj.message
      });

      return;
    }

    window.location = "/admin";
  }

  setLoginInput = (event) => {
    this.state[event.target.name] = event.target.value;
  }

  render() {

    return (
      <div className="login-form">
        <div className="login-error-msg"> {this.state.errorMessage.length > 0 && this.state.errorMessage} </div>
        <form className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" onChange={this.setLoginInput} />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="text" name="password" placeholder="Password" onChange={this.setLoginInput} />
          </div>
          <button className="ui button" type="submit" onClick={this.login}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
