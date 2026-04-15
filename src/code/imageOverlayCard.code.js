const imageOverlayCardCode = `
import { motion } from "framer-motion";

export default function ImageOverlayCard() {
  return (
    <div className="relative w-full h-40 rounded-xl overflow-hidden border border-zinc-700">

      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="card"
        className="w-full h-full object-cover"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="
        absolute inset-0
        bg-black/60
        flex items-center justify-center
        text-white
        font-medium
        "
      >
        View Details
      </motion.div>

    </div>
  );
}
`;

export default imageOverlayCardCode;