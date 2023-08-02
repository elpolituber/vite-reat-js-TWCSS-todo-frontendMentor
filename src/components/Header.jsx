import IconsMoon from "./icons/IconsMoon";

const Header = () => { 
    return(
        <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
        <h1 className="uppercase text-white pt-8 px-4 text-2xl font-bold tracking-[0.3em] ">Todo</h1>
        <button><IconsMoon fill="#000"/></button>
        </div> 
      </header>
    )
 }

 export default Header