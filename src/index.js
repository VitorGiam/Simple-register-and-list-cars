import React from "react";
import { render } from "react-dom";
import CarRegisterForm from "./components/CarRegisterForm";
import CarList from "./components/CarList";
import configuration from "./configuration";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = configuration.ContentType;
axios.defaults.baseURL = configuration.baseUri;

const App = () => (
  <div>
    <br />
    <CarRegisterForm />
    <br />
    <CarList />
    <br />
  </div>
);

render(<App />, document.getElementById("root"));
