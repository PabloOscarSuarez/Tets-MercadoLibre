import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./style";

import { useDispatch } from "react-redux";
import { ResetStore } from "../../redux/actions/search";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ResetStore());
  });
  return <styles.Text>Busca lo que queres y compralo ahora!!!!</styles.Text>;
}

Home.propTypes = {};

export default Home;
