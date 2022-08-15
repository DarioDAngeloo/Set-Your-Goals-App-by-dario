import "./App.css";
import Logo from "./components/Logo";
import ListOfTask from "./components/ListOfTask";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="principal-tasks">
        <h1>My tasks</h1>
        <ListOfTask />
      </div>
    </div>
  );
}

export default App;
