import React from 'react'
import Checkbox from './Checkbox'

const Item = ({ todo }) => {
  return (
    <li className='item'>
      <Checkbox todo={todo} />
      <div className={todo.hasDone ? 'todo-content-done' : 'todo-content'}>{todo.content}</div>
      <div className='delete-btn'>&times;</div>
    </li>
    // <ul>
    //   <li className='item'>
    //     <Checkbox checked />
    //     <div className='todo-content-done'>Learn React.js</div>
    //     <div className='delete-btn'>&times;</div>
    //   </li>
    //   <li className='item'>
    //     <Checkbox />
    //     <div className='todo-content'>Learn Golang</div>
    //     <div className='delete-btn'>&times;</div></li>
    //   <li className='item'>
    //     <Checkbox checked />
    //     <div className='todo-content-done'>Learn Docker</div>
    //     <div className='delete-btn'>&times;</div></li>
    //   <li className='item'>
    //     <Checkbox />
    //     <div className='todo-content'>Learn Something else</div>
    //     <div className='delete-btn'>&times;</div></li>
    //   <li className='item'>
    //     <Checkbox checked />
    //     <div className='todo-content-done'>Learn React.js</div>
    //     <div className='delete-btn'>&times;</div></li>
    //   <li className='item'>
    //     <Checkbox />
    //     <div className='todo-content'>Learn React.js</div>
    //     <div className='delete-btn'>&times;</div></li>
    // </ul>
  )
}

export default Item
