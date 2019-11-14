import ReactOnRails from "react-on-rails";

import HelloWorld from "../components/HelloWorld";
import Home from "../components/Home";
import Login from "../components/Admin/Login";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Home,
  Login
});
