import React, { useContext } from 'react'
import { todoListContext } from '../App'
import Checkbox from './Checkbox'

const Item = ({ todo }) => {

  // 從todoListContext獲取updateTodos方法
  const { updateTodos } = useContext(todoListContext)

  return (
    <li className='item'>
      <Checkbox todo={todo} updateTodos={updateTodos} />
      <div className={todo.hasDone ? 'todo-content-done' : 'todo-content'}>{todo.content}</div>
      <div className='delete-btn' onClick={() => updateTodos(todo, 'remove')}>&times;</div>
    </li>
  )
}

export default Item
