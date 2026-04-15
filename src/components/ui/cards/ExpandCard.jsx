import { motion } from "framer-motion";

export default function ExpandCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="
      w-full
      h-40
      rounded-xl
      bg-zinc-900
      border border-zinc-700
      flex items-center justify-center
      text-white
      font-medium
      "
    >
      Expand Card
    </motion.div>
  );
}