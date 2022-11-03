import { authActions } from "../../actions";
import initialState from "../../initialState";

function auth(state = initialState.auth, actions) {
  switch (actions.type) {
    case authActions.REGISTER_APPLICANT_REQUEST:
      return {
        ...state,
        registerError: {},
        registering: true,
      };
    case authActions.REGISTER_APPLICANT_SUCCESS:
      return {
        ...state,
        registeredApplicant: actions.data,
        registerError: {},
        registering: false,
      };
    case authActions.REGISTER_APPLICANT_ERROR:
      return {
        ...state,
        registerError: actions.error,
        registering: false,
      };

    default:
      return state;
  }
}

export default auth;
