import React from "react";
import classNames from "classnames";

import { Link } from "react-router-dom";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import { TextField, Button, Grid, Typography } from "@material-ui/core";

// core components
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// Material UI Core components

import { onFieldChange } from "../middleware";
import { container } from "assets/jss/material-kit-react";

const RegistrationFormOne = props => {
  const { handleUserChange, handleNextButton, error, user, classes } = props;

  const { password, email, name, lastname } = user;

  const isInvalid =
    password === "" || email === "" || name === "" || lastname === "";

  return (
    <form className={classes.form}>
      <p className={classes.divider}>Or Be Classical</p>
      <CardBody>
        <Grid container className={classes.root} spacing={8}>
          <Grid item xs={6}>
            <TextField
              required
              id="name"
              className={classNames(classes.margin, classes.textField)}
              variant="filled"
              label="Name"
              type="text"
              value={user.name}
              fullWidth
              onChange={e => onFieldChange(e, handleUserChange)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="lastname"
              className={classNames(classes.margin, classes.textField)}
              variant="filled"
              label="Last Name"
              type="text"
              value={user.lastname}
              fullWidth
              onChange={e => onFieldChange(e, handleUserChange)}
            />
          </Grid>
          <TextField
            required
            id="email"
            className={classNames(classes.margin, classes.textField)}
            variant="filled"
            label="Email"
            type="email"
            value={user.email}
            onChange={e => onFieldChange(e, handleUserChange)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment variant="filled" position="end">
                  <Email />
                </InputAdornment>
              )
            }}
          />

          <TextField
            required
            id="password"
            className={classNames(classes.margin, classes.textField)}
            variant="filled"
            label="Password"
            type="password"
            value={user.password}
            onChange={e => onFieldChange(e, handleUserChange)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment variant="filled" position="end">
                  <LockOutline />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Button
          variant="filled"
          color="default"
          className={classes.button}
          onClick={() => handleNextButton()}
          disabled={isInvalid}
        >
          NEXT
        </Button>
      </CardFooter>
      {error && (
        <Typography color="error" align="center" variant="caption" gutterBottom>
          {error.message}
        </Typography>
      )}
    </form>
  );
};

export default RegistrationFormOne;
