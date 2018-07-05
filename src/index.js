import React from "react";
import { render } from "react-dom";
import CarRegisterForm from "./components/CarRegisterForm";
import CarList from "./components/CarList";
import Users from "./components/Api";
const App = () => (
  <div>
    <CarRegisterForm />
    <CarList />
    <Users />
  </div>
);

render(<App />, document.getElementById("root"));
