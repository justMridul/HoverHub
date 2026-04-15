const floatingLiftButtonCode = `
import { motion } from "framer-motion";

export default function FloatingLiftButton() {
  return (
    <motion.button
      whileHover={{
        y: -6,
        boxShadow: "0 12px 30px rgba(0,0,0,0.35)"
      }}
      whileTap={{ y: -2 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className="px-6 py-3 rounded-xl bg-sky-500 text-white font-medium shadow-md"
    >
      Floating Button
    </motion.button>
  );
}
`;

export default floatingLiftButtonCode;