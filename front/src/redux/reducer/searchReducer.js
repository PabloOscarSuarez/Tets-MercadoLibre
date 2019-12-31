import {
  SEARCH_PRODUCTS_COMPLETE,
  SEARCH_PRODUCTS_ERROR,
  SEARCH_PRODUCTS_START,
  SEARCH_PRODUCT_BY_ID_COMPLETE,
  SEARCH_PRODUCT_BY_ID_ERROR,
  SEARCH_PRODUCT_BY_ID_START,
  RESET_STORE
} from "../consts";

const initialState = {
  isLoading: false,
  productsResults: { items: [] },
  productDetail: { items: [] }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_PRODUCTS_START:
      return { ...state, isLoading: true };

    case SEARCH_PRODUCTS_COMPLETE:
      return { ...state, isLoading: false, productsResults: payload };

    case SEARCH_PRODUCTS_ERROR:
      const productsResults = { ...state.productsResults, items: null };
      return { ...state, isLoading: false, productsResults };

    case SEARCH_PRODUCT_BY_ID_START:
      return { ...state, isLoading: true };

    case SEARCH_PRODUCT_BY_ID_COMPLETE:
      return { ...state, isLoading: false, productDetail: payload };

    case SEARCH_PRODUCT_BY_ID_ERROR:
      const productDetail = { ...state.productDetail, items: null };
      return {
        ...state,
        isLoading: false,
        productDetail
      };
    case RESET_STORE:
      return {
        ...state,
        productsResults: { items: [] },
        productDetail: { items: [] }
      };

    default:
      return state;
  }
};
