import React from 'react';
import { useParams } from 'react-router-dom';

const DetalleCalificacion = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalle de la Calificación #{id}</h2>

      
    </div>
  );
};

export default DetalleCalificacion;
