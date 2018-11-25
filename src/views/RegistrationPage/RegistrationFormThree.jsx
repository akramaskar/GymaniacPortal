import React from "react";
import classNames from "classnames";

// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Cake from "@material-ui/icons/Cake";
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

import { onFieldChange, onSubmitClick } from "../middleware";
import { container } from "assets/jss/material-kit-react";

const RegistrationFormOne = props => {
  const {
    handleUserChange,
    handleSubmitRegistration,
    error,
    user,
    handlePreviousButton,
    classes
  } = props;

  const { password, email, name, lastname } = user;

  const isInvalid =
    password === "" || email === "" || name === "" || lastname === "";

  return (
    <form className={classes.form}>
      <p className={classes.divider}>Almost ready to go!</p>
      <CardBody>
        <Grid container className={classes.root} spacing={8}>
          <TextField
            required
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            value={user.email}
            onChange={e => onFieldChange(e, handleUserChange)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment variant="filled" position="end">
                  <Cake />
                </InputAdornment>
              )
            }}
          />
          {/* //FIXME: Change of state */}
          <Grid item xs={12}>
            <FormControl
              margin="normal"
              component="fieldset"
              className={classes.formControl}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                className={classes.group}
                value={user.gender}
                id="gender"
                onChange={e => onFieldChange(e, handleUserChange)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* //FIXME: Change of state */}
          <Grid item xs={12}>
            <FormControl
              margin="normal"
              component="fieldset"
              className={classes.formControl}
            >
              <FormLabel component="legend">Role</FormLabel>
              <RadioGroup
                aria-label="Role"
                name="role"
                className={classes.group}
                value={user.gender}
                id="role"
                onChange={e => onFieldChange(e, handleUserChange)}
              >
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                />
                <FormControlLabel
                  value="coach"
                  control={<Radio />}
                  label="Coach"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Button
          variant="filled"
          color="default"
          className={classes.button}
          onClick={() => handlePreviousButton()}
          disabled={isInvalid}
        >
          back
        </Button>
        <Button
          variant="outlined"
          color="default"
          className={classes.button}
          onClick={e => handleSubmitRegistration(e)}
          disabled={isInvalid}
        >
          sign up
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
