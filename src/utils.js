import { auth } from "./firebase";

export const handleUserChange = (field, value) => {
  let user = { ...this.state.user };
  user[field] = value;

  this.setState({ user });
};

export const handleErrorStateChange = (value, page) => {
  let error = { ...this.state.error };
  error[page] = value;

  this.setState({ error });
  console.log("Error: " + this.state.error);
};

export const onSubmitRegistration = event => {
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
};

export const onSubmitLogin = event => {
  console.log("Submit login");
  const { email, password } = this.state.user;
  const { history } = this.props;

  console.log("Current email address in the state: " + email);

  auth
    .doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({ ...INITIAL_STATE });
      history.push("/");
    })
    .catch(error => {
      let err = { ...this.state.error };
      err.login = error;
      this.setState({ error: err });
    });
  event.preventDefault();
};
