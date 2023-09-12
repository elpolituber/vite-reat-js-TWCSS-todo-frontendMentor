const TodoComputed = ({computedItemslef,clearComplete}) => { 
    return (
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md  dark:bg-gray-800 transition-all duration-1000">
          <span className="text-gray-400">{computedItemslef} items left</span>
          <button className="text-gray-400" onClick={clearComplete}>clear complete</button>
        </section>
    )
 }
 export default TodoComputed