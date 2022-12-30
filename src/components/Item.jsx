import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Checkbox from './Checkbox'

const Item = ({ todoList }) => {

  return (
    <ul>
      {
        todoList.map((todo) => (
          <li className='item' key={nanoid()}>
            <Checkbox checked={todo.done} />
            <div className='todo-content'>{todo.content}</div>
            <div className='delete-btn'>&times;</div>
          </li>
        ))
      }
    </ul>
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
