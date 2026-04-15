import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function IconSlideButton() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl text-white transition"
    >

      <span>Continue</span>

      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: 6 }
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ArrowRight size={18} />
      </motion.span>

    </motion.button>
  );
}