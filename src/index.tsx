import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App'; // Importar el componente principal de la aplicación
import AppTablas from './AppTablas'; // Importar el componente App2

// Registra los componentes principales de la aplicación
AppRegistry.registerComponent('App', () => App);
AppRegistry.registerComponent('AppTablas', () => AppTablas);

// Ejecuta la aplicación principal
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
