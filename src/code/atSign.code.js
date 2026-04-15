const atSignCode = `
import { motion } from "framer-motion";

export default function AtSign({
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
      animate="rest"
      whileHover="hover"
    >
      {/* Outer circle */}
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        variants={{
          rest: { pathLength: 1, opacity: 0.6 },
          hover: { pathLength: [0, 1], opacity: [0, 1] },
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />

      {/* Main path */}
      <motion.path
        d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
        variants={{
          rest: { pathLength: 1, opacity: 0.6 },
          hover: { pathLength: [0, 1], opacity: [0, 1] },
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      />

      {/* Inner circle */}
      <motion.circle
        cx="12"
        cy="12"
        r="4"
        variants={{
          rest: { pathLength: 1, opacity: 0.6 },
          hover: { pathLength: [0, 1], opacity: [0, 1] },
        }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
      />
    </motion.svg>
  );
}
`;

export default atSignCode;