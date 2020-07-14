/**
 * @format
 */


import * as React from 'react';
import {AppRegistry} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';


const theme = {
  ...DefaultTheme,
  dark:true,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4CAF50',
    accent: '#7C4DFF',
    background:'white'
  },
};

export default function Main() {
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }
  


AppRegistry.registerComponent(appName, () => Main);
