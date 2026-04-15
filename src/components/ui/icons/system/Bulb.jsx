import { motion, useAnimate } from "framer-motion";

export default function Bulb({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await Promise.all([
      animate(".ray-left", { opacity: 0 }, { duration: 0.1 }),
      animate(".ray-top", { opacity: 0 }, { duration: 0.1 }),
      animate(".ray-right", { opacity: 0 }, { duration: 0.1 }),
      animate(".ray-top-left", { opacity: 0 }, { duration: 0.1 }),
      animate(".ray-top-right", { opacity: 0 }, { duration: 0.1 }),
    ]);

    await Promise.all([
      animate(".ray-left", { opacity: 1 }, { duration: 0.4, ease: "easeOut" }),
      animate(".ray-top", { opacity: 1 }, { duration: 0.4, ease: "easeOut" }),
      animate(".ray-right", { opacity: 1 }, { duration: 0.4, ease: "easeOut" }),
      animate(".ray-top-left", { opacity: 1 }, { duration: 0.4, ease: "easeOut" }),
      animate(".ray-top-right", { opacity: 1 }, { duration: 0.4, ease: "easeOut" }),
    ]);
  };

  const stop = () => {
    animate(
      ".ray-left, .ray-top, .ray-right, .ray-top-left, .ray-top-right",
      { opacity: 1 },
      { duration: 0.2 }
    );
  };

  return (
    <motion.div ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth}
        fill={color}
        className={`cursor-pointer ${className}`}
      >
        <motion.path className="ray-left" d="M4 11h-1" />
        <motion.path className="ray-top" d="M12 2v1" />
        <motion.path className="ray-right" d="M21 11h-1" />
        <motion.path className="ray-top-left" d="M5 5l1 1" />
        <motion.path className="ray-top-right" d="M18 5l-1 1" />
        <motion.path d="M14 18a3 3 0 0 1-6 0h6z" />
        <motion.path d="M12 6a6 6 0 0 1 3.6 10.8h-7.2A6 6 0 0 1 12 6z" />
      </svg>
    </motion.div>
  );
}
