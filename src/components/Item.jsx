import React from 'react'
import Checkbox from './Checkbox'

const Item = ({ todo, updateTodos }) => {
  return (
    <li className='item'>
      <Checkbox todo={todo} updateTodos={updateTodos} />
      <div className={todo.hasDone ? 'todo-content-done' : 'todo-content'}>{todo.content}</div>
      <div className='delete-btn'>&times;</div>
    </li>
  )
}

export default Item
