import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

import ProductsResults from "./pages/ProductsResults";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home ";
import ErrorPage from "./pages/ErrorPage";

const App = () => (
  <Provider store={store}>
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={ProductsResults} />
          <Route exact path="/items/:id" component={ProductDetail} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </main>
  </Provider>
);

export default App;
