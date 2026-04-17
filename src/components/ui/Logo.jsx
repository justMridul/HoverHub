import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer select-none"
      whileHover="hover"
      initial="initial"
    >
      {/* ICON */}
      <div className="relative w-6 h-6 flex items-center justify-center">

        {/* BACK LAYER */}
        <motion.div
          className="absolute w-4 h-4 rounded-md bg-orange-500"
          variants={{
            initial: { x: -2, y: -2 },
            hover: { x: -6, y: -6 },
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* FRONT LAYER */}
        <motion.div
          className="absolute w-4 h-4 rounded-md bg-orange-400"
          variants={{
            initial: { x: 2, y: 2 },
            hover: { x: 6, y: 6 },
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>

      {/* TEXT */}
      <span className="text-lg font-semibold tracking-tight">
        <span className="text-white">Hover</span>
        <span className="text-orange-400">Hub</span>
      </span>
    </motion.div>
  );
}