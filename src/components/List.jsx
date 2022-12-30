import React from 'react'
import Item from './Item'

const List = ({ updateTodos, todos }) => {
  return (
    <div className='todo-list-container'>
      <ul>
        {
          todos.map((todo) => (
            <Item todo={todo} updateTodos={updateTodos} key={todo.id} />
          ))
        }
      </ul>
    </div>
  )
}

export default List
