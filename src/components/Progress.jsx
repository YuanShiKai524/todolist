import React, { useContext } from 'react'
import { TodoListContext } from '../App'

const Progress = ({ todos }) => {

  // 從todoListContext獲取getDoneNumber方法
  const { getDoneNumber } = useContext(TodoListContext)

  // 計算完成率 (已完成事項數量 / todos中todo的總數量(包括未完成與已完成))，以四捨五入取至整數位
  const donePercent = Math.round(getDoneNumber / todos.length * 100)

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
