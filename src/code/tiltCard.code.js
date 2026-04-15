const tiltCardCode = `
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TiltCard() {
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateYValue = ((x / width) - 0.5) * 20;
    const rotateXValue = -((y / height) - 0.5) * 20;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="w-80 h-44 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center text-white font-semibold text-xl cursor-pointer"
    >
      3D Tilt Card
    </motion.div>
  );
}
`;

export default tiltCardCode;