import {
  SEARCH_PRODUCTS_COMPLETE,
  SEARCH_PRODUCTS_ERROR,
  SEARCH_PRODUCTS_START,
  SEARCH_PRODUCT_BY_ID_COMPLETE,
  SEARCH_PRODUCT_BY_ID_ERROR,
  SEARCH_PRODUCT_BY_ID_START
} from "../consts";

const initialState = {
  isLoading: false,
  productsResults: {},
  productDetail: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_PRODUCTS_START:
      return { ...state, isLoading: true };

    case SEARCH_PRODUCTS_COMPLETE:
      return { ...state, isLoading: false, productsResults: payload };

    case SEARCH_PRODUCTS_ERROR:
      return { ...state, isLoading: false, productsResults: null };

    case SEARCH_PRODUCT_BY_ID_START:
      return { ...state, isLoading: true };

    case SEARCH_PRODUCT_BY_ID_COMPLETE:
      return { ...state, isLoading: false, productDetail: payload };

    case SEARCH_PRODUCT_BY_ID_ERROR:
      return { ...state, isLoading: false, productDetail: null };

    default:
      return state;
  }
};
