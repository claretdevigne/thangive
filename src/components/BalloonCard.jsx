export default function BalloonCard({ title, description, buttonText, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-card p-4 text-center fade-in">
      <img src={imageUrl || "https://via.placeholder.com/300x200"} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold text-[#FF6F61]">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-[#B3E5FC] text-[#FF6F61] py-2 px-4 rounded-full btn-hover">{buttonText}</button>
    </div>
  );
}