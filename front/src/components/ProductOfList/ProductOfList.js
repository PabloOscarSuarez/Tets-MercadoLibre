import React from "react";
import PropTypes from "prop-types";
import shipping from "../../Assets/ic_shipping.png";
import { withRouter } from "react-router-dom";

import styles from "./style";

const ProductOfList = ({
  id,
  title,
  price,
  picture,
  free_shipping,
  address,
  history
}) => {
  const handleClick = () => {
    history.push(`/items/${id}`);
  };
  console.log(price);
  return (
    <styles.Container onClick={handleClick}>
      <styles.Content>
        <styles.Img src={picture} alt={title} />
        <styles.ContentDetailAndTitle>
          <styles.Details>
            <styles.Price>$ {price.amount}</styles.Price>
            {free_shipping && (
              <styles.IconShipping src={shipping} alt="Free shipping" />
            )}
          </styles.Details>
          <styles.Title>{title}</styles.Title>
        </styles.ContentDetailAndTitle>
      </styles.Content>
      <styles.Address>{address}</styles.Address>
    </styles.Container>
  );
};

ProductOfList.propTypes = {};

export default withRouter(ProductOfList);
