import { motion } from "framer-motion";

export default function Vercel({
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
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.path
        variants={{
          rest: { rotateY: 0 },
          hover: { rotateY: 180 },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        d="M3 19h18l-9 -15z"
      />
    </motion.svg>
  );
}