import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative">
      <div className="h-[100vh] bg-cover bg-bottom" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1664262283559-88f48528d190?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30">
          <h1 className="text-4xl md:text-6xl font-bold fade-in">Hacemos tus momentos especiales</h1>
          <p className="text-lg md:text-2xl mt-4 fade-in">Arreglos personalizados con entrega</p>
          <button className="mt-6 bg-[#FF6F61] text-white py-3 px-6 rounded-full btn-hover fade-in">
            <NavLink to="/catalog">Ver arreglos</NavLink>
          </button>
          </div>
      </div>
    </main>
  );
}