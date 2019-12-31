import React from "react";
import { useSelector } from "react-redux";

import { categoriesResults } from "../../redux/selectors";
import styles from "./style";

const BreadCrumbs = () => {
  const categoriesList = useSelector(state => categoriesResults(state));

  const categories =
    categoriesList &&
    categoriesList.map((categorie, index) => (
      <styles.Crumb key={index}>{categorie}</styles.Crumb>
    ));
  return (
    (categories && (
      <styles.Container>
        <styles.BreadCrumbs>{categories}</styles.BreadCrumbs>
      </styles.Container>
    )) ||
    null
  );
};

export default BreadCrumbs;
