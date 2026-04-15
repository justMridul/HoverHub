const actionCardCode = `
import { motion } from "framer-motion";

export default function ActionCard() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
      w-full h-full
      rounded-xl
      bg-gradient-to-br
      from-zinc-900
      to-zinc-950
      border border-zinc-800
      p-6
      flex flex-col justify-center items-start
      "
    >
      <div className="text-white text-lg font-medium">
        Upgrade Plan
      </div>

      <p className="text-zinc-400 text-sm mt-1">
        Unlock premium features and advanced analytics.
      </p>

      <button
        className="
        mt-4
        px-4 py-2
        text-sm
        bg-orange-500
        hover:bg-orange-600
        rounded-md
        text-white
        transition
        "
      >
        Upgrade
      </button>
    </motion.div>
  );
}
`;

export default actionCardCode;