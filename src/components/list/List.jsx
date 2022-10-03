import React from "react";
import Todo from '../todo/Todo';
import "./style.css";

function List( { todos, onRemove }) {
  return (
  <div className='list-container'>
        <h2 class="list-title">Working.. 🔥</h2>   
    <div className='list-wrapper'>
      {todos.map(todo => (
        <Todo 
          todo={todo} 
          key={todo.id} 
          onRemove={onRemove} 
          />
      ))}
    </div>
        <h2 class="list-title">Done..! 🎉</h2>
        <div className='list-wrapper'>
          
        </div>
        {/* 완료버튼 눌렀을 때 들어와야 하는 곳 */}
  </div> 
  )}

export default List;