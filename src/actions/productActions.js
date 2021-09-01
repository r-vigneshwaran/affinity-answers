import axios from 'axios';
import { actionTypes } from '../constants';

const { SET_PRODUCTS_LIST, SET_LOADER, SET_PRODUCT, SET_CATEGORIES } =
  actionTypes;

export const getProductsList = () => async (dispatch) => {
  dispatch({ type: SET_LOADER, payload: true });
  axios
    .get('https://fakestoreapi.com/products')
    .then((response) => {
      dispatch({ type: SET_PRODUCTS_LIST, payload: response.data });
      dispatch({ type: SET_LOADER, payload: false });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SET_LOADER, payload: false });
    });
};

export const getProduct = (id) => async (dispatch) => {
  dispatch({ type: SET_LOADER, payload: true });
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      dispatch({ type: SET_PRODUCT, payload: response.data });
      dispatch({ type: SET_LOADER, payload: false });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SET_LOADER, payload: false });
    });
};

export const getCategories = () => async (dispatch) => {
  dispatch({ type: SET_LOADER, payload: true });
  axios
    .get('https://fakestoreapi.com/products/categories')
    .then((response) => {
      dispatch({ type: SET_CATEGORIES, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
  dispatch({ type: SET_LOADER, payload: false });
};
