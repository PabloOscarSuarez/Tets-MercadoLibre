import {
  SEARCH_PRODUCTS_COMPLETE,
  SEARCH_PRODUCTS_ERROR,
  SEARCH_PRODUCTS_START
} from "../consts";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_PRODUCTS_START:
      return { ...state, isLoading: true };

    case SEARCH_PRODUCTS_COMPLETE:
      return { ...state, isLoading: false, productsResults: payload };

    case SEARCH_PRODUCTS_ERROR:
      return { ...state, isLoading: false, productsResults: null };

    default:
      return state;
  }
};
