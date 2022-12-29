import React from 'react'

const AddTodo = () => {
  return (
    <div className='add-todo-wrapper'>
      <h4>Add to list</h4>
      <div className='add-todo-container'>
        <input type="text" />
        <div className='add-btn'>
          <div>&#43;</div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo
