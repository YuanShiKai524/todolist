import React from 'react'

const Progress = ({ todos }) => {

  // 先取得已完成事項的todos
  const testedTodos = todos.filter( todo => (todo.hasDone === true))
  // 已完成事項的數量
  const numberOfDone = testedTodos.length
  // todos總數量(包括未完成與已完成)
  const numberOfTodos = todos.length
  // 已完成進度佔比
  const donePercent = Math.round(numberOfDone / numberOfTodos * 100)

  return (
    <div className='progress-container'>
      <div className='progress-percent'>{donePercent + '%'}</div>
      <div className='progressbar-background'>
        <div className='progressbar-done' style={{width: `${donePercent}%`}}></div>
      </div>
    </div>
  )
}

export default Progress
