import { motion } from "framer-motion";

export default function RevealContentCard() {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
      relative
      w-full
      h-full
      rounded-xl
      border border-zinc-800
      bg-zinc-900
      overflow-hidden
      flex
      items-center
      justify-center
      text-white
      "
    >
      {/* Default Content */}
      <motion.div
        variants={{
          rest: { opacity: 1, y: 0 },
          hover: { opacity: 0, y: -20 },
        }}
        transition={{ duration: 0.25 }}
        className="absolute"
      >
        Hover Me
      </motion.div>

      {/* Hidden Content */}
      <motion.div
        variants={{
          rest: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-zinc-800
        to-zinc-900
        flex
        items-center
        justify-center
        font-medium
        "
      >
        Hidden Content
      </motion.div>
    </motion.div>
  );
}