import { motion } from "framer-motion";

export default function ShimmerButton() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      className="
      relative
      overflow-hidden
      px-6 py-3
      rounded-xl
      font-medium
      text-black
      bg-orange-500
      "
    >
      {/* shimmer layer */}
      <motion.span
        variants={{
          rest: { x: "-120%" },
          hover: { x: "120%" }
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
        "
      />

      <span className="relative z-10">
        Shimmer Button
      </span>
    </motion.button>
  );
}