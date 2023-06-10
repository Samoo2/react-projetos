import React, { useState } from "react";

function ContadorPessoas() {
  const [totalHomens, setTotalHomens] = useState(0);
  const [totalMulheres, setTotalMulheres] = useState(0);

  const handleTotalHomens = (value) => {
    const newTotal = totalHomens + value;
    if (newTotal >= 0) {
      setTotalHomens(newTotal);
    }
  };

  const handleTotalMulheres = (value) => {
    const newTotal = totalMulheres + value;
    if (newTotal >= 0) {
      setTotalMulheres(newTotal);
    }
  };

  return (
    <div>
      <h4>Total de pessoas: {totalHomens + totalMulheres}</h4>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <img src="https://img.icons8.com/?size=512&id=21441&format=png" alt="Homens" height={200} />
          <h4>Homens: {totalHomens}</h4>
          <button onClick={() => handleTotalHomens(1)}>+</button>
          <button onClick={() => handleTotalHomens(-1)}>-</button>
        </div>
        <div>
          <img src="https://img.icons8.com/?size=512&id=gaDLspgb71QY&format=png" alt="Mulheres" height={200} />
          <h4>Mulheres: {totalMulheres}</h4>
          <button onClick={() => handleTotalMulheres(1)}>+</button>
          <button onClick={() => handleTotalMulheres(-1)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default ContadorPessoas;
