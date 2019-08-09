import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import MainNavigation from "./src/routers/MainNavigation";
import NavigationService from "./src/routers/NavigationService";
import { createStore } from "redux";
import allReducers from "./src/redux/reducers/index";

let store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation
          ref={navigatorRef =>
            NavigationService.setTopLevelNavigator(navigatorRef)
          }
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
