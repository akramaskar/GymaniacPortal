import { LOG_IN, LOG_OUT } from "../actions/types";
const INITIAL_STATE = { user: {}, loginPage: {}, registrationPage: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, { user: action.user });
    case LOG_OUT:
      return Object.assign({}, state, { user: {} });
    default:
      return state;
  }
};
