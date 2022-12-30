import React from 'react'
import Item from './Item'

const List = ({ todoList }) => {
  return (
    <div className='todo-list-container'>
      <Item todoList={todoList} />
    </div>
  )
}

export default List
