import React, { useState, useEffect } from 'react';
import Card from './Card'; // Importar el componente de tarjeta

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '20px' }}>Datos Enviados</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card uvValue={uvValue} loading={loading} /> {/* Usar el componente de tarjeta */}
      </div>
      <style>{`
        .card {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          margin: 10px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .recommendation {
          margin-top: 20px;
        }

        p {
          text-align: center;
          margin: 10px 0;
          line-height: 1.5;
        }

        p:nth-child(odd) {
          display: block;
          clear: both;
        }
      `}</style>
    </div>
  );
}

export default App;
