import React, { useRef, useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
// import Todo from "../components/todo/Todo";

function TodoList() {
  const [inputs, setInputs] = useState({
    title: "", //제목
    content: "" //내용
  });

  const { title, content } = inputs; // 비구조화 할당을 통해 값 추출
  const onChange = e => {
    const { name, value } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트를 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: true
    },

    {
      id: 2,
      title: "리액트를 연습하기",
      content: "리액트 연습을 해봅시다.",
      isDone: false
    }
  ]);
  console.log(todos)

  const nextId = useRef(3);

  const onCreate = () => {
    const todo = {
      id: nextId.current,
      title,
      content,
      isDone: false
    };
    
    setTodos([...todos, todo]);
    
    setInputs({
      title: "",
      content: ""
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(todos.map(
      todo => todo.id === id? 
      {...todo, isDone: !todo.isDone} : todo
    ));
  };
  // map => 기존 배열을 통해 새로운 배열을 만들어내는 함수 
  // id 비교 => 넘겨 받은 id 와 기존 todos 에 있는 id 와 비교.
  // id 가 같다면 => { ...todo } 를 이용하여 기존 객체를 복사. 
  //그리고 { ...todo, isDone: !todo.isDone } 을 이용하여 기존 객체의 isDone 을 한번 뒤집어 토글해준 값으로 덮어씌움.
  // id 가 다르다면 => 아무런 변화도 주지 않음.
  
  return (
    <Layout>
      <Header />
      <Form
        title={title}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
      />
      <List todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </Layout>
  );
}

export default TodoList;
