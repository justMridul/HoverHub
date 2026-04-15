import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function IconCard({ title, component: IconComponent, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
      group
      relative
      w-32 h-32 sm:w-36 sm:h-36   /* slightly bigger card */
      bg-[#0f0f14]
      border border-zinc-800
      rounded-xl
      p-4
      flex flex-col items-center justify-center gap-3
      transition-all duration-300
      hover:border-zinc-600
      "
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.18 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-zinc-400 group-hover:text-white transition-colors"
      >
        <IconComponent size={42} />   {/* 🔥 increased from 30 → 42 */}
      </motion.div>

      {/* Name */}
      <p className="text-xs text-zinc-500 group-hover:text-zinc-300 text-center transition-colors">
        {title}
      </p>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="
        absolute bottom-2 right-2
        p-1.5
        rounded-md
        bg-zinc-800
        hover:bg-zinc-700
        transition
        opacity-0 group-hover:opacity-100
        "
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </motion.div>
  );
}