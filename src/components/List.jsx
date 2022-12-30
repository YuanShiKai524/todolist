import React from 'react'
import Item from './Item'

const List = ({ todoList }) => {
  return (
    <div className='todo-list-container'>
      <ul>
        {
          todoList.map((todo) => (
            <Item todo={todo} key={todo.id} />
          ))
        }
      </ul>
    </div>
  )
}

export default List
