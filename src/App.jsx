import { DragDropContext} from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const Bienvenida=[
  {
    id:1,
    title:"Bienvenido a la agenda todo",
    complete:false
  },

];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const inicialStateTodos=JSON.parse(localStorage.getItem("todos")) || Bienvenida;
const App = () => {
  const [todos,setTodos]=useState(inicialStateTodos)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
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

  const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };
  return (
    <div
      className="
      bg-[url('./assets/images/bg-mobile-light.jpg')] 
      bg-contain bg-no-repeat bg-gray-300 min-h-screen
      dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
      transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')
      md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg') "
    >
      <Header/>

      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
       
        <TodoCreate createTodo={createTodo}/>
        
        {/* TodoList (TodoItem) TodoUpdate & TodoDelete*/} 
        <DragDropContext onDragEnd={handleDragEnd}>       
        <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </DragDropContext>
        <TodoComputed computedItemslef={computedItemslef} clearComplete={clearComplete}/> 

        <TodoFilter changeFilters={changeFilters} filter={filter}/>
      </main>
        <p className="text-center mt-8 dark:text-gray-400 transition-all duration-1000">
          Drag and drop to render list
        </p>
    </div>
  );
};

export default App;
