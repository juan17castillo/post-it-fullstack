import {
  AUTH,
  AUTH_ERROR,
  RESET_PASSWORD,
  GET_USERS,
  DELETE_USER,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, errorMessage: error.response.data.message });
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, errorMessage: error.response.data.message });
  }
};

export const resetpassword = (id, password) => async (dispatch) => {
  try {
    const { data } = await api.resetPassword(id, password);
    dispatch({ type: RESET_PASSWORD, data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, errorMessage: error.response.data.message });
  }
};

export const getusers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({ type: GET_USERS, payload: data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, errorMessage: error.response.data.message });
  }
};

export const deleteuser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: DELETE_USER, payload: id });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, errorMessage: error.response.data.message });
  }
};
