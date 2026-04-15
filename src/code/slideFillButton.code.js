const slideFillButtonCode = `
import { motion } from "framer-motion";

export default function SlideFillButton() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      className="relative px-6 py-3 border border-sky-500 rounded-xl overflow-hidden text-sky-400"
    >
      <motion.span
        variants={{
          rest: { x: "-100%" },
          hover: { x: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-sky-500"
      />

      <span className="relative z-10 hover:text-black transition">
        Slide Fill
      </span>
    </motion.button>
  );
}
`;

export default slideFillButtonCode;