import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import Paper from "@material-ui/core/Paper";
import configuration from "../../../configuration.json";
//Styled modules
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  h1: {
    marginLeft: theme.spacing.unit * 3,
    fontSize: 18
  },
  h2: {
    marginLeft: theme.spacing.unit * 3,
    fontSize: 12
  }
});

const API = `${configuration.baseUri}/cars`;

const cars = [
  {
    id: "1",
    name: "Opala 67",
    year: "1967"
  },
  {
    id: "2",
    name: "Gol Mil",
    year: "2000"
  },
  {
    id: "3",
    name: "Golf GTI",
    year: "2018"
  },
  {
    id: "4",
    name: "Jetta",
    year: "2016"
  },
  {
    id: "5",
    name: "Passat",
    year: "2014"
  }
];

function CarRegisterList(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <h1 className={classes.h1}>Lista de carros</h1>
          <TableRow>
            <CustomTableCell>ID</CustomTableCell>
            <CustomTableCell>Nome do carro</CustomTableCell>
            <CustomTableCell>Ano do carro</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map(car => {
            return (
              <TableRow className={classes.row} key={car.id}>
                <CustomTableCell>{car.id}</CustomTableCell>
                <CustomTableCell>{car.name}</CustomTableCell>
                <CustomTableCell>{car.year}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <h1 className={classes.h2}>Número de carros {cars.length}</h1>
        <TableFooter />
      </Table>
    </Paper>
  );
}

CarRegisterList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CarRegisterList);
