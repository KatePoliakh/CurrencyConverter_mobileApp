import React from "react"
import Navigation from "./config/Navigation"
import { ConversionContextProvider } from "./util/ConversionContext"

import { api } from "./util/api"

api("/latest?base=USD")
  .then(res => console.log(res))
  .catch(err => console.log("err", err))

export default () => (
  <ConversionContextProvider>
    <Navigation />
  </ConversionContextProvider>
)
/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
