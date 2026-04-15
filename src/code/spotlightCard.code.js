const spotlightCardCode = `
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function SpotlightCard() {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-80 h-44 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden cursor-pointer"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: \`radial-gradient(300px circle at \${springX}px \${springY}px, rgba(168,85,247,0.3), transparent 80%)\`,
        }}
      />

      <h2 className="relative text-white text-xl font-semibold z-10">
        Spotlight Card
      </h2>
    </motion.div>
  );
}
`;

export default spotlightCardCode;