import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux";

import ProductsList from "../ProductsList";
import ProductDetail from "../ProductDetail";
import Home from "../Home ";
import ErrorPage from "../ErrorPage";
import Header from "../Header/Header";
import styles from "./style";
import BreadCrumbs from "../BreadCrumbs";

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <styles.Main>
        <BreadCrumbs />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={ProductsList} />
          <Route exact path="/items/:id" component={ProductDetail} />
          <Route component={ErrorPage} />
        </Switch>
      </styles.Main>
    </Router>
  </Provider>
);

export default App;
