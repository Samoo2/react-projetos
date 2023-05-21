import Relogio from "./Components/Relogio";
import Letreiro from "./Components/Letreiro";
import ContadorPessoas from "./Components/ContadorPessoas";
import Profile from "./Components/Profile";
import Gallery from "./Components/Gallery";
import Avatar from "./Components/Avatar";
import TodoList from "./Components/TodoList";
import Toolbar from "./Components/Toolbar";
import Gallerys from "./Components/Gallerys";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import Form2 from "./Components/Form2";
import Form3 from "./Components/Form3";
import List  from "./Components/List";
import List2  from "./Components/List2";
import MovingDot  from "./Components/MovingDot";
import ShapeEditor  from "./Components/ShapeEditor";

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
        <Counter />
        <List />
        <List2 />
        <Form />
        <Form2 />
        <Form3 />
        <MovingDot />
        <ShapeEditor />

    </div>
  );
}

export default App;
