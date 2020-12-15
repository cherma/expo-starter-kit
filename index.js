import React from 'react';
import * as Expo from 'expo';
import AppComponent from 'components/AppComponent';
import { Provider } from 'react-redux';
import { configureStore } from 'utils/configureStore.js';

const store = configureStore();

export default Expo.registerRootComponent(() => {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
});
