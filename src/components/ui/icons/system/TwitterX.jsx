import { motion, useAnimate } from "framer-motion";

export default function TwitterX({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(
      ".x-icon",
      { scale: [1, 1.1, 1], rotate: [0, -10, 10, 0] },
      { duration: 0.5, ease: "easeInOut" }
    );
  };

  const stop = () => {
    animate(".x-icon", { scale: 1, rotate: 0 }, { duration: 0.2 });
  };

  return (
    <motion.svg
      ref={scope}
      onHoverStart={start}
      onHoverEnd={stop}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer ${className}`}
    >
      <motion.g className="x-icon" style={{ transformOrigin: "center" }}>
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </motion.g>
    </motion.svg>
  );
}