import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home ";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header/Header";

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={ProductsList} />
          <Route exact path="/items/:id" component={ProductDetail} />
          <Route component={ErrorPage} />
        </Switch>
      </main>
    </Router>
  </Provider>
);

export default App;
