const heartBeatCode = `
import { motion } from "framer-motion";

export default function HeartBeat({ size = 26, color = "currentColor", strokeWidth = 2 }) {
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
      style={{ overflow: "visible" }}
    >
      <motion.path
        variants={{
          rest: { scale: 1 },
          hover: { scale: [1, 1.15, 1, 1.25, 1] },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "50% 50%" }}
        d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
      />
    </motion.svg>
  );
}
`;
export default heartBeatCode;