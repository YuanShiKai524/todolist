import { useState } from "react";
import Header from "./components/Header";
import Main from './components/Main';
import MoveDoneToEnd from "./components/MoveDoneToEnd";
import AddTodo from "./components/AddTodo";

function App() {

  // 用於維護todo list的狀態
  const [todoList, setTodoList] = useState([])

  // 定義一個更新todo list的函數
  const updateTotoList = (todo) => {
    setTodoList([...todoList, todo])
  }

  return (
    <div className="app">
      <Header />
      <Main todoList={todoList} />
      <MoveDoneToEnd todoList={todoList} />
      <AddTodo updateTotoList={updateTotoList} />
    </div>
  );
}

export default App;
