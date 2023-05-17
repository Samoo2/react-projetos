import Relogio from "./Components/Relogio";
import Letreiro from "./Components/Letreiro";
import ContadorPessoas from "./Components/ContadorPessoas";
import Profile from "./Components/Profile";
import Gallery from "./Components/Gallery";
import Avatar from "./Components/Avatar";
import TodoList from "./Components/TodoList";
import Toolbar from "./Components/Toolbar";
import Gallerys from "./Components/Gallerys";

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
       <h2> Aula 03 </h2>
      <Profile />
      <Gallery />
      <Avatar />
      <TodoList />
       <h2> Aula 04</h2>
        <Toolbar />
        <Gallerys />
    </div>
  );
}

export default App;
