import React, { useContext } from 'react'
import { todoListContext } from '../App'

const MoveDoneToEnd = ({ todos, _switch }) => {

  // 從todoListContext獲取sort方法
  const { changeSwitch } = useContext(todoListContext)

  // 創建一個控制switch(move done to end)開關的函數
  const switchHandler = () => {
    if (todos.length === 0) return;
    else {
      changeSwitch(!_switch)
    }
  }

  return (
    <div className='move-to-end-container'>
      <h6>Move done things to end?</h6>
      <div className={_switch ? 'switch-wrapper-on' : 'switch-wrapper'} onClick={switchHandler}>
        <div className={_switch ? 'switch-on' : 'switch'}></div>
      </div>
    </div>
  )
}

export default MoveDoneToEnd
