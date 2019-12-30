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
  console.log(product);

  return (
    <styles.Container>
      <styles.Content>
        <styles.ContentImgAndDetail>
          {/* <styles.img src="" /> */}
          <styles.Detail>
            <styles.Span></styles.Span>
            <styles.Title></styles.Title>
            <styles.ButtonAddToCart></styles.ButtonAddToCart>
          </styles.Detail>
        </styles.ContentImgAndDetail>
        <styles.ContentSubtitleAndDescription>
          <styles.Subtitle></styles.Subtitle>
          <styles.Description></styles.Description>
        </styles.ContentSubtitleAndDescription>
      </styles.Content>
    </styles.Container>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
