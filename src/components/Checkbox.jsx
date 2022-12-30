import React from 'react'

const Checkbox = ({ todo }) => {

  // 定義一個函數，處理是否被用戶勾選
  const checkHandler = () => {
    // 如果用setter操作的話
    // todo.updateDone = !todo.hasDone
    
    // 一般寫法
    
  }

  return (
    <div className={todo.hasDone === true ? 'checkbox-container-checked' : 'checkbox-container'} onClick={checkHandler}>
      <div className='checkmark'></div>
    </div>
  )
}

export default Checkbox
