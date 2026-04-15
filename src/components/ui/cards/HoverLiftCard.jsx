import { motion } from "framer-motion";

export default function HoverLiftCard() {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
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
      Hover Lift
    </motion.div>
  );
}