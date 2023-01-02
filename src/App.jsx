import { createContext, useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Main from './components/Main';
import MoveDoneToEnd from "./components/MoveDoneToEnd";
import AddTodo from "./components/AddTodo";

// 創建傳遞todoList的context
export const todoListContext = createContext();

function App() {

  // 建立一個todo的類 (class)
  class Todo {
    // 構造函數定義需要的初始變數
    constructor(content) {
      this.id = nanoid()
      this.content = content
      this.hasDone = false
      this.time = new Date().getTime()
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
    // 排序todos的方法
    sort(boolean) {
      // 如果參數布林值(boolean)為false，則表示switch開關(move done to end)排序功能未開啟，反之，true則為排序功能開啟。
      switch (boolean) {
        // 依照未完成、已完成區分，將已完成事項都往列表下方移動(move done to end)，未完成事項則照時間順序排列在上方部分
        case true:
          // 將未完成事項取出，整理成一個數組
          const doingTodos = todos.filter( todo => todo.hasDone === false )
          // 將已完成事項取出，整理成一個數組
          const doneTodos = todos.filter( todo => todo.hasDone === true )
          // 最後將未完成事項與已完成事項的兩個數組合併，並用setTodos更新todos
          const movedDoneToEndTodos = doingTodos.concat(doneTodos)
          setTodos(movedDoneToEndTodos)
          break;

        // 預設為參數布林值(false)，表示move done to end開關未開啟，不使用move done to end之排序功能
        default:
          // 創建一個以添加時間之順序去排序的數組
          // const sortedByTimeTodos = []
          setTodos([...todos])
          break;
      }
    }

    // 獲取已完成事項數量的方法
    get getDoneNumber() {
      return todos.filter( todo => (todo.hasDone === true)).length
    }
  }

  // 創建一個TodoList類別的實例對象
  const todoList = new TodoList()

  // 用於維護todo list的狀態
  const [todos, setTodos] = useState(todoList.todos)

  return (
    <div className="app">
      <Header />
      <todoListContext.Provider value={todoList}>
        <Main todos={todos} />
        <MoveDoneToEnd todos={todos} />
        <AddTodo Todo={Todo} />
      </todoListContext.Provider>
    </div>
  );
}

export default App;
