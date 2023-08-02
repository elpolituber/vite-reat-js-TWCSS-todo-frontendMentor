import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const inicialStateTodos=[
  {
    id:1,
    title:"al gym",
    complete:true
  },
  {
    id:2,
    title:"completar curso",
    complete:false
  },
  {
    id:3,
    title:"Meditar 10 minutos",
    complete:true
  }
]

const App = () => {
  const [todos,setTodos]=useState(inicialStateTodos)

  const createTodo=(title)=>{
    const newTodo={
      id: Date.now(),
      title,
      complete:false
    }
    setTodos([...todos,newTodo]);
  }
  const updateTodo=(id)=>{
    setTodos(todos.map(todo=>todo.id===id ? {...todo,complete: !todo.complete}:todo ))
  }
  const removeTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id !== id));
  }
  
  const computedItemslef=todos.filter((todo)=>!todo.complete).length

  const clearComplete=()=>{
    setTodos(todos.filter((todo)=>!todo.complete)) 
  }

  const[filter,setfilter]=useState('all')
  
  const filterTodos=()=>{
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todos)=>!todos.complete)
      case "complete":
        return todos.filter((todos)=>todos.complete);
      default:
        return todos;
    }
  }

  const changeFilters=(filter)=>setfilter(filter)

  return (
    <div
      className="
      bg-[url('./assets/images/bg-mobile-light.jpg')] 
      bg-contain bg-no-repeat bg-gray-300 min-h-screen"
    >
      <Header/>

      <main className="container mx-auto mt-8 px-4">
       
        <TodoCreate createTodo={createTodo}/>
        
        {/* TodoList (TodoItem) TodoUpdate & TodoDelete*/}        
        <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
        
        <TodoComputed computedItemslef={computedItemslef} clearComplete={clearComplete}/> 

        <TodoFilter changeFilters={changeFilters} filter={filter}/>
      </main>
        <p className="text-center mt-8">
          Drag and drop to render list
        </p>
    </div>
  );
};

export default App;
