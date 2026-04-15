const glowButtonCode = `
import { motion } from "framer-motion";

export default function GlowButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      className="relative px-6 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white overflow-hidden"
    >
      <span className="relative z-10">Glow Button</span>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-blue-500 blur-xl"
      />
    </motion.button>
  );
}
`;

export default glowButtonCode;