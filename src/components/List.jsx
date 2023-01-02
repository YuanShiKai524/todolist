import React, { useEffect, useRef, useState } from 'react'
import Item from './Item'

const List = ({ todos }) => {

  // 此state用於保存每次傳進來的(前一次)todos的長度(也就是todo的數量)
  const [todosLength, setTodosLength] = useState(todos.length)

  // 創建todo list container(div)的 ref容器 (因為滾動條是在todoListContainer上，因此需取得todoListContainer的節點去操作滾動條)
  const todoListContainerRef = useRef()
  // 獲取節點(div node)
  const todoListContainer = todoListContainerRef.current
  // 創建展示todo列表部分 (ul)的 ref容器，以獲取整個列表的總高度
  const ulRef = useRef()

  useEffect(() => {
    // 判斷todos中的todo數量是否有增加，若有增加，則將列表滾動至最下方
    if (todos.length > todosLength) {
      todoListContainer.scrollTo({top: ulRef.current.offsetHeight, behavior: "smooth"})
    }
    // todos長度若有變動，則更新todos的長度(todo的數量)
    setTodosLength(todos.length)
  }, [todos.length])

  return (
    <div className='todo-list-container' ref={todoListContainerRef}>
      <ul ref={ulRef}>
        {
          todos.map((todo) => (
            <Item todo={todo} key={todo.id} />
          ))
        }
      </ul>
    </div>
  )
}

export default List
