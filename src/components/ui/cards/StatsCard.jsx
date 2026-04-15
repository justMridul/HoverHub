import { motion } from "framer-motion";

export default function StatsCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
      w-full h-full
      rounded-xl
      bg-zinc-900
      border border-zinc-800
      p-6
      flex flex-col justify-center
      "
    >
      <div className="text-zinc-400 text-sm">Monthly Revenue</div>

      <div className="text-3xl font-semibold text-white mt-1">
        $24,500
      </div>

      <div className="text-emerald-400 text-sm mt-2">
        +12% growth
      </div>
    </motion.div>
  );
}