import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setFormData({ name: '', phone: '', date: '', message: '' });
  };

  return (
    <main className="p-6 max-w-lg mx-auto pt-20">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Haz tu pedido</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" className="w-full p-3 rounded-md border border-[#C8E6C9]" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" className="w-full p-3 rounded-md border border-[#C8E6C9]" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 rounded-md border border-[#C8E6C9]" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" className="w-full p-3 rounded-md border border-[#C8E6C9] h-32" required></textarea>
        <button type="submit" className="w-full bg-[#FF6F61] text-white py-3 font-bold rounded-full btn-hover">Enviar</button>
      </form>
      <div className="mt-6 text-center text-black">
        <p>Teléfono: <a href="tel:+529982019334" className="text-white font-bold">+529982019334</a></p>
        <p>Email: <a href="mailto:info@thangive.com" className="text-white font-bold">info@thangive.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/+529982019334" className="text-white font-bold">Enviar mensaje</a></p>
      </div>
    </main>
  );
}