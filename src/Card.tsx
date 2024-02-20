import React from 'react';
import './Card.css';

const Card: React.FC<{ uvValue: number | undefined, loading: boolean }> = ({ uvValue, loading }) => {
  return (
    <div className="card">
      <div className="header">
        <h2>Radiación UV</h2>
      </div>
      <div className="content">
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <p>Radiación UV: {uvValue !== undefined ? uvValue : 'No disponible'}</p>
        )}
      </div>
    </div>
  );
}

export default Card; // Agrega esta línea para convertir el archivo en un módulo
