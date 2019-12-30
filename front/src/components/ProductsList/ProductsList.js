import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";

import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../redux/actions/search";
import { productsResults, isSearchingLoading } from "../../redux/selectors";
import styles from "./styles";

import Product from "../ProductOfList";

const ProductsList = ({ location }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => productsResults(state));
  const isLoading = useSelector(state => isSearchingLoading(state));

  const { search } = queryString.parse(location.search);
  useEffect(() => {
    dispatch(searchProducts(search));
  }, [search]);
  return (
    (isLoading === undefined && <h1>esperando respuesta del servidor</h1>) ||
    (isLoading && <h1>cargando</h1>) ||
    (product === null && <h1>problema en respuesta del servidor</h1>) ||
    (product.items && (
      <styles.Container>
        {product.items.map(item => (
          <>
            <Product {...item} key={item.id} />
            <styles.Divider />
          </>
        ))}
      </styles.Container>
    ))
  );
};

ProductsList.propTypes = {};

export default ProductsList;
