import { motion } from "framer-motion";

export default function NeonPulseButton() {
  return (
    <motion.button
      whileHover={{
        boxShadow: "0 0 18px rgba(99,102,241,0.9)"
      }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(99,102,241,0.2)",
          "0 0 12px rgba(99,102,241,0.6)",
          "0 0 0px rgba(99,102,241,0.2)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity
      }}
      className="px-6 py-3 rounded-xl border border-indigo-500 text-indigo-400 bg-zinc-900"
    >
      Neon Pulse
    </motion.button>
  );
}