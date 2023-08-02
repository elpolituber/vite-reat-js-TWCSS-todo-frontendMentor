const TodoFilter = ({changeFilters, filter}) => {
  return (
    <section className="container mx-auto  mt-8 ">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
        <button className={`${filter=== "all" ?"text-blue-600 hover:text-gray-600":"text-gray-400 hover:text-blue-600"}`} 
        onClick={()=>changeFilters("all")}>All</button>
        <button className={`${filter=== "active" ?"text-blue-600 hover:text-gray-600":"text-gray-400 hover:text-blue-600"}`} 
        onClick={()=>changeFilters("active")}>Active</button>
        <button className={`${filter=== "complete" ?"text-blue-600 hover:text-gray-600":"text-gray-400 hover:text-blue-600"}`} 
        onClick={()=>changeFilters("complete")}>Complete</button>
      </div>
    </section>
  );
};

export default TodoFilter;