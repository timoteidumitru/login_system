import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./right-side.scss";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "90%",
    marginBottom: "11px",
    "& input": {
      padding: "9px 12px"
    }
  },
  rightSideButton: {
    boxShadow: "none",
    textTransform: "uppercase",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#9c27b0",
    borderRadius: "25px",
    color: "#fff",
    display: "flex",
    margin: "0.5em auto",
    fontWeight: "600",
    outline: "none",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "##1976d2",
      borderColor: "#0062cc",
      boxShadow: "none",
      cursor: "pointer"
    }
  },
  alternativeSignIn: {
    boxShadow: "none",
    fontSize: 15,
    padding: "6px 12px",
    lineHeight: 1.5,
    backgroundColor: "#fff",
    borderRadius: "4px",
    color: "#3a3a3a99",
    display: "flex",
    margin: "0.5em auto",
    fontWeight: "600",
    outline: "none",
    boxShadow: "1px 2px 2px 1px #ccc",
    border: "0",
    marginTop: "1.4em",
    "&:hover": {
      color: "#000",
      cursor: "pointer",
      boxShadow: "1px 2px 2px 1px #000"
    },
    "& img": {
      width: 18,
      left: 0
    },
    "& p ": {
      padding: "0 2em"
    }
  }
}));

export default function LeftSide() {
  const classes = useStyles();
  return (
    <div className="right-side__main">
      <div>
        <img src="./assets/images/brand.png" alt="brand" />
      </div>
      <form>
        <h3>Register</h3>
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          defaultValue=" "
          className={classes.textField}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="E-mail"
          defaultValue=" "
          className={classes.textField}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue=" "
          className={classes.textField}
          variant="outlined"
        />
        <button type="submit" className={classes.rightSideButton}>
          Register
        </button>
      </form>
      <div>
        <button className={classes.alternativeSignIn}>
          <img src="./assets/images/google-icon.png" alt="brand" />
          <p>Sign in with Google</p>
        </button>
      </div>
    </div>
  );
}
