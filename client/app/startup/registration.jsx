import ReactOnRails from "react-on-rails";

import HelloWorld from "../components/HelloWorld";
import Home from "../components/Home";
import Login from "../components/Admin/Login";
import ProductForm from "../components/Admin/ProductForm";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Home,
  Login,
  ProductForm
});
