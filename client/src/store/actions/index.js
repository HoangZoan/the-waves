import {
  GET_PROD_BY_SOLD,
  GET_PROD_BY_DATE,
  SUCCESS_GLOBAL,
  ERROR_GLOBAL,
  CLEAR_NOTIFICATION,
  AUTH_USER,
  SIGN_OUT,
  UPDATE_USER_PROFILE,
  USER_CHANGE_EMAIL,
  GET_PROD_BY_PAGINATE,
} from "../types";

// USER

export const userAuthenticate = (user) => ({
  type: AUTH_USER,
  payload: user,
});

export const userSignOut = () => ({
  type: SIGN_OUT,
});

export const userUpdateProfile = (userData) => ({
  type: UPDATE_USER_PROFILE,
  payload: userData,
});

export const userChangeEmail = (data) => ({
  type: USER_CHANGE_EMAIL,
  payload: data,
});

// PRODUCTS

export const productsBySold = (data) => ({
  type: GET_PROD_BY_SOLD,
  payload: data,
});

export const productsByDate = (data) => ({
  type: GET_PROD_BY_DATE,
  payload: data,
});

export const productsByPaginate = (products) => ({
  type: GET_PROD_BY_PAGINATE,
  payload: products,
});

// NOTIFICATIONS

export const errorGlobal = (msg) => ({
  type: ERROR_GLOBAL,
  payload: msg,
});

export const successGlobal = (msg) => ({
  type: SUCCESS_GLOBAL,
  payload: msg,
});

export const clearNotification = (msg) => {
  return (dispatch) => {
    dispatch({ type: CLEAR_NOTIFICATION });
  };
};
