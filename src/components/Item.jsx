import React, { useContext } from 'react'
import { TodoListContext } from '../App'
import Checkbox from './Checkbox'

const Item = ({ todo }) => {

  // 從TodoListContext獲取updateTodos、removeTodo方法
  const { updateTodos, removeTodo } = useContext(TodoListContext)

  return (
    <li className='item'>
      <Checkbox todo={todo} updateTodos={updateTodos} />
      <div className={todo.hasDone ? 'todo-content-done' : 'todo-content'}>{todo.content}</div>
      <div className='delete-btn' onClick={() => removeTodo(todo)}>&times;</div>
    </li>
  )
}

export default Item
