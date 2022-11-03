import { takeLatest, fork, put } from "redux-saga/effects";
import axios from "axios";
import { authActions } from "../../actions";

function* registerApplicant(actions) {
  try {
    const response = yield axios({
      url: "/applicants/auth/register",
      method: "POST",
      data: actions.data,
    });
    yield put({
      type: authActions.REGISTER_APPLICANT_SUCCESS,
      data: response,
    });
  } catch (error) {
    yield put({
      type: authActions.REGISTER_APPLICANT_ERROR,
      error: error.data,
    });
  }
}

function* loginApplicant(actions) {
  try {
    const response = yield axios({
      url: "/applicants/auth/login",
      method: "POST",
      data: actions.data,
    });
    yield put({
      type: authActions.LOGIN_APPLICANT_SUCCESS,
      data: response,
    });
    yield put({
      type: authActions.SET_AUTH_USER,
      user: response.applicant,
    });
  } catch (error) {
    yield put({
      type: authActions.LOGIN_APPLICANT_ERROR,
      error: error.data,
    });
  }
}

function* watchRegisterApplicant() {
  yield takeLatest(authActions.REGISTER_APPLICANT_REQUEST, registerApplicant);
}

function* watchLoginApplicant() {
  yield takeLatest(authActions.LOGIN_APPLICANT_REQUEST, loginApplicant);
}

const forkFunctions = [fork(watchRegisterApplicant), fork(watchLoginApplicant)];

export default forkFunctions;
