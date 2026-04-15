import { motion, useAnimate } from "framer-motion";

export default function WifiOff({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    animate(".slash-line", { pathLength: [0, 1] }, { duration: 0.4 });
    animate(".wifi-waves", { opacity: [1, 0.5, 1] }, { duration: 0.4 });
  };

  const stop = () => {
    animate(".slash-line", { pathLength: 1 }, { duration: 0.2 });
    animate(".wifi-waves", { opacity: 1 }, { duration: 0.2 });
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
      <motion.g className="wifi-waves">
        <path d="M12 18l.01 0" />
        <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
        <path d="M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2" />
        <path d="M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374" />
      </motion.g>
      <motion.path
        className="slash-line"
        d="M3 3l18 18"
        style={{ transformOrigin: "center" }}
      />
    </motion.svg>
  );
}