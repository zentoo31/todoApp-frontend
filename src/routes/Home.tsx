import { Link } from "react-router-dom"
import { LuListTodo } from "react-icons/lu";

function Home() {
  return (
    <main className="m-2 flex flex-col gap-5 h-full animate-fade-in">
        <header className="m-5 gap-5 flex flex-col md:flex-row items-center justify-between border-b-2 pb-4">
            <Link className="text-2xl font-bold flex flex-row gap-2 items-center" to={"/home"}>
                <LuListTodo />
                <h1>TODOapp</h1>
            </Link>
            <li className="flex flex-row gap-4">
                <Link to={"/login"} className="hover:text-blue-500">Iniciar Sesión</Link>
                <Link to={"/register"} className="hover:text-blue-500">Registrarse</Link>
            </li>
        </header>

        <section className="flex flex-col md:flex-row gap-5 justify-center items-center m-2 ">
            <div className="max-w-md">
                <h1 className="text-4xl">Bienvenido a</h1>
                <h1 className="text-6xl font-bold text-blue-400 mb-4 animate-slide-in-left">TODOapp</h1>
                <p>"Organiza tu día de forma fácil y eficiente con nuestra aplicación de lista de tareas. Crea, edita y marca tareas como completadas con una interfaz intuitiva y moderna. ¡Empieza a gestionar tu tiempo como un profesional hoy mismo!"</p>

            </div>
            <img src="/src/assets/todo-image.jpg" alt="" />
        </section>

        <footer className="gap-5 flex flex-col md:flex-row items-center justify-center w-full text-center text-2xl mt-20">
            <h1 className="flex flex-row gap-2 items-center">Web desarrollada por <a href="https://github.com/zentoo31" className="text-blue-500 hover:text-blue-400 flex flex-row gap-2 items-center">zentoo31 <img src="https://github.com/zentoo31.png" className="rounded-full w-10 h-10"/></a> </h1>
        </footer>
        
    </main>
  )
}

export default Home