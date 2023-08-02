import IconsCheck from "./icons/IconsCheck";
import IconsCross from "./icons/IconsCross";

const TodoItem = ({ todos,removeTodo,updateTodo }) => {
  
  const {id,title,complete}=todos
  
  return (
    <article className="flex gap-4  border-b-gray-400 border-b ">
      
      <button className={`h-5 w-5 flex-none rounded-full border-2 ${complete ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" : 
      "inline-block"}`} onClick={()=>updateTodo(id)}>
        {complete && <IconsCheck />}
      </button>
      <p className={`text-gray-600 grow ${complete && "line-through"}`}>{title}</p>
      <button className="flex-none" onClick={()=>removeTodo(id)}>
        <IconsCross />
      </button>
    </article>
  );
};
export default TodoItem