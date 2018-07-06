const Styles = theme => ({
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
  thead: {
    marginLeft: theme.spacing.unit * 3,
    fontSize: 12
  },
  tfooter: {
    marginLeft: theme.spacing.unit * 3,
    fontSize: 12
  }
});

export default Styles;
