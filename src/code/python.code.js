const pythonCode = `
import { motion } from "framer-motion";

export default function Python({ size = 26, color = "currentColor", strokeWidth = 2 }) {
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
      <motion.path
        variants={{ rest: { x: 0, y: 0 }, hover: { x: [-1, 1, 0], y: [-1, 1, 0] } }}
        transition={{ duration: 0.6 }}
        d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"
      />

      <motion.path
        variants={{ rest: { x: 0, y: 0 }, hover: { x: [1, -1, 0], y: [1, -1, 0] } }}
        transition={{ duration: 0.6 }}
        d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"
      />

      <motion.path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />

      <motion.path
        variants={{ rest: { scale: 1 }, hover: { scale: [1, 1.5, 1] } }}
        transition={{ duration: 0.4 }}
        d="M11 6l0 .01"
      />

      <motion.path
        variants={{ rest: { scale: 1 }, hover: { scale: [1, 1.5, 1] } }}
        transition={{ duration: 0.4 }}
        d="M13 18l0 .01"
      />
    </motion.svg>
  );
}
`;
export default pythonCode;