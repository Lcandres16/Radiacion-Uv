import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importar el componente principal de la aplicación
import AppTablas from './AppTablas'; // Importar el componente App2

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <AppTablas />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
