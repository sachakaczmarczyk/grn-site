
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-green-100 flex flex-col items-center justify-center text-center py-20 px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-green-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Green Running Nature
      </motion.h1>
      <p className="mt-4 text-lg text-green-800 max-w-xl">
        Des vêtements de sport durables pour un monde plus propre.
      </p>
      <button className="mt-8 px-6 py-3 bg-green-800 text-white rounded-full hover:bg-green-700 transition">
        Explorer la collection
      </button>
    </section>
  );
}

<img src="/assets/banniere-accueil.png" alt="Bannière GRN" className="w-full h-auto mb-8" />