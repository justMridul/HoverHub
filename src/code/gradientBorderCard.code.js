const gradientBorderCardCode = `
import { motion } from "framer-motion";

export default function GradientBorderCard() {
  return (
    <div className="relative w-80 h-44 rounded-2xl p-[5px] overflow-hidden">
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          background: [
            "linear-gradient(45deg, #e9a956e0, #3b82f6)",
            "linear-gradient(135deg, #3b82f6, #a855f7)",
            "linear-gradient(225deg, #a855f7, #3b82f6)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative h-full w-full rounded-2xl bg-zinc-900 flex items-center justify-center text-white text-xl font-semibold">
        Gradient Border
      </div>
    </div>
  );
}
`;

export default gradientBorderCardCode;