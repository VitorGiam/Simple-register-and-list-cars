import React, { Component } from "react";
import axios from "axios";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Styles from "../Styles";
import configuration from "../../../configuration";

const api = `${configuration.baseUri}/cars`;

const WithFetching = url => Comp =>
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
      axios(url)
        .then(response => {
          if (response) {
            return response.data;
          } else {
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

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <TableBody>
      {cars.map(car => {
        return (
          <TableRow className={Styles.thead} key={car.id}>
            <TableCell className={Styles.row}>{car.id}</TableCell>
            <TableCell className={Styles.row}>{car.name}</TableCell>
            <TableCell className={Styles.row}>{car.year}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default WithFetching(api)(App);
