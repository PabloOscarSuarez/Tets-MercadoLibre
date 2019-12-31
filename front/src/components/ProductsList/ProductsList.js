import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";

import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../redux/actions/search";
import { productsResults, isSearchingLoading } from "../../redux/selectors";
import styles from "./styles";

import ProductOfList from "../ProductOfList";

const ProductsList = ({ location }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => productsResults(state));
  const isLoading = useSelector(state => isSearchingLoading(state));

  const { search } = queryString.parse(location.search);
  useEffect(() => {
    dispatch(searchProducts(search));
  }, [search]);

  const items = product.items && product.items;
  return (
    (isLoading && <h1>...cargando</h1>) ||
    (items === null && (
      <h1>problema con el servidor no se pudo buscar el producto </h1>
    )) ||
    (!!product.items.length && (
      <styles.Container>
        {product.items.map(item => (
          <div key={item.id}>
            <ProductOfList {...item} />
            <styles.Divider />
          </div>
        ))}
      </styles.Container>
    )) || <h1>No se encontraron resultados</h1>
  );
};

ProductsList.propTypes = {};

export default ProductsList;
