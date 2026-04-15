import { motion } from "framer-motion";

export default function MorphButton() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      variants={{
        rest: {
          borderRadius: "12px",
          scale: 1
        },
        hover: {
          borderRadius: "20px",
          scale: 1.06
        }
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut"
      }}
      className="px-6 py-3 bg-purple-600 text-white font-medium"
    >
      Morph Button
    </motion.button>
  );
}