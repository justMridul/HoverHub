import { motion } from "framer-motion";

export default function ArrowBigUpDash({
  size = 40,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.path
        variants={{
          rest: { y: 0 },
          hover: { y: -4 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"
      />

      <motion.path
        variants={{
          rest: { scale: 1, opacity: 1 },
          hover: { scale: 1.2, opacity: 0.7 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "12px 20px" }}
        d="M9 20h6"
      />
    </motion.svg>
  );
}
