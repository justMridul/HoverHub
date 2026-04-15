import { motion } from "framer-motion";
import { useState } from "react";

export default function SpotlightButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      className="
      relative
      overflow-hidden
      px-6 py-3
      rounded-xl
      bg-zinc-900
      border border-zinc-700
      text-white
      font-medium
      "
    >
      {/* spotlight */}
      <motion.span
        className="absolute pointer-events-none"
        animate={{
          left: position.x,
          top: position.y
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          width: 120,
          height: 120,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)"
        }}
      />

      <span className="relative z-10">
        Spotlight Button
      </span>
    </button>
  );
}