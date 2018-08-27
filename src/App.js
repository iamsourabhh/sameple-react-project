import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import configureStore from "./redux/configureStore";
import PicApp from "./pages/PicApp/PicApp";
import Shape from "./pages/Shape/Shape";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <React.Fragment>
            <Route path="/" component={PicApp} exact />
            <Route path="/assignment-2" component={Shape} exact />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
