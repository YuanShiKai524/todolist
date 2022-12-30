import React, { useState } from 'react'

const AddTodo = ({ updateTotoList }) => {

  // 建立一個todo的類 (class)
  class Todo {
    // 構造函數定義需要的初始變數
    constructor(content, done) {
      this.content = content
      this.done = done
    }
  }

  // 保存用戶輸入的待辦事項的內容
  const [todo, setTodo] = useState("")

  // 定義新增todo項目的函數
  const addTodo = () => {
    const newTodo = new Todo(todo, false)
    updateTotoList(newTodo)
  }

  return (
    <div className='add-todo-wrapper'>
      <h4>Add to list</h4>
      <div className='add-todo-container'>
        <input type="text" onChange={ event => setTodo(event.target.value) } />
        <div className='add-btn' onClick={addTodo}>
          <div>&#43;</div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo
