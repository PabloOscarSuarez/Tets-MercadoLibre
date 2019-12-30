import {
  SEARCH_PRODUCTS_COMPLETE,
  SEARCH_PRODUCTS_ERROR,
  SEARCH_PRODUCTS_START,
  SEARCH_PRODUCT_BY_ID_COMPLETE,
  SEARCH_PRODUCT_BY_ID_START,
  SEARCH_PRODUCT_BY_ID_ERROR
} from "../consts";

import axios from "axios";

const baseUrl = "http://localhost:4000/api/items?q=";
const baseUrlById = "http://localhost:4000/api/items/";

export const searchProducts = payload => async dispatch => {
  dispatch({ type: SEARCH_PRODUCTS_START });
  try {
    const response = await axios.get(baseUrl + payload);
    dispatch({ type: SEARCH_PRODUCTS_COMPLETE, payload: response.data });
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCTS_ERROR });
  }
};

export const searchDetailProducts = payload => async dispatch => {
  dispatch({ type: SEARCH_PRODUCT_BY_ID_START });
  try {
    console.log(baseUrlById + payload);
    const response = await axios.get(baseUrlById + payload);
    dispatch({ type: SEARCH_PRODUCT_BY_ID_COMPLETE, payload: response.data });
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCT_BY_ID_ERROR });
  }
};
