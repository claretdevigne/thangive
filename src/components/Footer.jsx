import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#FFC1CC] p-6 text-center font-bold text-[#5D101D]">
      <p>© 2025 ThanGive - Globos que alegran tus días</p>
      <div className="flex justify-center space-x-6 mt-2">
        <NavLink to="/" className="hover:underline ">Inicio</NavLink>
        <NavLink to="/catalog" className="hover:underline">Catálogo</NavLink>
        <NavLink to="/about" className="hover:underline">Sobre mi</NavLink>
        <NavLink to="/contact" className="hover:underline">Contacto</NavLink>
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://wa.me/+529982019334"><img src="/images/whatsapp_footer.svg" alt="WhatsApp" className="w-6 h-6" /></a>
        <a href="https://instagram.com"><img src="/images/instagram_footer.svg" alt="Instagram" className="w-6 h-6" /></a>
      </div>
    </footer>
  );
}