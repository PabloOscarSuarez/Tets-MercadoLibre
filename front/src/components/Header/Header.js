import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./style";
import logo from "../../Assets/Logo_ML.png";
import iconSearch from "../../Assets/ic_Search.png";

const Header = ({ history }) => {
  const [searchText, setSearchtext] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setSearchtext(e.target.value);
  };

  const handleCleanTextClick = () => {
    setSearchtext("");
  };

  const handleTextSearchTextClick = () => {
    history.push(`/items?search=${searchText}`);
    handleCleanTextClick();
  };

  const handleKeyPrees = e => {
    e.key === "Enter" && handleTextSearchTextClick();
  };

  return (
    <styles.Header>
      <styles.Nav>
        <Link to="/">
          <styles.Img src={logo} alt="Mercado-Libre" />
        </Link>
        <styles.Input
          value={searchText}
          placeholder="Nunca dejes de buscar"
          onChange={handleChange}
          type="text"
          onKeyPress={handleKeyPrees}
        />
        <styles.Button onClick={handleTextSearchTextClick}>
          <img src={iconSearch} />
        </styles.Button>
      </styles.Nav>
    </styles.Header>
  );
};

Header.propTypes = {};

export default withRouter(Header);
