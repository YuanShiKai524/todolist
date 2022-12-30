import React from 'react'

const Checkbox = ({ todo, updateTodos }) => {

  // 定義一個函數，處理是否被用戶勾選
  const checkHandler = () => {
    // 先更改hasDone的布林值
    todo.updateDone(todo)
    // 再更新todos
    updateTodos(todo)
  }

  return (
    <div className={todo.hasDone === true ? 'checkbox-container-checked' : 'checkbox-container'} onClick={checkHandler}>
      <div className='checkmark'></div>
    </div>
  )
}

export default Checkbox
