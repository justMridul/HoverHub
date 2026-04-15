const cursorFollowCardCode = `
import { useRef } from "react";
import { motion } from "framer-motion";

export default function CursorFollowCard() {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty("--x", \`\${x}px\`);
    ref.current.style.setProperty("--y", \`\${y}px\`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="
      relative
      w-full h-full
      rounded-xl
      border border-zinc-800
      bg-zinc-900
      flex items-center justify-center
      text-white
      overflow-hidden
      "
    >
      <div
        className="
        absolute inset-0 opacity-0 hover:opacity-100 transition
        bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.15),transparent_40%)]
        "
      />

      <span className="relative z-10">Cursor Follow</span>
    </div>
  );
}
`;

export default cursorFollowCardCode;