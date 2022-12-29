import Header from "./components/Header";
import Main from './components/Main';
import MoveDoneToEnd from "./components/MoveDoneToEnd";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <MoveDoneToEnd />
      <AddTodo />
    </div>
  );
}

export default App;
