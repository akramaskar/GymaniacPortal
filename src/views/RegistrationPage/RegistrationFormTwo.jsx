import React from "react";
import classNames from "classnames";

import { Link } from "react-router-dom";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import {
  TextField,
  Input,
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Typography
} from "@material-ui/core";

// core components
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// Material UI Core components

import { onFieldChange } from "../middleware";
import { container } from "assets/jss/material-kit-react";

const RegistrationFormOne = props => {
  const {
    handleUserChange,
    onAddressUserChange,
    onNextButton,
    onPreviousButton,
    error,
    user,
    classes
  } = props;

  const { password, email, name, lastname } = user;
  const { streetName, addressNumber, postcode, city, country } = user.address;

  const isInvalid =
    streetName === "" ||
    addressNumber === "" ||
    postcode === "" ||
    city === "" ||
    country === "";

  return (
    <form className={classes.form}>
      <p className={classes.divider}>Where do you live friend?</p>
      <CardBody>
        <Grid container className={classes.root} spacing={8}>
          <Grid item xs={9}>
            <TextField
              required
              id="streetName"
              className={classNames(classes.margin, classes.textField)}
              variant="filled"
              label="Streetname"
              type="text"
              value={streetName}
              fullWidth
              onChange={e => onFieldChange(e, onAddressUserChange)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="addressNumber"
              className={classNames(classes.margin, classes.textField)}
              variant="filled"
              label="Nr"
              type="text"
              value={addressNumber}
              fullWidth
              onChange={e => onFieldChange(e, onAddressUserChange)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="postcode"
              className={classNames(classes.margin, classes.textField)}
              variant="filled"
              label="Postcode"
              type="number"
              value={postcode}
              fullWidth
              onChange={e => onFieldChange(e, onAddressUserChange)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="city"
              className={classNames(classes.margin, classes.textField)}
              variant="filled"
              label="City"
              type="text"
              value={city}
              fullWidth
              onChange={e => onFieldChange(e, onAddressUserChange)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="country"
              className={classNames(classes.margin, classes.textField)}
              variant="filled"
              label="Country"
              type="text"
              value={country}
              fullWidth
              onChange={e => onFieldChange(e, onAddressUserChange)}
            />
          </Grid>
        </Grid>
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Button
          variant="filled"
          color="default"
          className={classes.button}
          onClick={() => onPreviousButton()}
          disabled={isInvalid}
        >
          back
        </Button>
        <Button
          variant="filled"
          color="default"
          className={classes.button}
          onClick={() => onNextButton()}
          disabled={isInvalid}
        >
          next
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
