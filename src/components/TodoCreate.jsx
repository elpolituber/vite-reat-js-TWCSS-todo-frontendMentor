import { useState } from "react";

const TodoCreate=({createTodo})=>{
  
  const [title,setTitle]=useState("")

  const handleSubmitAddTodo=(e)=>{
    e.preventDefault()
    if(!title.trim()){
      return setTitle("")
    }
    createTodo(title)
    setTitle("")
    
  }
  return (
      <form onSubmit={handleSubmitAddTodo} className=" mt-8 bg-white 
      rounded-md overflow-hidden 
      py-2 flex gap-4 items-center px-4">
        <span className="rounded-full border-2 inline-block h-5 w-5"></span>
        <input 
        className="w-full text-gray-400 outline-none" 
        type="text" 
        placeholder="Create a new todo..." 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>
      </form>
  );
}
export default TodoCreate