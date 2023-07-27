import CrossIcons from "./components/icons/CrossIcons";
import MoonIcon from "./components/icons/MoonIcons";
const App = () => {
  return (
    <div
      className="
      bg-[url('./assets/images/bg-mobile-light.jpg')] 
      bg-contain bg-no-repeat bg-gray-300 min-h-screen"
    >
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
        <h1 className="uppercase text-white pt-8 px-4 text-2xl font-bold tracking-[0.3em] ">Todo</h1>
        <button><MoonIcon fill="#000"/></button>
        </div>
        <form className=" mt-8 bg-white 
        rounded-md overflow-hidden 
        py-2 flex gap-4 items-center px-4">
          <span className="rounded-full border-2 inline-block h-5 w-5"></span>
          <input 
          className="w-full text-gray-400 outline-none" 
          type="text" 
          placeholder="Create a new todo..." />
        </form>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md [&>article]:p-4">
        <article className="flex gap-4  border-b-gray-400 border-b ">
          <button className="flex-none rounded-full border-2 inline-block h-5 w-5"></button>
          <p className="text-gray-600 grow">Complete online javascript</p>
          <button className="flex-none">
            <CrossIcons/>
          </button>
        </article>
        <article className="flex gap-4 border-b-gray-400 border-b ">
          <button className="flex-none rounded-full border-2 inline-block h-5 w-5"></button>
          <p className="text-gray-600 grow">Complete online javascript</p>
          <button className="flex-none">
            <CrossIcons/>
          </button>
        </article>
        <article className="flex gap-4 border-b-gray-400 border-b">
          <button className="flex-none rounded-full border-2 inline-block h-5 w-5"></button>
          <p className="text-gray-600 grow">Complete online javascript</p>
          <button className="flex-none">
            <CrossIcons/>
          </button>
        </article>
        <section className="py-4 px-4 flex justify-between">
          <span className="text-gray-400">5 items left</span>
          <button className="text-gray-400">clear complete</button>
        </section>
        </div>
      </main>
      <section className="container mx-auto  mt-8 px-4">
        <div  className="bg-white p-4 rounded-md flex justify-center gap-4">
        <button className="text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button  className="hover:text-blue-600">Complete</button>
        </div>
        
      </section>
      <p className="text-center mt-8">
        Drag and drop to render list
      </p>
    </div>
  );
};

export default App;
