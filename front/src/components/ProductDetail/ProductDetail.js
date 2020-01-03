import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./style";
import NumberFormat from "react-number-format";

import { useDispatch, useSelector } from "react-redux";
import { searchDetailProducts } from "../../redux/actions/search";
import { productDetail, isSearchingLoading } from "../../redux/selectors";

function ProductDetail({ match }) {
  const dispatch = useDispatch();
  const product = useSelector(state => productDetail(state));
  const isLoading = useSelector(state => isSearchingLoading(state));

  const { id } = match.params;
  useEffect(() => {
    dispatch(searchDetailProducts(id));
  }, [id]);

  const item = (product === null && product) || product.items;

  return (
    (isLoading && <h1>...Cargando</h1>) ||
    (item === null && (
      <h1>No se pudo realizar esta peticion intente mas con otro producto</h1>
    )) ||
    (item.length !== 0 && (
      <styles.Container>
        <styles.Content>
          <styles.ContentImgAndDetail>
            <styles.ContentImg>
              <styles.Img src={item.picture} alt={item.title} />
            </styles.ContentImg>
            <styles.Detail>
              <styles.Span>
                {item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                {item.sold_quantity} vendidos
              </styles.Span>
              <styles.Title>{item.title}</styles.Title>

              <NumberFormat
                value={item.price.amount}
                displayType={"text"}
                renderText={value => (
                  <styles.Price>
                    {value}
                    <styles.Decimals>{item.price.decimals}</styles.Decimals>
                  </styles.Price>
                )}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"$ "}
              />

              {console.dir(product.items.price.decimals)}
              <styles.ButtonAddToCart>Comprar</styles.ButtonAddToCart>
            </styles.Detail>
          </styles.ContentImgAndDetail>
          <styles.ContentSubtitleAndDescription>
            <styles.Subtitle>Descripción del producto</styles.Subtitle>
            <styles.Description> {item.description}</styles.Description>
          </styles.ContentSubtitleAndDescription>
        </styles.Content>
      </styles.Container>
    ))
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
