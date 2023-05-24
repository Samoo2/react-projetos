import {useState} from 'react';

export default function Calculadora() {

    const [resultado, setResultado] = useState(0);
    const [entrada, setEntrada] = useState('');

    const handleNumeroClick = (numero) => {
        setEntrada(entrada + numero);
    };

    const handleOpClick = (operacao) => {
        const opBasicas = ['+','-','*','/'];

        if (opBasicas.includes(entrada.slice(-1))) {
            return;
        }

        setEntrada(entrada + operacao);
    };

    const handleZerarClick = () => {
        setEntrada('');
        setResultado(0);
    }

    const handleIgualClick = () => {
        const opBasicas = ['+','-','*','/'];

        if (opBasicas.includes(entrada.slice(-1))) {
            return;
        }

        const resultadoFinal = eval(entrada);
        setResultado(resultadoFinal);
    }

    return (
        <>
            <h2> Calculadora</h2>
            <h3>{resultado}</h3>
            <input type="text" value={entrada} readOnly />
            <br />
            <button onClick={() => handleNumeroClick('0')}>0</button>
            <button onClick={() => handleNumeroClick('1')}>1</button>
            <button onClick={() => handleNumeroClick('2')}>2</button>
            <button onClick={() => handleNumeroClick('3')}>3</button>
            <button onClick={() => handleNumeroClick('4')}>4</button>
            <button onClick={() => handleNumeroClick('5')}>5</button>
            <button onClick={() => handleNumeroClick('6')}>6</button>
            <button onClick={() => handleNumeroClick('7')}>7</button>
            <button onClick={() => handleNumeroClick('8')}>8</button>
            <button onClick={() => handleNumeroClick('9')}>9</button>
            <br />
            <button onClick={() => handleOpClick('+')}>+</button>
            <button onClick={() => handleOpClick('-')}>-</button>
            <button onClick={() => handleOpClick('*')}>*</button>
            <button onClick={() => handleOpClick('/')}>/</button>
            <br />
            <button onClick={ handleZerarClick}>ac</button>
            <button onClick={handleIgualClick}>=</button>

        
        </>
    );
}
