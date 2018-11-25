import React from "react";
import classNames from "classnames";

import { Link } from "react-router-dom";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import { TextField, Input, Button, Typography } from "@material-ui/core";

// core components
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { onFieldChange } from "./../middleware";

const LoginForm = props => {
  const {
    handleUserChange,
    user,
    classes,
    handleSubmitLogin,
    error,
    history
  } = props;

  console.log(props);

  return (
    <div>
      <CardHeader color="info" className={classes.cardHeader}>
        <h4>Login</h4>
        <div className={classes.socialLine}>
          <Button justicon="true" href="#pablo" target="_blank" color="default">
            <i className={"fab fa-facebook"} />
          </Button>
          <Button
            justicon="true"
            href="#pablo"
            target="_blank"
            color="default"
            onClick={e => e.preventDefault()}
          >
            <i className={"fab fa-google"} />
          </Button>
        </div>
      </CardHeader>
      <p className={classes.divider}>Or Be Classical</p>
      <CardBody>
        <TextField
          id="email"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          label="Email"
          type="email"
          value={user.email}
          fullWidth
          onChange={e => onFieldChange(e, handleUserChange)}
          InputProps={{
            endAdornment: (
              <InputAdornment variant="filled" position="end">
                <Email />
              </InputAdornment>
            )
          }}
        />
        {console.log(user.password)}
        <TextField
          id="password"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          label="Password"
          type="password"
          value={user.password}
          fullWidth
          onChange={e => onFieldChange(e, handleUserChange)}
          InputProps={{
            endAdornment: (
              <InputAdornment variant="filled" position="end">
                <LockOutline />
              </InputAdornment>
            )
          }}
        />
        {/*{ console.log("Current email:" + this.props.email)} */}
      </CardBody>
      {console.log(this.props)}
      <CardFooter className={classes.cardFooter}>
        <Button
          variant="filled"
          color="default"
          className={classes.button}
          onClick={e => handleSubmitLogin(e, history)}
        >
          LOGIN
        </Button>
        <Button
          variant="outlined"
          color="default"
          className={classes.button}
          onClick={this.signInWithMailAndPassword}
        >
          <Link
            to="/registration"
            style={{ display: "block", height: "100%", color: "black" }}
          >
            REGISTER
          </Link>
        </Button>
      </CardFooter>
      {error && (
        <Typography color="error" align="center" variant="caption" gutterBottom>
          {error.message}
        </Typography>
      )}
    </div>
  );
};

export default LoginForm;
