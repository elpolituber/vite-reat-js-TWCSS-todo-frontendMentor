import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvider) => (
        <div ref={droppableProvider.innerRef}
        {...droppableProvider.droppableProps} 
        className="bg-white rounded-t-md overflow-hidden [&>article]:p-4 mt-8 dark:bg-gray-800 transition-all duration-1000">
          {todos.map((todos,index) => (
              <Draggable 
              key={todos.id} 
              index={index}
              draggableId={`${todos.id}`}>
              {(draggableProvider)=>(
                <TodoItem
                ref={draggableProvider.innerRef}
                {...draggableProvider.draggableProps}
                {...draggableProvider.dragHandleProps}
                todos={todos}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
              )}
              
              </Draggable>
            )
          )}
          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default TodoList;
