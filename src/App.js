import React,{useState,useEffect} from 'react';
import {Container}from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Todos from "./Components/Todos"
import TodoForm from "./Components/TodoForm"

const App=()=>{
  const [todos,setTodos]= useState([]) 

  //LocalStorage
  useEffect(()=>{
    const localTodos= localStorage.getItem("todos");
    console.log({localStorage});
    if(localTodos){
      setTodos(JSON.parse(localTodos));
    }
  },[])

  //addTodos
  const addTodos = async todo =>{
    setTodos([...todos,todo])
  }

  //useEffect to save to LocalStorage
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  //markComplete
  const markComplete=id=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  return(
    <Container fluid>
    <h1>Todos with local storage</h1>
    <Todos todos={todos} markComplete={markComplete}/>
    <TodoForm addTodos={addTodos}/>
  </Container>
  )
}

export default App;
