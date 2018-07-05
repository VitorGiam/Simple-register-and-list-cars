import React, { Component } from "react";
import configuration from "../../../configuration.json";

const APIw = "http://localhost:8081/cars";
const APIe = "https://hn.algolia.com/api/v1/search?query=";
const API = "https://requestbin.io/16p1jlr1";

const DEFAULT_QUERY = "";

const withFetching = url => Comp =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isLoading: false,
        error: null
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });
      // var myHeaders = new Headers();

      // myHeaders.append("Content-Type", configuration.baseUri);

      // var myInit = {
      //   method: "GET",
      //   headers: myHeaders,
      //   cache: "default"
      // };

      // console.log(url);

      fetch(url, {
        method: "GET", // pode ser cors ou basic(default)
        redirect: "follow",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(response => {
          console.log(response);
          if (response) {
            // const dataw = JSON.stringify(response, 0, 2);
            console.log("ola");
            return response.json();
          } else {
            console.log("fail");

            window.alert("eita");
            throw new Error("Something went wrong ...");
          }
        })
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      return <Comp {...this.props} {...this.state} />;
    }
  };

const App = ({ data, isLoading, error }) => {
  const cars = data.cars || [];

  const dataw = JSON.stringify(data, 0, 2);
  console.log(data);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      {cars.map(car => (
        <div>
          <p>{car}</p>
        </div>
      ))}
    </div>
  );
};

export default withFetching(API + DEFAULT_QUERY)(App);
