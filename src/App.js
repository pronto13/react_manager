import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDg0nvOwg1uyps0K2ajoqGtUPf6GGNz-Xw',
    authDomain: 'react-native-manager-2d852.firebaseapp.com',
    databaseURL: 'https://react-native-manager-2d852.firebaseio.com',
    projectId: 'react-native-manager-2d852',
    storageBucket: '',
    messagingSenderId: '1074127963413'
  };
    firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
