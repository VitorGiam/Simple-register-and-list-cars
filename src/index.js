import React from "react";
import { render } from "react-dom";
import CarRegisterForm from "./components/CarRegisterForm";
import CarList from "./components/CarList";

const App = () => (
  <div>
    <CarRegisterForm />
    <CarList />
  </div>
);

render(<App />, document.getElementById("root"));
