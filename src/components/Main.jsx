import React from 'react'
import InitTodoList from './InitTodoList'
import Progress from './Progress'
import List from './List'

const Main = ({ todos, updateTodos, getDoneNumber }) => {
  return (
    <div className='main'>
      {
        todos.length === 0 ?
        <InitTodoList /> :
        <>
          <Progress todos={todos} getDoneNumber={getDoneNumber} />
          <List todos={todos} updateTodos={updateTodos} />
        </>
      }
    </div>
  )
}

export default Main
