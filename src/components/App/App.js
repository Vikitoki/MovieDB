import React from "react";
import { Provider } from "react-redux";

import { Route, Switch } from "react-router";

import store from "../../redux/store";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../../pages/Main/Main";

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
