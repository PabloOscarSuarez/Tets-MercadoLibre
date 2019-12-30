import { get } from "lodash";

export const isSearchingLoading = state => get(state, "search.isLoading");
export const productsResults = state => get(state, "search.productsResults");
export const productDetail = state => get(state, "search.productDetail");
