import { motion, useAnimate } from "framer-motion";

export default function Rupee({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".rupee-main, .rupee-line", { pathLength: 0, opacity: 0 }, { duration: 0 });

    await animate(".rupee-line", { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: "easeOut" });

    await animate(".rupee-main", { pathLength: 1, opacity: 1 }, { duration: 0.35, ease: "easeOut" });

    animate(".rupee-symbol", { scale: [0.96, 1] }, { duration: 0.2, ease: "easeOut" });
  };

  const stop = () => {
    animate(".rupee-main, .rupee-line", { pathLength: 1, opacity: 1 }, { duration: 0.2 });
    animate(".rupee-symbol", { scale: 1 }, { duration: 0.2 });
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
      <motion.g className="rupee-symbol" style={{ transformOrigin: "50% 50%" }}>
        <motion.path
          className="rupee-main"
          d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6"
          pathLength={1}
        />
        <motion.path
          className="rupee-line"
          d="M7 9h11"
          pathLength={1}
        />
      </motion.g>
    </motion.svg>
  );
}
