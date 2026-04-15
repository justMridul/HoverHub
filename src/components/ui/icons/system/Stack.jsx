import { motion } from "framer-motion";

export default function Stack({
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
      {/* Top */}
      <motion.path
        variants={{
          rest: { y: 0, scale: 1 },
          hover: { y: -3, scale: 1.05 },
        }}
        transition={{ duration: 0.3 }}
        d="M12 2l-8 4l8 4l8 -4l-8 -4"
      />

      {/* Middle */}
      <motion.path
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: { y: -1, opacity: 0.8 },
        }}
        transition={{ duration: 0.3 }}
        d="M4 10l8 4l8 -4"
      />

      <motion.path
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: { y: -1, opacity: 0.8 },
        }}
        transition={{ duration: 0.3 }}
        d="M4 14l8 4l8 -4"
      />

      {/* Bottom */}
      <motion.path
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: { y: 1, opacity: 0.6 },
        }}
        transition={{ duration: 0.3 }}
        d="M4 18l8 4l8 -4"
      />
    </motion.svg>
  );
}