import { useRef } from "react";
import { motion } from "framer-motion";

export default function MagneticCard() {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="
      w-full h-full
      rounded-xl
      border border-zinc-800
      bg-zinc-900
      flex items-center justify-center
      text-white
      transition-transform
      "
    >
      Magnetic Card
    </div>
  );
}