import { motion } from "framer-motion";

export default function GlassCard() {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
      relative
      w-full
      h-full
      rounded-xl
      overflow-hidden
      flex
      items-center
      justify-center
      "
    >
      {/* Glass Background */}
      <div
        className="
        absolute inset-0
        backdrop-blur-xl
        bg-white/[0.06]
        border border-white/10
        rounded-xl
        "
      />

      {/* Subtle gradient tint */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-br
        from-white/[0.08]
        via-transparent
        to-transparent
        opacity-60
        "
      />

      {/* Light reflection */}
      <div
        className="
        absolute
        -top-10
        -left-10
        w-40
        h-40
        bg-white/10
        blur-3xl
        rounded-full
        opacity-40
        "
      />

      {/* Content */}
      <div className="relative z-10 text-white font-medium">
        Glass Card
      </div>
    </motion.div>
  );
}