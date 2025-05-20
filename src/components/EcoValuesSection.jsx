
import { motion } from "framer-motion";
import { Leaf, Handshake, Heart } from "lucide-react";

const values = [
  { icon: <Leaf className="w-10 h-10 text-green-700" />, title: "Matériaux recyclés" },
  { icon: <Handshake className="w-10 h-10 text-green-700" />, title: "Production éthique" },
  { icon: <Heart className="w-10 h-10 text-green-700" />, title: "Respect du corps & de la planète" },
];

export default function EcoValuesSection() {
  return (
    <section className="bg-green-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-green-900 mb-10">Nos engagements</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {values.map((val, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {val.icon}
            <p className="text-green-800 font-medium">{val.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
