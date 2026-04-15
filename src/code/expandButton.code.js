const expandButtonCode = `
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ExpandButton() {
  return (
    <motion.button
      initial={{ width: 140 }}
      whileHover={{ width: 200 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 rounded-xl text-white font-medium overflow-hidden"
    >
      <span>Get Started</span>

      <motion.span
        initial={{ x: -10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight size={18} />
      </motion.span>
    </motion.button>
  );
}
`;

export default expandButtonCode;