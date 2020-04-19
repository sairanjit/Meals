import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './src/navigation/MealsNavigator';

enableScreens();

const App = (props) => {
  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;