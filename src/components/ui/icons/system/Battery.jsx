import { motion } from "framer-motion";

export default function Battery({
  size = 26,
  color = "currentColor",
  strokeWidth = 2.5,
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {/* Terminal */}
      <path d="M46 20V28" />

      {/* Body */}
      <motion.path
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.25 }}
        style={{ transformOrigin: "50% 50%" }}
        d="M37 10H8C5.23858 10 3 12.2386 3 15V33C3 35.7614 5.23858 38 8 38H37C39.7614 38 42 35.7614 42 33V15C42 12.2386 39.7614 10 37 10Z"
      />

      {/* Bolt */}
      <motion.path
        variants={{
          rest: { pathLength: 0, opacity: 0 },
          hover: { pathLength: 1, opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        d="M33.5 25.6667L22.5 19V29L11.5 22.3333"
      />
    </motion.svg>
  );
}