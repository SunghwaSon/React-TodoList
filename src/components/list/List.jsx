import React from "react";
import "./style.css";

function Todo( ) {
  return (
  <div className='list-container'>
        <h2 class="list-title">Working.. 🔥</h2>
        {/* 추가하기 눌렀을 때 들어와야 하는 곳 */}
        <h2 class="list-title">Done..! 🎉</h2>
        {/* 완료버튼 눌렀을 때 들어와야 하는 곳 */}
  </div> 
  )
}
export default Todo;