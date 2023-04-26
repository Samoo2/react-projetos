import Relogio from "./Components/Relogio";
import Letreiro from "./Components/Letreiro";
import ContadorPessoas from "./Components/ContadorPessoas";

function App() {
  return (
    <div>
      <h2> Aula 01</h2>
        <Relogio />
        <div className="letreiro"  style={{height: "50px"}}> 
        <Letreiro />
        </div>
      <h2> Aula 02</h2>
        <ContadorPessoas />
    </div>
  );
}

export default App;
