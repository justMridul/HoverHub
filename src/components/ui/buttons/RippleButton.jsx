import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export default function RippleButton() {
  const [ripples, setRipples] = useState([]);
  const ref = useRef(null);

  const handleClick = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className="relative overflow-hidden px-8 py-3 bg-blue-600 rounded-xl text-white font-medium"
    >
      Click Ripple

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute w-20 h-20 bg-white/40 rounded-full pointer-events-none"
            style={{
              left: ripple.x - 40,
              top: ripple.y - 40,
            }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
}
