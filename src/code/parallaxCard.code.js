const parallaxCardCode = `
import { useState } from "react";

export default function ParallaxCard() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;

    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
      w-full h-full
      rounded-xl
      border border-zinc-800
      bg-zinc-900
      flex items-center justify-center
      overflow-hidden
      "
    >
      <div
        style={{
          transform: \`translate(\${pos.x}px, \${pos.y}px)\`,
        }}
        className="text-white font-medium transition"
      >
        Parallax Card
      </div>
    </div>
  );
}
`;

export default parallaxCardCode;