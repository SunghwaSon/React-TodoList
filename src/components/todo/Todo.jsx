import React from "react";
import "./style.css";

function Todo ({ todo, onRemove }) {
  return(
    <>
    <div className='list-wrapper'>
      <div className='todo-container'>
          <div>
            <h2 className='todo-title'>{todo.title}</h2>
            <div className='todo-content'>{todo.content}</div>
          </div>
          <div className='button-set'>
            <button onClick={() => onRemove(todo.id)} className="todo-delete-button button">삭제하기</button>
            <button className="todo-complete-button button">완료</button>
          </div>
      </div>
    </div>  
    </>
  );
}

function List({ todos, onRemove}) {
  return (
    <div>
      {todos.map(todo => (
        <Todo 
          todo={todo} 
          key={todo.id} 
          onRemove={onRemove} 
          />
      ))}
    </div>
  );
}

export default List;
