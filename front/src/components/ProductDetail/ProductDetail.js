import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./style";

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

  const item = product.items && product.items;
  return (
    (item && (
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
              <styles.Price>
                $ {item.price.amount}
                {console.log(typeof item.price.amount)}
                <styles.Decimals>{item.price.decimals}</styles.Decimals>
              </styles.Price>
              <styles.ButtonAddToCart>Comprar</styles.ButtonAddToCart>
            </styles.Detail>
          </styles.ContentImgAndDetail>
          <styles.ContentSubtitleAndDescription>
            <styles.Subtitle>Descripción del producto</styles.Subtitle>
            <styles.Description> {item.description}</styles.Description>
          </styles.ContentSubtitleAndDescription>
        </styles.Content>
      </styles.Container>
    )) || <h1>cargango</h1>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
