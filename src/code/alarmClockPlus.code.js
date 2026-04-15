const alarmClockPlusCode = `
import { motion } from "framer-motion";

export default function AlarmClockPlus({
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
      style={{ overflow: "visible" }}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {/* Clock Body */}
      <motion.circle
        cx="12"
        cy="13"
        r="8"
        variants={{
          rest: { x: 0 },
          hover: { x: [0, -1.2, 1.2, -1.2, 1.2, 0] },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      />

      {/* Bells */}
      <motion.path
        d="M5 3 2 6"
        variants={{
          rest: { rotate: 0 },
          hover: { rotate: -15 },
        }}
        transition={{ duration: 0.2 }}
        style={{ transformOrigin: "3.5px 4.5px" }}
      />

      <motion.path
        d="m22 6-3-3"
        variants={{
          rest: { rotate: 0 },
          hover: { rotate: 15 },
        }}
        transition={{ duration: 0.2 }}
        style={{ transformOrigin: "20.5px 4.5px" }}
      />

      {/* Legs */}
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />

      {/* Plus */}
      <motion.g
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.15 },
        }}
        transition={{ duration: 0.2 }}
        style={{ transformOrigin: "12px 13px" }}
      >
        <path d="M12 10v6" />
        <path d="M9 13h6" />
      </motion.g>
    </motion.svg>
  );
}
`;

export default alarmClockPlusCode;