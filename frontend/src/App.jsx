// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";


//DEployment
//render networks for backend
//vercel for frontend
function App() {
  const [todos, setTodos]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/todo")
    .then(async(res)=>{
      const json = await res.json();
      setTodos(json.todos);
    })
  },[todos])
  
  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
