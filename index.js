/**
 * @format
 */
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import SplashScreen from 'react-native-splash-screen';

const PayLogicApp = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return <App />;
};

AppRegistry.registerComponent(appName, () => PayLogicApp);
