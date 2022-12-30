import React, { useRef } from 'react'

const AddTodo = ({ updateTotoList }) => {

  // 建立一個todo的類 (class)
  class Todo {
    // 構造函數定義需要的初始變數
    constructor(content, done) {
      this.content = content
      this.done = done
    }
  }

  // 定義input輸入框的ref容器
  const inputRef = useRef()

  // 定義新增todo項目的函數
  const addTodo = () => {
    // 判斷輸入框是否為空
    if (inputRef.current.value.trim() === '') {
      alert('輸入框不可為空，請重新輸入')
    } else {
      const newTodo = new Todo(inputRef.current.value, false)
      updateTotoList(newTodo)
    }
    inputRef.current.value = ''
  }

  return (
    <div className='add-todo-wrapper'>
      <h4>Add to list</h4>
      <div className='add-todo-container'>
        <input type="text" ref={inputRef} />
        <div className='add-btn' onClick={addTodo}>
          <div>&#43;</div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo
