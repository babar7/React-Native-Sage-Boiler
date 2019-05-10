import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Utils from "./Utils";
import rootNavigator from "./navigator";

export default class App extends Component {
  state = { isReduxLoaded: false };

  onBeforeLift = () => {
    this.setState({ isReduxLoaded: true });
  };

  render() {
    const Navigator = rootNavigator(Utils.getIsUserLoggedIn());

    return (
      <Provider store={store}>
        <PersistGate onBeforeLift={this.onBeforeLift} persistor={persistor}>
          {this.state.isReduxLoaded ? <Navigator /> : null}
        </PersistGate>
      </Provider>
    );
  }
}
