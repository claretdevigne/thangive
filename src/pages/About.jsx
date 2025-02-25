import FOTO_PERSONAL from '/images/foto-personal.png'

export default function About() {
  return (
    <main className="p-6 max-w-3xl mx-auto pt-20">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Quién está detrás de los globos</h2>
      <p className="text-black text-center">
        Soy Thania, apasionada por crear arreglos únicos que alegren tus eventos. Quiero traer sonrisas con cada globo.
      </p>
      <img src={FOTO_PERSONAL} alt="Foto personal" className="mt-6 mx-auto rounded-full w-48 h-48 object-cover fade-in" />
      <h3 className="text-2xl font-bold text-white mt-8">Todo lo que necesitas saber</h3>
      <ul className="list-disc list-inside mt-4 text-black">
        <li>Globos con helio: hasta 12 horas de flotación.</li>
        <li>Globos con aire: duraderos y económicos.</li>
        <li>Entregas en Cancún con 48 horas de aviso.</li>
      </ul>
    </main>
  );
}