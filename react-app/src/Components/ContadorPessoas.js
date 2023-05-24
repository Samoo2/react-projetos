import React, { useState } from "react";

function ContadorHomens(props) {
  const [totalHomens, setTotalHomens] = useState(0);

  const handleTotalHomens = (value) => {
    setTotalHomens(totalHomens + value);
    props.onTotalPessoasChange(value);
  };

  return (
    <div>
      <h4>Homens</h4>
      <span>{totalHomens}</span>
      <button onClick={() => handleTotalHomens(1)}>+</button>
      <button onClick={() => handleTotalHomens(-1)}>-</button>
    </div>
  );
}

function ContadorMulheres(props) {
  const [totalMulheres, setTotalMulheres] = useState(0);

  const handleTotalMulheres = (value) => {
    setTotalMulheres(totalMulheres + value);
    props.onTotalPessoasChange(value);
  };

  return (
    <div>
      <h4>Mulheres</h4>
      <span>{totalMulheres}</span>
      <button onClick={() => handleTotalMulheres(1)}>+</button>
      <button onClick={() => handleTotalMulheres(-1)}>-</button>
    </div>
  );
}

function ContadorPessoas() {
  const [totalPessoas, setTotalPessoas] = useState(0);

  const handleTotalPessoas = (value) => {
    setTotalPessoas(totalPessoas + value);
  };

  return (
    <div>
      <h4>Total de pessoas: {totalPessoas}</h4>
      <ContadorHomens onTotalPessoasChange={handleTotalPessoas} />
      <ContadorMulheres onTotalPessoasChange={handleTotalPessoas} />
    </div>
  );
}

export default ContadorPessoas;
