import { observable, action } from "mobx";
import ReactOnRails from "react-on-rails";

export default class UserStore {
  @observable isLoggedIn = false;
  @observable loggedInMessage = "";
  @observable username = "";
  @observable password = "";

  @action
  async login() {
    const username = this.username;
    const password = this.password;
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
      this.isLoggedIn = false;
      this.loggedInMessage = responseObj.message;
      return;
    }
    this.isLoggedIn = true;
  }

  @action
  setUserValue(name, value) {
    this[name] = value;
  }
}
