import React from 'react'
import Progress from './Progress'

const Main = () => {
  return (
    <div className='main'>
      <Progress />
      <div className='todo-list-container'>
        {/* <h3>List</h3> */}
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </div>
    </div>
  )
}

export default Main
