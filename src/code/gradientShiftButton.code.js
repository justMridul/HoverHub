const gradientShiftButtonCode = `
import { motion } from "framer-motion";

export default function GradientShiftButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="
      px-6 py-3
      rounded-xl
      text-white
      font-medium
      bg-gradient-to-r
      from-indigo-500
      via-blue-500
      to-indigo-500
      bg-[length:200%_100%]
      "
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      Gradient Button
    </motion.button>
  );
}
`;

export default gradientShiftButtonCode;