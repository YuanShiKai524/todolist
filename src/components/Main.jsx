import React from 'react'
import InitTodoList from './InitTodoList'
import Progress from './Progress'
import List from './List'

const Main = ({ todoList }) => {
  return (
    <div className='main'>
      {
        todoList.length === 0 ?
        <InitTodoList /> :
        <>
          <Progress todoList={todoList} />
          <List todoList={todoList} />
        </>
      }
    </div>
  )
}

export default Main
