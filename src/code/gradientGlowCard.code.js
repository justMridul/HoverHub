const gradientGlowCardCode = `
import { motion } from "framer-motion";

export default function GradientGlowCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
      w-full h-full
      rounded-xl
      bg-zinc-900
      border border-zinc-700
      flex items-center justify-center
      text-white font-medium
      relative overflow-hidden
      "
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-xl" />

      <span className="relative z-10">Gradient Glow</span>
    </motion.div>
  );
}
`;

export default gradientGlowCardCode;