import { useState } from "react";

export default function CounterAula5() {
  const [number, setNumber] = useState(1);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5)
          setNumber(n => n + 1)
          setNumber(3)
        }}
      >
        Increment Number
      </button>
    </>
  );
}