import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css'; // Importar el archivo CSS combinado
import App from './App'; // Importar el componente principal de la aplicación
import AppTablas from './AppTablas'; // Importar el componente App2
import './AppTablas.css'; // Importar el archivo CSS de App2

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <AppTablas />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
