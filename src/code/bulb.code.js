const bulbCode = `
import { motion, useAnimate } from "framer-motion";

export default function Bulb({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  return (
    <motion.div ref={scope}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <motion.path d="M4 11h-1" />
        <motion.path d="M12 2v1" />
        <motion.path d="M21 11h-1" />
        <motion.path d="M5 5l1 1" />
        <motion.path d="M18 5l-1 1" />
        <motion.path d="M14 18a3 3 0 0 1-6 0h6z" />
        <motion.path d="M12 6a6 6 0 0 1 3.6 10.8h-7.2A6 6 0 0 1 12 6z" />
      </svg>
    </motion.div>
  );
}
`;

export default bulbCode;