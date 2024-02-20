import React, { useState, useEffect } from 'react';
import Card from './Card'; // Importar el componente de tarjeta
import './App.css';

const App: React.FC = () => {
  const [uvValue, setUvValue] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiKey = 'UMJYKO0LB1O6GNN0'; // Reemplaza con tu API Key de ThingSpeak
    const channelId = 2436920; // ID de tu canal de ThingSpeak
    const fieldNumber = '1'; // Número de campo que contiene los datos de radiación UV

    // Hacer una solicitud GET a la API de ThingSpeak
    fetch(`https://api.thingspeak.com/channels/${channelId}/fields/${fieldNumber}/last.json?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        // Obtener el valor de radiación UV del objeto JSON
        const value: number = data.field1;

        // Actualizar el estado con el valor de radiación UV
        setUvValue(value);
        setLoading(false); // Cambiar el estado de carga a falso
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setLoading(false); // Cambiar el estado de carga a falso
      });
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div className="container">
      <h1>Datos Enviados</h1>
      <Card uvValue={uvValue} loading={loading} /> {/* Usar el componente de tarjeta */}
    </div>
  );
}

export default App;
