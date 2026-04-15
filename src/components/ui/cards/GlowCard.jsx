import { motion } from "framer-motion";

export default function GlowCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative w-80 h-44 rounded-2xl bg-zinc-900 border border-zinc-800 p-6 flex items-center justify-center cursor-pointer overflow-hidden"
    >
      {/* Glow Layer */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(168,85,247,0.4), transparent 70%)",
        }}
      />

      <h2 className="relative text-xl font-semibold text-white z-10">
        Glow Card
      </h2>
    </motion.div>
  );
}
