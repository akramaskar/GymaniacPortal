import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { Provider } from "react-redux";
import {
  LandingPage,
  ProfilePage,
  LoginPage,
  RegistrationPage,
  REGISTRATION_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  LANDING_ROUTE
} from "./routes";
import store from "./store";
import { auth } from "./firebase";

import "assets/scss/material-kit-react.css?v=1.1.0";
import INITIAL_STATE from "./initialState";
var hist = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleUserAddressChange = this.handleUserAddressChange.bind(this);
    this.handleErrorStateChange = this.handleErrorStateChange.bind(this);
    this.onSubmitRegistration = this.onSubmitRegistration.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  componentDidMount() {}

  handleUserChange(field, value) {
    let user = { ...this.state.user };
    user[field] = value;

    this.setState({ user });
  }

  handleUserAddressChange(field, value) {
    let user = { ...this.state.user };
    user.address[field] = value;

    this.setState({ user });
  }

  handleErrorStateChange(value, page) {
    let error = { ...this.state.error };
    error[page] = value;

    this.setState({ error });
    console.log("Error: " + this.state.error);
  }

  onSubmitRegistration(event) {
    console.log("Submit registration");
    const { email, password } = this.state.user;

    console.log("Current email address in the state: " + email);

    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        let err = { ...this.state.error };
        err.registration = error;
        this.setState({ error: err });
      });
    event.preventDefault();
  }

  onSubmitLogin(event, _history) {
    console.log("Submit login");
    const { email, password } = this.state.user;

    console.log("Current email address in the state: " + email);

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        _history.push(LANDING_ROUTE);
      })
      .catch(error => {
        let err = { ...this.state.error };
        err.login = error;
        this.setState({ error: err });
      });
    event.preventDefault();
  }

  render() {
    const { user } = this.state;

    return (
      <Provider store={store}>
        <Router history={hist}>
          <Switch>
            <Route
              path={LOGIN_ROUTE}
              render={props => (
                <LoginPage
                  user={user}
                  handleUserChange={this.handleUserChange}
                  error={this.state.error.login}
                  handleSubmitLogin={this.onSubmitLogin}
                  {...props}
                />
              )}
            />
            <Route
              path={REGISTRATION_ROUTE}
              render={() => (
                <RegistrationPage
                  user={user}
                  handleUserChange={this.handleUserChange}
                  error={this.state.error.registration}
                  handleSubmitRegistration={this.onSubmitRegistration}
                  onAddressUserChange={this.handleUserAddressChange}
                />
              )}
            />
            <Route
              path={PROFILE_ROUTE}
              render={props => <ProfilePage user={user} {...props} />}
            />
            <Route
              path={LANDING_ROUTE}
              render={props => <LandingPage user={user} {...props} />}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
