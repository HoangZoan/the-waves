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
  REMOVE_PRODUCT,
  GET_ALL_BRANDS,
  PRODUCT_ADD,
  CLEAR_PRODUCT_ADD,
  GET_PROD_BY_ID,
  CLEAR_CURRENT_PRODUCT,
  USER_ADD_TO_CART,
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

export const userAddToCart = (data) => ({
  type: USER_ADD_TO_CART,
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

export const productRemove = () => ({
  type: REMOVE_PRODUCT,
});

export const productAdd = (article) => ({
  type: PRODUCT_ADD,
  payload: article,
});

export const clearProductAdd = () => ({
  type: CLEAR_PRODUCT_ADD,
});

export const productsById = (product) => ({
  type: GET_PROD_BY_ID,
  payload: product,
});

export const clearCurrentProduct = (product) => ({
  type: CLEAR_CURRENT_PRODUCT,
});

// BRANDS

export const getAllBrands = (brands) => ({
  type: GET_ALL_BRANDS,
  payload: brands,
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
