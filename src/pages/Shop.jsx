
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "T-shirt vert recyclé",
    description: "Respirant, léger et respectueux de la planète.",
    image: "/assets/tshirt-green.jpg",
  },
  {
    id: 2,
    name: "Short en fibres naturelles",
    description: "Confort optimal pour vos courses longues distances.",
    image: "/assets/short-nature.jpg",
  },
  {
    id: 3,
    name: "Débardeur eco-performant",
    description: "Ultra-léger, fait pour l'été.",
    image: "/assets/tanktop.jpg",
  },
];

export default function Shop() {
  return (
    <div className="pt-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-900 mb-10 text-center">Notre collection</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
