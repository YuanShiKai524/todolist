import { createContext, useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Main from './components/Main';
import MoveDoneToEnd from "./components/MoveDoneToEnd";
import AddTodo from "./components/AddTodo";

// 創建傳遞todoList的context
export const TodoListContext = createContext();

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
    // 新增todo的方法
    addTodo(todo) {
      setTodos(sortByTime(_switch, [...todos, todo]))
    }
    // 移除todo的方法
    removeTodo(todo) {
      // 如果數組只剩最後一個todo並且被要求刪除，則將move done to end的開關關閉
      if (todos.length === 1) setSwitch(false)
      // 取得欲刪除的todo在todos中的位置
      const index = todos.indexOf(todo)
      // 刪除該todo
      todos.splice(index, 1)
      // 更新todos狀態成刪除後的todos
      setTodos([...todos])
    }
    // 更新todos的方法(用於當todo被勾選已完成或取消勾選時)
    updateTodos() {
      setTodos(sortByTime(_switch, [...todos]))
    }

    // 切換(move done to end)開關，並排序todos的方法
    changeSwitch(boolean) { // 如果參數布林值(boolean)為false，則表示move done to end開關(switch)排序功能關閉，反之，true則為排序功能開啟。
      // 切換move done to end開關
      setSwitch(boolean)
      // 利用sortByTime函數取得照時間排序好的todos，以更新todos
      setTodos(sortByTime(boolean, todos))
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

  // move done to end開關的狀態(由於命名會與關鍵字switch衝突，因此前面加上底線)
  const [_switch, setSwitch] = useState(false)

  // 此函數用於獲取每個todo的time屬性，並且將它們進行按時間的排序
  const sortByTime = (switchFlag, todos) => {
    // 創建一個保存按時間排序好的容器數組
    const sortedArr = []
    // 從todos將各別的time屬性取出來變成一個數組
    const times = todos.map( todo => todo.time )
    // 照時間前後排序time數組
    times.sort((a, b) => a - b)
    // 用巢狀 for loop將時間與每個todo比對，並進行先後順序的排列，以獲得按時間排序的todos
    for(let i = 0; i < times.length; i++) {
      for(let j = 0; j < todos.length; j++) {
        if (times[i] === todos[j].time) {
          sortedArr.push(todos[j])
        }
      }
    }
    if (switchFlag) {
      /* 若move done to end開關為開，依照未完成、已完成區分，將已完成事項都往列表下方移動(move done to end)，未完成事項則留在上方部分 */
      // 將未完成事項取出，整理成一個數組
      const doingTodos = sortedArr.filter( todo => todo.hasDone === false )
      // 將已完成事項取出，整理成一個數組
      const doneTodos = sortedArr.filter( todo => todo.hasDone === true )
      // 最後將未完成事項與已完成事項的兩個數組合併，並返回合併後的新todos
      return doingTodos.concat(doneTodos)
    } else {
      // 返回排序好的數組
      return sortedArr
    }
  }

  return (
    <div className="app">
      <Header />
      <TodoListContext.Provider value={todoList}>
        <Main todos={todos} />
        <MoveDoneToEnd todos={todos} _switch={_switch} />
        <AddTodo Todo={Todo} />
      </TodoListContext.Provider>
    </div>
  );
}

export default App;
