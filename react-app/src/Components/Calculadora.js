import React, { useState } from 'react';

const Calculadora = () => {
  const [resultado, setResultado] = useState();

  return (
    <div>
      <h2>Calculadora</h2>
      
      <h3>Resultado: {resultado}</h3>
    </div>
  );
};

export default Calculadora;
