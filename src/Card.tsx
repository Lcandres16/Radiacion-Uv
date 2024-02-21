import React from 'react';

const Card: React.FC<{ uvValue: number | undefined, loading: boolean }> = ({ uvValue, loading }) => {
  // Estilos CSS como objeto de estilo de React
  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '300px',
      marginTop: '20px',
    },
    header: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
    },
    content: {
      padding: '20px',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2>Radiación UV</h2>
      </div>
      <div style={styles.content}>
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <p>Recoleccion de Datos: {uvValue !== undefined ? uvValue : 'No disponible'}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
