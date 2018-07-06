import React, { Component } from "react";
import axios from "axios";
import configuration from "../../../configuration";

const api = `${configuration.baseUri}/cars`;

export default class ApiPostCar extends Component {
  getData = () => {
    const { searchTerm, lang } = this.state;
    axios
      .post(api)
      .then(response => {
        const res = response.data.text;
        this.setState({ data: res });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <div>
        <h1>Axios Request</h1>
      </div>
    );
  }
}
