const glassButtonCode = `
import { motion } from "framer-motion";

export default function GlassButton() {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(37, 99, 235, 0.45)"
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        px-6 py-3
        rounded-xl
        text-white
        font-medium
        backdrop-blur-md
        bg-blue-600/40
        border border-blue-500/40
        shadow-md
        hover:bg-blue-600/55
        transition
      "
    >
      Glass Button
    </motion.button>
  );
}
`;

export default glassButtonCode;