const flipCardCode = `
import { motion } from "framer-motion";
import { useState } from "react";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-full perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >

        <div
          className="
          absolute inset-0
          rounded-xl
          bg-zinc-900
          border border-zinc-700
          flex items-center justify-center
          text-white
          font-medium
          "
          style={{ backfaceVisibility: "hidden" }}
        >
          Front Side
        </div>

        <div
          className="
          absolute inset-0
          rounded-xl
          flex items-center justify-center
          text-white
          font-medium
          bg-gradient-to-br from-indigo-600 to-blue-600
          "
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden"
          }}
        >
          Back Side
        </div>

      </motion.div>
    </div>
  );
}
`;

export default flipCardCode;