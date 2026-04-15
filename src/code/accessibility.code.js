const accessibilityCode = `
import { motion } from "framer-motion";

export default function Accessibility({
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
      {/* Head */}
      <motion.circle
        variants={{
          rest: { y: 0 },
          hover: { y: -1.5 },
        }}
        transition={{ duration: 0.2 }}
        cx="16"
        cy="4"
        r="1"
      />

      {/* Body */}
      <motion.path
        variants={{
          rest: { y: 0 },
          hover: { y: -1.5 },
        }}
        transition={{ duration: 0.2 }}
        d="m18 19 1-7-6 1"
      />

      <path d="m5 8 3-3 5.5 3-2.36 3.5" />

      {/* Wheel */}
      <motion.g
        variants={{
          rest: { rotate: 0 },
          hover: { rotate: 120 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformOrigin: "8.5px 17.5px" }}
      >
        <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
        <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
      </motion.g>
    </motion.svg>
  );
}
`;

export default accessibilityCode;