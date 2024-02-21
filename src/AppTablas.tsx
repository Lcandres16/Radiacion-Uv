import React, { useState } from 'react';

const AppTablas: React.FC = () => {
  const uvData = [
    { voltage: '0V', description: 'Radiación UV-B y UV-A muy baja', color: '#c8e6c9' }, // Verde claro
    { voltage: '1.1V', description: 'Radiación UV-B y UV-A baja', color: '#fff9c4' }, // Amarillo
    { voltage: '2.2V', description: 'Radiación UV-B y UV-A moderada', color: '#ffccbc' }, // Tomate
    { voltage: '3.3V', description: 'Radiación UV-B y UV-A alta', color: '#ff8a80' }, // Tomate más intenso
    { voltage: '4.4V', description: 'Radiación UV-B y UV-A muy alta', color: '#e57373' }, // Rojo
    { voltage: '5.5V y superior', description: 'Radiación UV-B y UV-A extremadamente alta', color: '#673ab7' }, // Violeta oscuro
  ];

  const [recommendation, setRecommendation] = useState<string>('');

  const handleCardClick = (description: string) => {
    let newRecommendation = '';
    switch (description) {
      case 'Radiación UV-B y UV-A muy baja':
        newRecommendation = 'Usa protector solar con SPF 15 o superior.';
        break;
      case 'Radiación UV-B y UV-A baja':
        newRecommendation = 'Usa protector solar con SPF 30 o superior.';
        break;
      case 'Radiación UV-B y UV-A moderada':
        newRecommendation = 'Usa protector solar con SPF 30 o superior y busca sombra en horas pico de sol.';
        break;
      case 'Radiación UV-B y UV-A alta':
        newRecommendation = 'Usa protector solar con SPF 50 o superior, busca sombra y usa ropa protectora.';
        break;
      case 'Radiación UV-B y UV-A muy alta':
        newRecommendation = 'Evita estar al sol en horas pico de sol, busca sombra y usa protector solar de amplio espectro con SPF 50 o superior.';
        break;
      case 'Radiación UV-B y UV-A extremadamente alta':
        newRecommendation = 'Evita estar al sol entre las 10 a.m. y las 4 p.m., busca sombra y usa protector solar de amplio espectro con SPF 50 o superior, así como ropa protectora y sombrero.';
        break;
      default:
        newRecommendation = '';
    }
    setRecommendation(newRecommendation);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1 style={{ fontFamily: 'Arial', fontSize: '28px', marginBottom: '20px' }}>Recomendaciones </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {uvData.map((data, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', cursor: 'pointer', transition: 'transform 0.2s', backgroundColor: data.color }} onClick={() => handleCardClick(data.description)}>
            <p style={{ fontSize: '20px', fontWeight: 'normal' }}><strong>Nivel de salida (V):</strong> {data.voltage}</p>
            <p style={{ fontSize: '20px' }}><strong>Nivel de radiación UV:</strong> {data.description}</p>
          </div>
        ))}
      </div>
      {recommendation && <p style={{ marginTop: '20px', fontSize: '20px', fontStyle: 'italic' }}>{recommendation}</p>}
    </div>
  );
}

export default AppTablas;
