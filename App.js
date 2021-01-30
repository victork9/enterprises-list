import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { Store } from './src/store';
import Routes from './src/routes'

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export default function App() {
  return (

    <>
      <Provider store={Store}>
        <Routes />
      </Provider>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
