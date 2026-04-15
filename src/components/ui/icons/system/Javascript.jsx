import { motion } from "framer-motion";

export default function Javascript({
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
      {/* Border */}
      <motion.path
        variants={{
          rest: { rotate: 0 },
          hover: { rotate: [0, 5, -5, 0] },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
        d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"
      />

      {/* JS text */}
      <motion.path
        variants={{
          rest: { pathLength: 1, opacity: 1 },
          hover: { pathLength: [0, 1], opacity: [0, 1] },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        d="M7.5 8h3v8l-2 -1"
      />

      <motion.path
        variants={{
          rest: { pathLength: 1, opacity: 1 },
          hover: { pathLength: [0, 1], opacity: [0, 1] },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"
      />
    </motion.svg>
  );
}