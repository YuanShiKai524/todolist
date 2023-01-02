import React, { useRef, useContext } from 'react'
import { TodoListContext } from '../App'

const AddTodo = ({ Todo }) => {

  // 從todoListContext獲取updateTodos方法
  const { updateTodos } = useContext(TodoListContext)

  // 定義input輸入框的ref容器
  const inputRef = useRef()

  // 定義新增todo項目的函數
  const addTodo = () => {
    // 判斷輸入框是否為空
    if (inputRef.current.value.trim() === '') {
      alert('輸入框不可為空，請重新輸入')
    } else {
      const newTodo = new Todo(inputRef.current.value)
      updateTodos(newTodo);
    }
    inputRef.current.value = ''
  }

  return (
    <div className='add-todo-wrapper'>
      <h4>Add to list</h4>
      <div className='add-todo-container'>
        <input type="text" placeholder='e.g. Learn React' ref={inputRef} />
        <div className='add-btn' onClick={addTodo}>
          <div>&#43;</div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo
