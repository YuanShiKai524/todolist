import React from 'react'
import InitTodoList from './InitTodoList'
import Progress from './Progress'
import List from './List'

const Main = ({ updateTodos, todos }) => {
  return (
    <div className='main'>
      {
        todos.length === 0 ?
        <InitTodoList /> :
        <>
          <Progress />
          <List updateTodos={updateTodos} todos={todos} />
        </>
      }
    </div>
  )
}

export default Main
