import { motion } from "framer-motion";

export default function AnimatedBorderCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center"
    >
      {/* Subtle Green Animated Border */}
      <div
        className="
        absolute inset-0
        rounded-xl
        bg-[conic-gradient(from_0deg,transparent,#22c55e,transparent,#16a34a,transparent)]
        opacity-40
        animate-spin-slow
        "
      />

      {/* Inner Card */}
      <div
        className="
        relative
        w-[calc(100%-2px)]
        h-[calc(100%-2px)]
        rounded-xl
        bg-zinc-900
        border border-zinc-800
        flex items-center justify-center
        text-white font-medium
        "
      >
        Animated Border
      </div>
    </motion.div>
  );
}