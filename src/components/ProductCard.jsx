
export default function ProductCard({ name, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img src={image} alt={name} className="h-48 w-full object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold text-green-900 mb-2">{name}</h3>
      <p className="text-green-700 mb-4">{description}</p>
      <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
        Découvrir
      </button>
    </div>
  );
}
