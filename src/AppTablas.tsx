import React, { useState } from 'react';
import './AppTablas.css';

const AppTablas: React.FC = () => {
  const uvData = [
    { voltage: '0V', description: 'Radiación UV-B y UV-A muy baja' },
    { voltage: '0.1V', description: 'Radiación UV-B y UV-A baja' },
    { voltage: '0.2V', description: 'Radiación UV-B y UV-A moderada' },
    { voltage: '0.3V', description: 'Radiación UV-B y UV-A alta' },
    { voltage: '0.4V', description: 'Radiación UV-B y UV-A muy alta' },
    { voltage: '0.5V y superior', description: 'Radiación UV-B y UV-A extremadamente alta' }
  ];

  const [recommendation, setRecommendation] = useState<string>('');

  const handleCardClick = (description: string) => {
    // Definir recomendaciones según la descripción de la radiación UV
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
    <div className="container">
      <h1>Radiación UV en Tiempo Real</h1>
      <div className="card-container">
        {uvData.map((data, index) => (
          <div key={index} className="card" onClick={() => handleCardClick(data.description)}>
            <p><strong>Voltaje de salida (V):</strong> {data.voltage}</p>
            <p><strong>Nivel de radiación UV:</strong> {data.description}</p>
          </div>
        ))}
      </div>
      {recommendation && <p className="recommendation">{recommendation}</p>}
    </div>
  );
}

export default AppTablas;
