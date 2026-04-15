import { motion } from "framer-motion";

export default function BellOff({
  size = 26,
  color = "currentColor",
  strokeWidth = 2,
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Bell body shake */}
      <motion.path
        d="M10.268 21a2 2 0 0 0 3.464 0"
        variants={{
          rest: { x: 0 },
          hover: { x: [-1, 1, -1, 1, 0] },
        }}
        transition={{ duration: 0.4 }}
      />

      <motion.path
        d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"
        variants={{
          rest: { x: 0 },
          hover: { x: [-1, 1, -1, 1, 0] },
        }}
        transition={{ duration: 0.4 }}
      />

      <motion.path
        d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"
        variants={{
          rest: { x: 0 },
          hover: { x: [-1, 1, -1, 1, 0] },
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Slash draw */}
      <motion.path
        d="m2 2 20 20"
        variants={{
          rest: { pathLength: 1 },
          hover: { pathLength: [0, 1] },
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.svg>
  );
}
