import TodoItem from "./TodoItem";

const TodoList=({todos ,removeTodo,updateTodo})=>{
    return(
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
          
          {todos.map((todos)=> {
             return (<TodoItem  key={todos.id} todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>)
          })}
          
        </div>
    )
}
export default TodoList