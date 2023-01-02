import React, { useContext, useEffect, useState } from 'react'
import { todoListContext } from '../App'

const MoveDoneToEnd = ({ todos }) => {

  // 從todoListContext獲取sort方法
  const { sort } = useContext(todoListContext)

  // 管理switch開關的狀態(由於命名會與關鍵字switch衝突，因此前面加上底線)
  const [_switch, setSwitch] = useState(false)

  // 監測每次todos有變化時，用哪種排序的方式
  useEffect(() => {
    if (todos.length === 0) setSwitch(false)
    _switch ? sort(true) : sort(false)
  }, [])

  // 創建一個控制switch(move done to end開關)的函數
  const switchHandler = () => {
    if (todos.length === 0) return;
    else {
      sort(!_switch)
      setSwitch(!_switch)
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
