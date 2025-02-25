import { NavLink, useLocation } from 'react-router-dom';
import LOGO from '/images/logo.png';

export default function Header() {

  const location =  useLocation();
  const isHome = location.pathname === "/"

  return (
    <header style={ location.pathname === "/" ? { backgroundColor: "transparent"} : {backgroundColor: "#A2918B"} } className={"flex justify-between items-center p-4 fixed w-screen top-0 z-10"}>
      <img src={LOGO} alt='ThanGive Logo' style={{ height: "50px"}}   />
      <nav className="hidden md:flex space-x-6 font-bold">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-black underline" : "text-white hover:underline"}>Inicio</NavLink>
        <NavLink to="/catalog" className={({ isActive }) => isActive ? "text-black underline" : "text-white hover:underline"}>Catálogo</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-black underline" : "text-white hover:underline"}>Sobre mí</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-black underline" : "text-white hover:underline"}>Contacto</NavLink>
      </nav>
      <div className="flex space-x-4 mr-4">
        <a href="https://wa.me/+529982019334" target="_blank"><img src="/images/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" /></a>
        <a href="https://instagram.com" target="_blank"><img src="/images/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
        <a href="tel:+123456789"><img src="/images/phone.svg" alt="Teléfono" className="w-6 h-6" /></a>
      </div>
    </header>
  );
}