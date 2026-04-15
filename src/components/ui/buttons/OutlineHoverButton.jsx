import { motion } from "framer-motion";

export default function OutlineHoverButton() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      className="
      relative
      overflow-hidden
      px-6 py-3
      rounded-xl
      border border-orange-500
      text-orange-400
      font-medium
      "
    >
      {/* fill animation */}
      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 }
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
        absolute
        inset-0
        origin-left
        bg-orange-500
        "
      />

      {/* text */}
      <span className="relative z-10 group-hover:text-white">
        Outline Button
      </span>
    </motion.button>
  );
}