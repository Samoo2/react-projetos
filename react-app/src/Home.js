import React from "react";
import { Link } from "react-router-dom";


const Home = () =>{
    return (
        <div>
            <h1> Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01"> Atividade 01</Link>
                    </li>
                    <li>
                        <Link to="/Atv02"> Contador de Pessoas </Link>
                    </li>
                    <li>
                        <Link to="/Atv03"> Atividade 03</Link>
                    </li>
                    <li>
                        <Link to="/Atv04"> Atividade 04</Link>
                    </li>
                    <li>
                        <Link to="/Atv05"> Atividade 05</Link>
                    </li>
                    <li>
                        <Link to="/Atv06"> Calculadora </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
