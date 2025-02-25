import BalloonCard from '../components/BalloonCard';

export default function Catalog() {
  const products = [
    { title: "Arco de cumpleaños", description: "Perfecto para fiestas", buttonText: "Consultar", imageUrl: "https://plus.unsplash.com/premium_photo-1675884023667-9a1903611653?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { title: "Centro de mesa", description: "Elegante y sencillo", buttonText: "Personalizar", imageUrl: "https://images.unsplash.com/photo-1659670216057-977bb5a43a7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Decoración evento", description: "Para bodas o celebraciones", buttonText: "Consultar", imageUrl: "https://images.unsplash.com/photo-1637724564713-933369c11522?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJhbGxvb24lMjBhcnJhbmdlbWVudHxlbnwwfDB8MHx8fDI%3D" }
  ];

  return (
    <main className="p-6 bg-[#A2918B] pt-20">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Nuestros arreglos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <BalloonCard key={index} {...product} />
        ))}
      </div>
      <p className="text-center text-white font-bold mt-4">Opciones con helio o aire disponibles</p>
    </main>
  );
}