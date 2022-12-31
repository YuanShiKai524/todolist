import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Main from './components/Main';
import MoveDoneToEnd from "./components/MoveDoneToEnd";
import AddTodo from "./components/AddTodo";

function App() {

  // 建立一個todo的類 (class)
  class Todo {
    // 構造函數定義需要的初始變數
    constructor(content) {
      this.id = nanoid()
      this.content = content
      this.hasDone = false
    }
    // 該方法用於改變是否完成(hasDone)的布林值
    updateDone(todo) {
      this.hasDone = !todo.hasDone;
    }
  }

  // 建立TodoList的類
  class TodoList {
    constructor() {
      this.todos = []
    }
    // 更新todos的方法
    updateTodos(todo, action) {
      switch (action) {
        case 'remove':
          // 取得該todo在todos中的位置
          const index = todos.indexOf(todo)
          // 刪除該todo
          todos.splice(index, 1)
          // 更新todos狀態成刪除後的todos
          setTodos([...todos])
          break;

        // 由於更新todo跟新增todo的方法差不多，所以用一個判斷把它們都寫在default
        default:
          // 若todos內尚未有接收到的todo，則新增此todo，若已有重複id的todo存在，則重新渲染todos數組，以更新該todo的hasDone布林值
          todos.indexOf(todo) === -1 ?
          setTodos([...todos, todo]) :
          setTodos([...todos])
      }
    }
  }

  // 創建一個TodoList類別的實例對象
  const todoList = new TodoList()

  // 用於維護todo list的狀態
  const [todos, setTodos] = useState(todoList.todos)

  return (
    <div className="app">
      <Header />
      <Main updateTodos={todoList.updateTodos} todos={todos} />
      <MoveDoneToEnd />
      <AddTodo updateTodos={todoList.updateTodos} Todo={Todo} />
    </div>
  );
}

export default App;
